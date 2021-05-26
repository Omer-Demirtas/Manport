package com.manportq.manport.Repository;

import com.manportq.manport.Model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, Long>
{

    List<Country> findAllByPlantId(Long plantId);
}
