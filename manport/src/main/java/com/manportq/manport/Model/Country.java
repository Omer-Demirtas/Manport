package com.manportq.manport.Model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.manportq.manport.Model.types.PlantTypes;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
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
    private Long plantId;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="application_id")
    private Application application;


    @JsonManagedReference
    @OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
    private List<Prod> prods;
}
