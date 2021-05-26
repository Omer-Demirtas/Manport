package com.manportq.manport.Api;


import com.manportq.manport.DTO.CountryDTO;
import com.manportq.manport.Servies.CountryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/api/country")
@RequiredArgsConstructor
public class CountryController
{
    private final CountryService countryService;



    @PostMapping("/{id}")
    public CountryDTO saveByAppId(@RequestBody CountryDTO countryDTO,@PathVariable("id") Long id)
    {
        return countryService.save(countryDTO, id);
    }

    @DeleteMapping("/{id}")
    public Boolean deleteById(@PathVariable Long id)
    {
        System.out.println("delete mapping");
        return countryService.delete(id);
    }

}
