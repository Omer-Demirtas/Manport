package com.manportq.manport.Model;


import com.manportq.manport.DTO.PlantDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Plant
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String countryName;
    private String fullName;
    private String shortCode;
    private int liveAppCount;

    public Plant(String countryName, String fullName, String shortCode)
    {
        this.countryName = countryName;
        this.shortCode = shortCode;
        this.fullName = fullName;
    }

    public PlantDTO convertToDTO()
    {
        return new PlantDTO(
                id,
                countryName,
                fullName,
                shortCode,
                liveAppCount
        );
    }
}
