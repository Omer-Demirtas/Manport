package com.manportq.manport.Model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.manportq.manport.DTO.ApplicationDTO;
import com.manportq.manport.DTO.CountryDTO;
import com.manportq.manport.Model.types.*;
import lombok.*;

import javax.persistence.*;
import java.util.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="application")
public class Application
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Long createdBy;
    private String fullName;
    private String shortCode;
    private String responsible;
    private String lineCountOfBackend;
    private String lineCountOfFrontend;
    private Date releaseDate;
    private Boolean isStopProduction;

    /*
        track özelliği kullanıcı bazlı mı olmaı yoksa tüm kullancılılar için ortak mı olmalı ?
    */
    private Boolean isTracking = true;
    private Boolean isDeleted = false;

    /*
        Enum Types
    */
    @Enumerated(EnumType.ORDINAL)
    private BusinessArea businessArea;
    @Enumerated(EnumType.ORDINAL)
    private DatabaseTypes database;
    @Enumerated(EnumType.ORDINAL)
    private ResponsibleTeamTypes responsibleTeam;
    @Enumerated(EnumType.ORDINAL)
    private BackEndTypes backend;
    @Enumerated(EnumType.ORDINAL)
    private FrontEndTypes frontend;


    /*
        optional: true -> Diğer class oluşturulurken verilmese de olur.
            -> country olmadan app oluşturulabilir

        fetch: her application istendiğinde countryler getirilsimn mi ?
    */

    @JsonManagedReference
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "application", fetch = FetchType.LAZY)
    private List<Country> countries = new ArrayList<>();


    public static class Builder
    {
        private Long id;
        private Long createdBy;
        private String fullName;
        private String shortCode;
        private String responsible;
        private String lineCountOfBackend;
        private String lineCountOfFrontend;
        private Date releaseDate;
        private Boolean isStopProduction;
        private Boolean isTracking;
        private Boolean isDeleted;
        private BusinessArea businessArea;
        private DatabaseTypes database;
        private ResponsibleTeamTypes responsibleTeam;
        private BackEndTypes backend;
        private FrontEndTypes frontend;
        private List<Country> countries = new ArrayList<>();

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

        public Builder countries(List<CountryDTO> countryDTOS) {
            return this;
        }

        public Application  build()
        {
            return new Application(this);
        }
    }

    public Application(Builder builder)
    {
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
    }

    @Override
    public String toString() {
        return "Application{" +
                "id=" + id +
                ", fullName='" + fullName + '\'' +
                ", shortCode='" + shortCode + '\'' +
                ", responsible='" + responsible + '\'' +
                ", releaseDate=" + releaseDate +
                ", isStopProduction=" + isStopProduction +
                ", businessArea=" + businessArea +
                ", database=" + database +
                ", responsibleTeam=" + responsibleTeam +
                ", backend=" + backend +
                ", frontend=" + frontend +
                ", isDeleted=" + isDeleted +
                '}';
    }

    public ApplicationDTO convertDIO()
    {
        List<CountryDTO> countryDTOS = new ArrayList<>();
        countries.forEach(country -> countryDTOS.add(country.convertDTO()));

        return
                new ApplicationDTO(
                        id,
                        fullName,
                        shortCode,
                        responsible,
                        lineCountOfBackend,
                        lineCountOfFrontend,
                        releaseDate,
                        isTracking,
                        isStopProduction,
                        businessArea,
                        database,
                        responsibleTeam,
                        backend,
                        frontend,
                        countryDTOS
                );
    }

    public void updateWithDTO(ApplicationDTO application)
    {
        this.fullName = application.getFullName();
        this.shortCode = application.getShortCode();
        this.businessArea = application.getBusinessArea();
        this.database = application.getDatabase();
        this.responsibleTeam = application.getResponsibleTeam();
        this.backend = application.getBackend();
        this.isTracking = application.getIsTracking();
        this.frontend = application.getFrontend();
        this.responsible = application.getResponsible();
        this.releaseDate = application.getReleaseDate();
        this.isStopProduction = application.getIsStopProduction();
    }
}
