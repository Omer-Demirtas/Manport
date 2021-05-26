package com.manportq.manport.Model.Messages;


import com.manportq.manport.DTO.ApplicationDTO;
import com.manportq.manport.Model.Issue;
import com.manportq.manport.Model.Plant;
import lombok.Data;

import java.util.List;

@Data
public class InitialMessage
{
    private List<ApplicationDTO> apps;
    private List<Plant> plants;
    private List<Issue> issues;
}
