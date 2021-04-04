package com.manportq.manport.Model;


import com.fasterxml.jackson.annotation.JsonBackReference;
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
    private ErrorType errorType;
    private String description;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name="prod_id")
    private Prod prod;



    public Job(ErrorType errorType, String issueType, Prod prod)
    {
        this.issueType = issueType;
        this.errorType = errorType;
        this.prod = prod;
    }
}
