package com.manportq.manport.DTO;

import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.Country;
import com.manportq.manport.Model.Link;
import com.manportq.manport.Model.types.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
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
    private List<Link> links;

    public static class Builder
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
        private List<CountryDTO> countries = new ArrayList<>();
        private List<Link> links = new ArrayList<>();

        public Builder id(Long id) {
            this.id = id;
            return this;
        }

        public Builder fullName(String fullName) {
            this.fullName = fullName;
            return this;
        }

        public Builder shortCode(String shortCode) {
            this.shortCode = shortCode;
            return this;
        }

        public Builder responsible(String responsible) {
            this.responsible = responsible;
            return this;
        }

        public Builder lineCountOfBackend(String backendCount) {
            this.lineCountOfBackend = backendCount;
            return this;
        }

        public Builder lineCountOfFrontend(String frontEndCount) {
            this.lineCountOfFrontend = frontEndCount;
            return this;
        }

        public Builder releaseDate(Date date) {
            this.releaseDate = date;
            return this;
        }

        public Builder isStopProduction(Boolean isStopProduction) {
            this.isStopProduction = isStopProduction;
            return this;
        }

        public Builder isTracking(Boolean isTracking) {
            this.isTracking = isTracking;
            return this;
        }

        public Builder businessArea(BusinessArea businessArea) {
            this.businessArea = businessArea;
            return this;
        }

        public Builder database(DatabaseTypes database) {
            this.database = database;
            return this;
        }

        public Builder responsibleTeam(ResponsibleTeamTypes responsibleTeam) {
            this.responsibleTeam = responsibleTeam;
            return this;
        }

        public Builder backend(BackEndTypes backend) {
            this.backend = backend;
            return this;
        }

        public Builder frontEnd(FrontEndTypes frontend) {
            this.frontend = frontend;
            return this;
        }

        public Builder links(List<Link> links) {
            this.links = links;
            return this;
        }

        public Builder countries(List<CountryDTO> countries) {
            this.countries = countries;
            return this;
        }

        public ApplicationDTO build()
        {
            return new ApplicationDTO(this);
        }
    }

    public ApplicationDTO(Builder builder)
    {
        this.id = builder.id;
        this.fullName = builder.fullName;
        this.shortCode = builder.shortCode;
        this.businessArea = builder.businessArea;
        this.database = builder.database;
        this.responsibleTeam = builder.responsibleTeam;
        this.backend = builder.backend;
        this.isTracking = builder.isTracking;
        this.frontend = builder.frontend;
        this.responsible = builder.responsible;
        this.releaseDate = builder.releaseDate;
        this.isStopProduction = builder.isStopProduction;
        this.lineCountOfBackend = builder.lineCountOfBackend;
        this.lineCountOfFrontend = builder.lineCountOfFrontend;
        this.countries = builder.countries;
        this.links = builder.links;
    }

    public Application convertApp()
    {
        List<Country> c = new ArrayList<>();
        countries.stream().map(countryDTO -> c.add(countryDTO.convertToCountry(null)));
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
                .countries(c)
                .build();
    }
}
