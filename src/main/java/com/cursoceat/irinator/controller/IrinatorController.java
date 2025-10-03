package com.cursoceat.irinator.controller;

import com.cursoceat.irinator.modell.Animal;
import com.cursoceat.irinator.modell.PreguntasAnimales;
import com.cursoceat.irinator.repository.AnimalRepository;
import com.cursoceat.irinator.repository.ImagenRepository;
import com.cursoceat.irinator.service.AnimalServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller("/")
public class IrinatorController {
    @Autowired
    private final AnimalRepository animalRepository;

    @Autowired
    private final ImagenRepository imagenRepository;
    @Autowired
    private AnimalServicio animalServicio;

    public IrinatorController(AnimalRepository animalRepository, ImagenRepository imagenRepository){
        this.animalRepository = animalRepository;
        this.imagenRepository = imagenRepository;
    }

    private List<PreguntasAnimales> obtenerPreguntas(){
        return List.of(
                new PreguntasAnimales("Es un mamifero?"),
                new PreguntasAnimales("Es un ave?"),
                new PreguntasAnimales("Tiene pelaje?"),
                new PreguntasAnimales("Pone huevos?"),
                new PreguntasAnimales("Es un animal domestico?"),
                new PreguntasAnimales("Es un pez?")
        );
    }

    @ModelAttribute("preguntas")
    public List<PreguntasAnimales> preguntas(){
        return obtenerPreguntas();
    }

    @GetMapping("/")
    public String inicio() {
        return "index";
    }

    @GetMapping("/personas")
    public String personas() {
        return "personas";
    }

    @GetMapping("/personaAcertada")
    public String personasAcertada() {
        return "personaAcertada";
    }

    @GetMapping("/animalAcertado")
    public String animalAcertado() {
        return "animalAcertado";
    }

    @GetMapping("/animalNoAcertado")
    public String animalNoAcertado() {
        return "animalNoAcertado";
    }

    @GetMapping("/personaNoAcertada")
    public String personasNoAcertada() {
        return "personaNoAcertada";
    }

    @GetMapping("/animales")
    public String animales() {
        return "animales";
    }

    @GetMapping("/resultado")
    public String resultado() {
        return "resultado";
    }

    @GetMapping("/pruebaAnimales")
    public String mostrarAnimales(@RequestParam(name = "i", defaultValue = "0") int i, Model model,@ModelAttribute("preguntas") List<PreguntasAnimales> preguntas) {
        if (i >= preguntas.size()) {
            List<Animal> animales = animalRepository.findAll();
            model.addAttribute("animales", animales);
            return "resultado";
        }
        model.addAttribute("preguntas", preguntas.get(i));
        model.addAttribute("i", i);
        return "pruebaAnimales";
    }

    @PostMapping("/filtrar")
    public String filtrarAnimales(@RequestParam("respuesta") boolean respuesta,
                                  @RequestParam("i") int i, Model model) {

        List<Animal> animales = animalRepository.findAll();
//        if(i==0 && respuesta){
//            model.addAttribute("animales", animales);
//            return "resultado";
//        }
        int suma=i+1;
        return "redirect:/pruebaAnimales?i=" + suma;
    }

}
