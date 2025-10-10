package com.cursoceat.irinator.service;

import com.cursoceat.irinator.modell.SugerenciasPersonas;
import com.cursoceat.irinator.repository.SugerenciaPersonasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SugerenciaPersonaServicio {
    @Autowired
    private SugerenciaPersonasRepository sugerenciaPersonasRepository;

    public List<SugerenciasPersonas> findAll() {
        return sugerenciaPersonasRepository.findAll();
    }
}
