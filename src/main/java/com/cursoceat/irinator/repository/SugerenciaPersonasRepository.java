package com.cursoceat.irinator.repository;

import com.cursoceat.irinator.modell.SugerenciasPersonas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SugerenciaPersonasRepository extends JpaRepository<SugerenciasPersonas,Integer> {
}
