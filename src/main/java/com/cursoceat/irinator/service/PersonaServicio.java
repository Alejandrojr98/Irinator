package com.cursoceat.irinator.service;

import com.cursoceat.irinator.modell.Persona;
import com.cursoceat.irinator.repository.ImagenRepository;
import com.cursoceat.irinator.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaServicio {
    @Autowired
    private PersonaRepository personaRepository;

    @Autowired
    private ImagenRepository imagenRepository;

    public List<Persona> findAll() {
        return personaRepository.findAll();
    }

    public Persona findById(int id) {
        return personaRepository.findById(id).orElse(null);
    }
}
