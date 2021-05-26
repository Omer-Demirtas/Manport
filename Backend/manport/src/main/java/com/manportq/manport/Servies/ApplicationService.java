package com.manportq.manport.Servies;

import com.manportq.manport.DTO.ApplicationDTO;

import java.util.List;

public interface ApplicationService
{
    List<ApplicationDTO> getAllApps();

    ApplicationDTO save(ApplicationDTO application);

    Boolean deleteById(Long id);

    ApplicationDTO update(ApplicationDTO application);

    ApplicationDTO getById(Long id);
}
