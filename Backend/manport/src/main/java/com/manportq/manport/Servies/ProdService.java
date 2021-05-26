package com.manportq.manport.Servies;

import com.manportq.manport.DTO.CountryDTO;
import com.manportq.manport.DTO.ProdDTO;

public interface ProdService
{

    ProdDTO save(ProdDTO prodDTO, CountryDTO countryDTO);

    ProdDTO save(ProdDTO prodDTO, Long id);

    ProdDTO deleteById(Long id);
}
