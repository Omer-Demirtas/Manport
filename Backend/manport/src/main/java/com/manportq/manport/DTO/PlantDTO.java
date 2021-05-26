package com.manportq.manport.DTO;


import com.manportq.manport.Model.Plant;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PlantDTO
{
    private Long id;

    private String countryName;
    private String fullName;
    private String shortCode;
    private int liveAppCount;

    public Plant convert() {
        Plant plant = new Plant();
        plant.setCountryName(countryName);
        plant.setFullName(fullName);
        plant.setLiveAppCount(liveAppCount);
        plant.setShortCode(shortCode);
        return plant;
    }
}
