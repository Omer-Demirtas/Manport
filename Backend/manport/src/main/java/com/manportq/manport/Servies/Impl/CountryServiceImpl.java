package com.manportq.manport.Servies.Impl;


import com.manportq.manport.Model.Messages.CountryMessage;
import com.manportq.manport.Model.Prod;
import com.manportq.manport.Model.types.MessageTypes;
import com.manportq.manport.Repository.ProdRepository;
import com.manportq.manport.Servies.CountryService;
import com.manportq.manport.DTO.CountryDTO;
import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.Country;
import com.manportq.manport.Repository.ApplicationRepository;
import com.manportq.manport.Repository.CountryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CountryServiceImpl implements CountryService
{
    private final CountryRepository countryRepository;
    private final ApplicationRepository applicationRepository;
    private final ProdRepository prodRepository;
    private final SimpMessagingTemplate messagingTemplate;

    @Override
    public CountryDTO save(CountryDTO countryDTO, Application application)
    {
        return countryRepository.save(countryDTO.convertToCountry(application)).convertDTO();
    }

    @Override
    public CountryDTO save(CountryDTO countryDTO, Long id) {
        Optional<Application> appDB = applicationRepository.findById(id);

        if(appDB.isPresent())
        {
            Country country = countryDTO.convertToCountry(appDB.get());
            CountryDTO countryDB = countryRepository.save(country).convertDTO();
            messagingTemplate.convertAndSend("/topic/app/", new CountryMessage(MessageTypes.CREATE_COUNTRY, countryDB));
            return countryDB;
        }
        return null;
    }

    @Override
    public CountryDTO update(CountryDTO countryDTO) {
        Country countryDB;
        Optional<Country> c = countryRepository.findById(countryDTO.getId());

        if (c.isPresent())
        {
            countryDB = c.get();
            countryDTO.setId(countryDB.getId());
            return countryRepository.save(
                    countryDTO.
                            //convertToCountry(countryDB.getApplication()))
                            convertToCountry(null))
                            .convertDTO();
        }

        return null;
    }

    /*

        * Application veri tabanından çekilirken sadece
        isDeleted false olanları filtrelemyeyi yapana kadar kalıcı olarak silinecek
        * Bu sorun çözülene kadar EAGER olarak tanımladım
    */

    @Override
    public Boolean delete(Long id) {
        Optional<Country> country = countryRepository.findById(id);
        if(country.isPresent())
        {
            Country countryDB = country.get();

            List<Prod> prods = countryDB.getProds();

            prodRepository.deleteAll(prods);

            countryRepository.deleteById(id);
            messagingTemplate.convertAndSend("/topic/app/", new CountryMessage(MessageTypes.DELETE_COUNTRY, new CountryDTO(id)));
            return true;
        }
        return false;
    }

    @Override
    public Boolean deleteAllByPlantId(Long plantId) {
        List<Country> countries = countryRepository.findAllByPlantId(plantId);

        for (Country country : countries) {
            delete(country.getId());
        }

        return false;
    }
}
