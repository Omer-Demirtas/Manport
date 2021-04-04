package com.manportq.manport.Api;

import com.manportq.manport.Model.Messages.ErrorMessage;
import com.manportq.manport.Model.Issue;
import com.manportq.manport.Servies.IssuesService;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/err")
public class IssueController
{
    private final IssuesService issuesService;

    public IssueController(SimpMessagingTemplate messagingTemplate, IssuesService issuesService) {
        this.issuesService = issuesService;
    }

    @GetMapping
    public ResponseEntity<List<Issue>> getAllIssues()
    {
        return ResponseEntity.ok(issuesService.getAllIssues());
    }

    @PostMapping
    public ResponseEntity<Issue> saveIssue(@RequestBody ErrorMessage message)
    {
        System.out.println("error message -> " + message);
        return ResponseEntity.ok(issuesService.save(message));
    }

}
