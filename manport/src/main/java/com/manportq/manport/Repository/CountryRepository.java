package com.manportq.manport.Repository;

import com.manportq.manport.Model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRepository extends JpaRepository<Country, Long>
{
}
