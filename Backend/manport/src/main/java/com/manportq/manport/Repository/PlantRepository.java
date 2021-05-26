package com.manportq.manport.Repository;

import com.manportq.manport.Model.Plant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlantRepository extends JpaRepository<Plant, Long>
{
}
