package com.manportq.manport.Servies;

import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.Messages.InitialMessage;
import com.manportq.manport.Model.Messages.WsMessage;
import com.manportq.manport.Model.types.MessageTypes;
import com.manportq.manport.Repository.ApplicationRepository;
import com.manportq.manport.Repository.IssueRepository;
import com.manportq.manport.Repository.PlantRepository;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ApplicationService
{
    private final ApplicationRepository applicationRepository;
    private final SimpMessagingTemplate messagingTemplate;
    private final PlantRepository plantRepository;
    private final IssueRepository issueRepository;

    public ApplicationService(ApplicationRepository applicationRepository, SimpMessagingTemplate messagingTemplate, PlantRepository plantRepository, IssueRepository issueRepository) {
        this.applicationRepository = applicationRepository;
        this.messagingTemplate = messagingTemplate;
        this.plantRepository = plantRepository;
        this.issueRepository = issueRepository;
    }

    public List<Application> getAllApplications()
    {
        return applicationRepository.findAll();
    }

    public void deleteApplication(Long id)
    {
        messagingTemplate.convertAndSend("/topic/app/", new WsMessage(null, MessageTypes.DELETE, new Application(id)));
        applicationRepository.deleteById(id);
    }

    public Application save(Application application)
    {
        Application app = applicationRepository.save(application);
        messagingTemplate.convertAndSend("/topic/app/", new WsMessage(app.getCreatedBy(), MessageTypes.CREATE, app));
        return app;
    }

    public void updateApplication(Application application)
    {

    }

    public InitialMessage initialApp()
    {
        InitialMessage response = new InitialMessage();
        response.setApps(getAllApplications());
        response.setPlants(plantRepository.findAll());
        response.setIssues(issueRepository.findAll());
        return response;
    }

}
