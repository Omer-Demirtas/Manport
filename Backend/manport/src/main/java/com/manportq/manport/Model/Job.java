package com.manportq.manport.Model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.manportq.manport.DTO.JobDTO;
import com.manportq.manport.Model.types.ErrorType;
import com.manportq.manport.Model.types.IssueTypes;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Job
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String issueType;
    private Boolean isTrack;
    private Long createdBy;

    @Enumerated(EnumType.ORDINAL)
    private ErrorType errorType;


    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, optional = true)
    @JoinColumn(name="prod_id")
    private Prod prod;



    public Job(ErrorType errorType, String issueType, Prod prod)
    {
        this.issueType = issueType;
        this.errorType = errorType;
        this.prod = prod;
    }

    public JobDTO convertDTO()
    {
        return new
                JobDTO(
                    id,
                    issueType,
                    errorType
        );
    }
}
