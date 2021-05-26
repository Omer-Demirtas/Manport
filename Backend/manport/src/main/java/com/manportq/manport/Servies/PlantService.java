package com.manportq.manport.Servies;

import com.manportq.manport.DTO.PlantDTO;

import java.util.List;

public interface PlantService
{
    PlantDTO save(PlantDTO plantDTO);

    PlantDTO update(PlantDTO plantDTO);

    Boolean deleteById(Long id);

    List<PlantDTO> getAll();
}
