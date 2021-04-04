package com.manportq.manport.Servies;


import com.manportq.manport.Model.Messages.ErrorMessage;
import com.manportq.manport.Model.Issue;
import com.manportq.manport.Repository.IssueRepository;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IssuesService
{
    private final SimpMessagingTemplate messagingTemplate;
    private final IssueRepository issueRepository;

    public IssuesService(SimpMessagingTemplate messagingTemplate, IssueRepository issueRepository) {
        this.messagingTemplate = messagingTemplate;
        this.issueRepository = issueRepository;
    }

    public List<Issue> getAllIssues()
    {
        return issueRepository.findAll();
    }

    public Issue save(ErrorMessage message)
    {
        messagingTemplate.convertAndSend("/topic/app/" ,message);
        return issueRepository.save(message.getIssue());
    }
}
