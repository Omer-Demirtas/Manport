package com.manportq.manport.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.manportq.manport.Model.types.BusinessArea;
import com.manportq.manport.Model.types.DatabaseTypes;
import com.manportq.manport.Model.types.ErrorType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="application")
public class Application
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    // full name
    private String name;
    private String shortCode;
    private String frontEnd;
    private BusinessArea businessArea;
    private DatabaseTypes databaseType;
    //Responsible Team eklenecek

    private String Responsible;
    //Release Date
    private Date createdDate;
    private Long createdBy;
    private Boolean isStopProduction;

    /*
        Json Ignore properties
     */
    private Boolean deleted = false;


    @JsonManagedReference
    @OneToMany(mappedBy = "application", fetch = FetchType.LAZY)
    private List<Country> countries = new ArrayList<>();


    public Application(String name, boolean isStopProduction, BusinessArea businessArea)
    {
        this.name = name;
        this.isStopProduction = isStopProduction;
        this.businessArea = businessArea;
    }

    public Application(Long id)
    {
        this.id = id;
    }
}
