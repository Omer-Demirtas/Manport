package com.manportq.manport.Repository;

import com.manportq.manport.Model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ApplicationRepository extends JpaRepository<Application, Long>
{
    List<Application> findByIsDeleted(Boolean isDeleted);
}
