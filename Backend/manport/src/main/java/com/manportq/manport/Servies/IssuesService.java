package com.manportq.manport.Servies;


import com.manportq.manport.Model.Messages.ErrorMessage;
import com.manportq.manport.Model.Issue;
import com.manportq.manport.Repository.IssueRepository;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

public interface IssuesService
{
    List<Issue> getAllIssues();

    Issue save(ErrorMessage message);
}
