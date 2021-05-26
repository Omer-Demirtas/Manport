package com.manportq.manport.DTO;

import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.Country;
import com.manportq.manport.Model.Prod;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CountryDTO
{
    private Long id;

    private Boolean isActive;
    private Boolean isTracking;
    private Long plantId;
    private List<ProdDTO> prods = new ArrayList<>();

    public CountryDTO(Long id) {
        this.id = id;
    }

    public Country convertToCountry(Application application)
    {
        List<Prod> prodList = new ArrayList<>();
        for (ProdDTO prod : prods) {
            prodList.add(prod.convert(null));
        }
        return new
                Country.Builder()
                .id(id)
                .isActive(isActive)
                .plantId(plantId)
                .application(application)
                .isTracking(isTracking)
                .prods(prodList)
                .build();
    }


    /*
        Prod Service için
    */
    public Country convertToCountry()
    {
        Country c = new Country();
        c.setId(id);
        return c;
    }
}





