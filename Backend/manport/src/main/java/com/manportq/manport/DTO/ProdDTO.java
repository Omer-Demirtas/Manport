package com.manportq.manport.DTO;

import com.manportq.manport.Model.Country;
import com.manportq.manport.Model.Job;
import com.manportq.manport.Model.Prod;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ProdDTO
{
    private Long id;
    private String name;
    private List<JobDTO> jobs;

    public Prod convert(Country country)
    {
        Prod p = new Prod();
        p.setName(name);
        p.setCountry(country);
        p.setId(id);
        p.setJobs(new ArrayList<>());
        return p;
    }
}
