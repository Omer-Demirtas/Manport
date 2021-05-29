package com.manportq.manport.Model.Builders;

import com.manportq.manport.Model.Country;
import com.manportq.manport.Model.Link;
import com.manportq.manport.Model.LinkGroup;

import java.util.List;

public class LinkGroupBuilder {
    private Long id;
    private String title;
    private Country country;
    private List<Link> links;

    public LinkGroupBuilder setId(Long id) {
        this.id = id;
        return this;
    }

    public LinkGroupBuilder setTitle(String title) {
        this.title = title;
        return this;
    }

    public LinkGroupBuilder setCountry(Country country) {
        this.country = country;
        return this;
    }

    public LinkGroupBuilder setLinks(List<Link> links) {
        this.links = links;
        return this;
    }

    public LinkGroup createLinkGroup() {
        return new LinkGroup(id, title, country, links);
    }
}