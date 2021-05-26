package com.manportq.manport.Servies.Impl;

import com.manportq.manport.Model.Issue;
import com.manportq.manport.Model.Messages.ErrorMessage;
import com.manportq.manport.Model.Messages.WsMessage;
import com.manportq.manport.Model.types.MessageTypes;
import com.manportq.manport.Repository.IssueRepository;
import com.manportq.manport.Servies.IssuesService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class IssueServiceImpl implements IssuesService
{
    private final IssueRepository issueRepository;
    private final SimpMessagingTemplate messagingTemplate;

    @Override
    public List<Issue> getAllIssues() {
        return issueRepository.findAll();
    }

    @Override
    public Issue save(ErrorMessage message) {
        Issue issue = issueRepository.save(message.getIssue());

        messagingTemplate.convertAndSend("/topic/app/", new ErrorMessage(MessageTypes.CREATE_ISSUE, issue   ));

        return issue;
    }
}
