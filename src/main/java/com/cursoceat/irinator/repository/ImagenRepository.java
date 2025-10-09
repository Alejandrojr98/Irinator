package com.cursoceat.irinator.repository;

import com.cursoceat.irinator.modell.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagenRepository extends JpaRepository<Imagen, Integer> {
}
