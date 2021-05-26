package com.manportq.manport.Api;

import com.manportq.manport.Model.Messages.ErrorMessage;
import com.manportq.manport.Model.Issue;
import com.manportq.manport.Servies.Impl.IssueServiceImpl;
import com.manportq.manport.Servies.IssuesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/api/issues")
@RequiredArgsConstructor
public class IssueController
{
    private final IssuesService issuesService;

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
