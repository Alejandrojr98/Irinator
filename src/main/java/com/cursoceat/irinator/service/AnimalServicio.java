package com.cursoceat.irinator.service;

import com.cursoceat.irinator.modell.Animal;
import com.cursoceat.irinator.repository.AnimalRepository;
import com.cursoceat.irinator.repository.ImagenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalServicio {
    @Autowired
    private AnimalRepository animalRepository;

    @Autowired
    private ImagenRepository imagenRepository;

    public List<Animal> findAll(){
        return animalRepository.findAll();
    }
    public Animal findById(int id){
        return animalRepository.findById(id).orElse(null);
    }
}
