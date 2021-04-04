package com.manportq.manport.Model.Messages;


import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.Issue;
import com.manportq.manport.Model.Plant;
import com.manportq.manport.Model.types.MessageTypes;
import lombok.Data;

import java.util.List;

@Data
public class InitialMessage
{
    private List<Application> apps;
    private List<Plant> plants;
    private List<Issue> issues;
}
