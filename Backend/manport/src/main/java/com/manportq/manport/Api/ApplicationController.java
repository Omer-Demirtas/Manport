package com.manportq.manport.Api;


import com.manportq.manport.DTO.ApplicationDTO;
import com.manportq.manport.Servies.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@Controller
@RequestMapping("/api/apps")
@RequiredArgsConstructor
public class ApplicationController
{
    private final ApplicationService applicationService;

    @PutMapping
    public ResponseEntity<ApplicationDTO> update(@RequestBody ApplicationDTO application)
    {
        System.out.println(application);
        ApplicationDTO app = applicationService.update(application);

        try {
            Thread.sleep(1000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        return ResponseEntity.ok(app);
    }

    @GetMapping("/all")
    public ResponseEntity<List<ApplicationDTO>> getAllApps()
    {
        return ResponseEntity.ok(applicationService.getAllApps());
    }

    @PostMapping
    public ResponseEntity<ApplicationDTO> save(@RequestBody ApplicationDTO application)
    {
        System.out.println("[POST] - " + application.toString());

        try {
            Thread.sleep(1000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        return ResponseEntity.ok(applicationService.save(application));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApplicationDTO> getOne(@PathVariable("id") Long id)
    {
        ApplicationDTO applicationDTO = applicationService.getById(id);
                return ResponseEntity.ok(applicationDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id)
    {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }
        return ResponseEntity.ok(applicationService.deleteById(id));
    }
}
