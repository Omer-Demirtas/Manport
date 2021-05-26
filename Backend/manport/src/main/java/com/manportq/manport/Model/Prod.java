package com.manportq.manport.Model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.manportq.manport.DTO.JobDTO;
import com.manportq.manport.DTO.ProdDTO;
import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.Job;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Prod
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String name;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="country_id")
    private Country country;


    @JsonManagedReference
    @OneToMany(mappedBy = "prod", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private List<Job> jobs;

    public Prod(String name, Country country)
    {
        this.name = name;
        this.country = country;
    }

    public ProdDTO convertDTO()
    {
        List<JobDTO> dtoList = new ArrayList<>();

        jobs.forEach(job -> dtoList.add(job.convertDTO()));

        return new ProdDTO(
                id,
                name,
                dtoList
        );
    }
}
