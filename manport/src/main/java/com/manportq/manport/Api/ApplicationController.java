package com.manportq.manport.Api;


import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.Messages.InitialMessage;
import com.manportq.manport.Servies.ApplicationService;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/api/apps")
public class ApplicationController
{

    private final ApplicationService applicationService;

    public ApplicationController(ApplicationService applicationService) {
        this.applicationService = applicationService;
    }

    @PutMapping
    public ResponseEntity<Boolean> updateApplication(@RequestBody Application application)
    {
        applicationService.updateApplication(application);
        return ResponseEntity.ok(true);
    }




    @GetMapping
    public ResponseEntity<InitialMessage> initialApp()
    {
        return ResponseEntity.ok(applicationService.initialApp());
    }

    @PostMapping
    public ResponseEntity<Application> saveApplication(@RequestBody Application application)
    {
        System.out.println("[POST] - " + application.toString());
        return ResponseEntity.ok(applicationService.save(application));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> deleteApplication(@PathVariable Long id)
    {
        System.out.println("[DELETE] - id: " + id);
        applicationService.deleteApplication(id);
        return ResponseEntity.ok(true);
    }
}
