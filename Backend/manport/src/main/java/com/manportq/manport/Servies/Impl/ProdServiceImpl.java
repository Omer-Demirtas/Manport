package com.manportq.manport.Servies.Impl;

import com.manportq.manport.DTO.CountryDTO;
import com.manportq.manport.DTO.ProdDTO;
import com.manportq.manport.Model.Prod;
import com.manportq.manport.Repository.ProdRepository;
import com.manportq.manport.Servies.ProdService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProdServiceImpl implements ProdService
{

    private final ProdRepository prodRepository;

    @Override
    public ProdDTO save(ProdDTO prodDTO, CountryDTO countryDTO) {
        Prod prod  = prodDTO.convert(countryDTO.convertToCountry());

        return prodRepository.save(prod).convertDTO();
    }

    @Override
    public ProdDTO save(ProdDTO prodDTO, Long id) {
        return null;
    }

    @Override
    public ProdDTO deleteById(Long id) {
        return null;
    }
}
