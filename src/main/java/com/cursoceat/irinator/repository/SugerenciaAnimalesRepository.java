package com.cursoceat.irinator.repository;

import com.cursoceat.irinator.modell.SugerenciasAnimales;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SugerenciaAnimalesRepository extends JpaRepository<SugerenciasAnimales,Integer> {
}
