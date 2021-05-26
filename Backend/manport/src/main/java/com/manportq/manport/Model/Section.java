package com.manportq.manport.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Section
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;


    @JsonManagedReference
    @ManyToMany(cascade={CascadeType.ALL})
    @JoinTable(name="SECTION_SUBSECTION",
            joinColumns={@JoinColumn(name="SECTION_ID")},
            inverseJoinColumns={@JoinColumn(name="SUBSECTION_ID")})
    private List<Section> subSections = new ArrayList<>();

    @ManyToMany(mappedBy="subSections")
    @JsonBackReference
    private List<Section> asd = new ArrayList<>();


    /*
    @ManyToMany()
    private List<SectionLink> subSectionItems = new ArrayList<>();
    */
}
