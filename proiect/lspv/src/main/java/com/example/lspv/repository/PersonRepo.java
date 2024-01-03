package com.example.lspv.repository;

import com.example.lspv.model.Person;
import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.rest.core.annotation.RepositoryRestResource;
public interface PersonRepo extends JpaRepository<Person,Long> {
}
