package com.manportq.manport.Model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.manportq.manport.DTO.CountryDTO;
import com.manportq.manport.DTO.ProdDTO;
import com.manportq.manport.Model.types.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.FilterDef;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
public class Country
{
    public Country(Boolean isActive, Boolean isTracking, Long plantId, Application application) {
        this.isActive = isActive;
        this.isTracking = isTracking;
        this.plantId = plantId;
        this.application = application;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private Boolean isActive;
    private Boolean isTracking;
    private Boolean isDeleted = false;
    private Long plantId;


    @JsonBackReference
    @ManyToOne(optional = true, fetch = FetchType.LAZY)
    @JoinColumn(name="application_id")
    private Application application;


    @JsonManagedReference
    @OneToMany(mappedBy = "country", fetch = FetchType.EAGER)
    private List<Prod> prods = new ArrayList<>();

    public CountryDTO convertDTO()
    {
        List<ProdDTO> prodDTOS = new ArrayList<>();

        prods.forEach(prod -> prodDTOS.add(prod.convertDTO()));

        return new
            CountryDTO(id, isActive, isTracking, plantId, prodDTOS);
    }

    public Country(Builder builder)
    {
        this.id = builder.id;
        this.isActive = builder.isActive;
        this.isTracking = builder.isTracking;
        this.plantId = builder.plantId;
        this.prods = builder.prods;
        this.application = builder.application;
    }

    public static class Builder
    {
        private Long id;
        private Boolean isActive;
        private Boolean isTracking;
        private Long plantId;
        private List<Prod> prods = new ArrayList<>();
        private Application application;

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder application(Application application) {
            this.application = application;
            return this;
        }

        public Builder isActive(Boolean isActive) {
            this.isActive = isActive;
            return this;
        }

        public Builder isTracking(Boolean isTracking) {
            this.isTracking = isTracking;
            return this;
        }
        public Builder plantId(Long plantId) {
            this.plantId = plantId;
            return this;
        }

        public Builder prods(List<Prod> prods) {
            this.prods = prods;
            return this;
        }

        public Country  build()
        {
            return new Country(this);
        }
    }
}
