package com.manportq.manport.Model;


import com.manportq.manport.Model.types.ErrorType;
import com.manportq.manport.Model.types.IssueTypes;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
public class Issue
{
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Long appId;
    private Long plantId;
    private Long prodId;
    private Long jobId;
    private String description;
    private ErrorType errorType;

    public Issue(Long appId, Long plantId, Long prodId, Long jobId, String description, ErrorType errorType) {
        this.appId = appId;
        this.plantId = plantId;
        this.prodId = prodId;
        this.jobId = jobId;
        this.description = description;
        this.errorType = errorType;
    }
}
