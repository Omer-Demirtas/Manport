package com.manportq.manport.Repository;

import com.manportq.manport.Model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobRepository extends JpaRepository<Job, Long>
{
}
