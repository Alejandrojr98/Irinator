package com.cursoceat.irinator.service;

import com.cursoceat.irinator.modell.SugerenciasAnimales;
import com.cursoceat.irinator.repository.SugerenciaAnimalesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SugerenciaAnimalServicio {
    @Autowired
    private SugerenciaAnimalesRepository sugerenciaAnimalesRepository;

    public List<SugerenciasAnimales> findAll() {
        return sugerenciaAnimalesRepository.findAll();
    }
}
