package com.manportq.manport.DTO;


import com.manportq.manport.Model.types.ErrorType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class JobDTO
{
    private Long id;
    private String issueType;
    private ErrorType errorType;
}
