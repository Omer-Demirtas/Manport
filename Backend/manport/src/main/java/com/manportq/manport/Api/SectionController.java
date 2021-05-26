package com.manportq.manport.Api;


import com.manportq.manport.Model.Section;
import com.manportq.manport.Repository.SectionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/sections")
@RequiredArgsConstructor
public class SectionController
{
    private final SectionRepository sectionRepository;

    @GetMapping()
    public List<Section> getAll()
    {
        return sectionRepository.findAll();
    }


    @PostMapping()
    public Section saveSection()
    {
        return new Section();
    }
}
