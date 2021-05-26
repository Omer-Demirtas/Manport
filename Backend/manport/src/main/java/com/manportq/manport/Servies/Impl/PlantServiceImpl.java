package com.manportq.manport.Servies.Impl;

import com.manportq.manport.DTO.PlantDTO;
import com.manportq.manport.Model.Messages.PlantMessage;
import com.manportq.manport.Model.Messages.WsMessage;
import com.manportq.manport.Model.Plant;
import com.manportq.manport.Model.types.MessageTypes;
import com.manportq.manport.Repository.PlantRepository;
import com.manportq.manport.Servies.CountryService;
import com.manportq.manport.Servies.PlantService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PlantServiceImpl implements PlantService
{
    private final CountryService countryService;
    private final SimpMessagingTemplate messagingTemplate;
    private final PlantRepository plantRepository;

    @Override
    public PlantDTO save(PlantDTO plantDTO) {
        PlantDTO plantDB = plantRepository.save(plantDTO.convert()).convertToDTO();
        messagingTemplate.convertAndSend("/topic/app/", new PlantMessage(MessageTypes.CREATE_PLANT, plantDB ));
        return plantDB;
    }

    @Override
    public Boolean deleteById(Long id)
    {
        plantRepository.deleteById(id);
        PlantDTO pId = new PlantDTO();
        pId.setId(id);
        messagingTemplate.convertAndSend("/topic/app/", new PlantMessage(MessageTypes.DELETE_PLANT, pId ));
        countryService.deleteAllByPlantId(id);
        return true;
    }

    @Override
    public PlantDTO update(PlantDTO plantDTO) {
        Optional<Plant> plant = plantRepository.findById(plantDTO.getId());

        if (plant.isPresent())
        {
            Plant p = plant.get();
            p.setShortCode(plantDTO.getShortCode());
            p.setCountryName(plantDTO.getCountryName());
            p.setFullName(plantDTO.getFullName());

            PlantDTO dto = plantRepository.save(p).convertToDTO();
            messagingTemplate.convertAndSend("/topic/app/",
                    new PlantMessage(MessageTypes.UPDATE_PLANT, dto ));
            return dto;
        }
        return new PlantDTO();
    }

    @Override
    public List<PlantDTO> getAll() {
        List<PlantDTO> plants = new ArrayList<>();
        plantRepository.findAll().forEach(plant -> plants.add(plant.convertToDTO()));
        return plants;
    }
}
