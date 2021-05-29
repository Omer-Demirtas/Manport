package com.manportq.manport.Model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LinkGroup
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;


    @JsonBackReference
    @ManyToOne
    @JoinColumn(name="fk_country")
    private Country country;

    @OneToMany(cascade=CascadeType.ALL)
    @JoinTable(name="LINK_GROUP_LINKS", joinColumns={@JoinColumn(name="LINK_GROUP_ID", referencedColumnName="ID")}
            , inverseJoinColumns={@JoinColumn(name="LINK_ID", referencedColumnName="ID")})
    private List<Link> links = new ArrayList<>();


}
