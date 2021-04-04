package com.manportq.manport.Model;


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


    public Plant(String countryName, String fullName, String shortCode)
    {
        this.countryName = countryName;
        this.shortCode = shortCode;
        this.fullName = fullName;
    }
}
