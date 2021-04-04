package com.manportq.manport.Repository;

import com.manportq.manport.Model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IssueRepository extends JpaRepository<Issue, Long>
{
}
