package com.manportq.manport.Repository;

import com.manportq.manport.Model.Prod;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdRepository extends JpaRepository<Prod, Long>
{
}
