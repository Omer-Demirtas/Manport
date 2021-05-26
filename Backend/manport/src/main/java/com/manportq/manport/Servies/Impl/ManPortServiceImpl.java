package com.manportq.manport.Servies.Impl;

import com.manportq.manport.Model.Messages.InitialMessage;
import com.manportq.manport.Repository.ApplicationRepository;
import com.manportq.manport.Repository.PlantRepository;
import com.manportq.manport.Servies.ApplicationService;
import com.manportq.manport.Servies.IssuesService;
import com.manportq.manport.Servies.ManPortService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@Service
public class ManPortServiceImpl implements ManPortService
{
    private final ApplicationService applicationService;
    private final PlantRepository plantRepository;
    private final IssuesService issuesService;

    @Override
    public InitialMessage initializeManPort() {
        InitialMessage initialMessage = new InitialMessage();
        initialMessage.setApps(applicationService.getAllApps());
        initialMessage.setPlants(plantRepository.findAll());
        initialMessage.setIssues(issuesService.getAllIssues());
        return initialMessage;
    }
}
