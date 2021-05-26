package com.manportq.manport.DTO;

import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.types.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationDTO
{
    private Long id;
    private String fullName;
    private String shortCode;
    private String responsible;
    private String lineCountOfBackend;
    private String lineCountOfFrontend;
    private Date releaseDate;
    private Boolean isTracking = true;
    private Boolean isStopProduction;
    private BusinessArea businessArea;
    private DatabaseTypes database;
    private ResponsibleTeamTypes responsibleTeam;
    private BackEndTypes backend;
    private FrontEndTypes frontend;
    private List<CountryDTO> countries;

    public ApplicationDTO(String fullName, String shortCode, String responsible, Date releaseDate, Boolean isStopProduction, BusinessArea businessArea, DatabaseTypes database, ResponsibleTeamTypes responsibleTeam, BackEndTypes backend, FrontEndTypes frontend, List<CountryDTO> countries) {
        this.fullName = fullName;
        this.shortCode = shortCode;
        this.responsible = responsible;
        this.releaseDate = releaseDate;
        this.isStopProduction = isStopProduction;
        this.businessArea = businessArea;
        this.database = database;
        this.responsibleTeam = responsibleTeam;
        this.backend = backend;
        this.frontend = frontend;
        this.countries = countries;
    }

    public Application convertApp()
    {
        return new
                Application.Builder()
                .fullName(fullName)
                .shortCode(shortCode)
                .frontEnd(frontend)
                .backend(backend)
                .responsibleTeam(responsibleTeam)
                .database(database)
                .responsible(responsible)
                .isTracking(isTracking)
                .isStopProduction(isStopProduction)
                .lineCountOfFrontend(lineCountOfFrontend)
                .lineCountOfBackend(lineCountOfBackend)
                .releaseDate(releaseDate)
                .id(id)
                .businessArea(businessArea)
                .countries(countries)
                .build();
    }
}
