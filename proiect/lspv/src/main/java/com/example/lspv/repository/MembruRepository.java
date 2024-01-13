package com.example.lspv.repository;

import com.example.lspv.model.Membru;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MembruRepository extends JpaRepository<Membru,Long> {
    Optional<Membru> findByEmail(String email);
}
