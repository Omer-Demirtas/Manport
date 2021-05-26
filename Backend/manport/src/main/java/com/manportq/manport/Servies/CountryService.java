package com.manportq.manport.Servies;

import com.manportq.manport.DTO.CountryDTO;
import com.manportq.manport.Model.Application;

public interface CountryService
{
    CountryDTO save(CountryDTO countryDTO, Application application);

    CountryDTO save(CountryDTO countryDTO, Long id);

    CountryDTO update(CountryDTO countryDTO);

    Boolean delete(Long id);

    Boolean deleteAllByPlantId(Long plantId);
}
