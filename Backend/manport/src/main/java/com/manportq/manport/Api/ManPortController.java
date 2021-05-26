package com.manportq.manport.Api;

import com.manportq.manport.Model.Messages.InitialMessage;
import com.manportq.manport.Servies.Impl.ManPortServiceImpl;
import com.manportq.manport.Servies.ManPortService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/manport")
@RequiredArgsConstructor
public class ManPortController
{
    private final ManPortService manPortService;
    private static int i = 0;

    @GetMapping
    public InitialMessage initialManPort()
    {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ie) {
            Thread.currentThread().interrupt();
        }

        return manPortService.initializeManPort();
    }
}
