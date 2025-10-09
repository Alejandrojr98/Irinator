package com.cursoceat.irinator.controller;

import com.cursoceat.irinator.modell.Animal;
import com.cursoceat.irinator.modell.PreguntasAnimales;
import com.cursoceat.irinator.repository.AnimalRepository;
import com.cursoceat.irinator.repository.ImagenRepository;
import com.cursoceat.irinator.repository.PersonaRepository;
import com.cursoceat.irinator.service.AnimalServicio;
import jakarta.servlet.http.HttpSession;
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
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Controller("/")
public class IrinatorController {
    @Autowired
    private final AnimalRepository animalRepository;

    @Autowired
    private final ImagenRepository imagenRepository;

    @Autowired
    private final PersonaRepository personaRepository;

    @Autowired
    private AnimalServicio animalServicio;

    public IrinatorController(AnimalRepository animalRepository, ImagenRepository imagenRepository, PersonaRepository personaRepository) {
        this.animalRepository = animalRepository;
        this.imagenRepository = imagenRepository;
        this.personaRepository = personaRepository;
    }

//    private List<PreguntasAnimales> obtenerPreguntas(){
//        return List.of(
//                new PreguntasAnimales("Es un mamifero?"),
//                new PreguntasAnimales("Es un ave?"),
//                new PreguntasAnimales("Tiene pelaje?"),
//                new PreguntasAnimales("Pone huevos?"),
//                new PreguntasAnimales("Es un animal domestico?"),
//                new PreguntasAnimales("Es un pez?")
//        );
//    }

    private final List<PreguntasAnimales> preguntas = List.of(
            new PreguntasAnimales(0,"¿Es un mamífero?"),
            new PreguntasAnimales(1,"¿Es un ave?"),
            new PreguntasAnimales(2,"¿Tiene pelaje?"),
            new PreguntasAnimales(3,"Pone huevos?"),
            new PreguntasAnimales(4,"¿Es doméstico?"),
            new PreguntasAnimales(5,"Es acuatico?")
            // Puedes añadir más preguntas
    );

//    @ModelAttribute("preguntas")
//    public List<PreguntasAnimales> preguntas(){
//        return obtenerPreguntas();
//    }

    @GetMapping("/")
    public String inicio() {
        return "indexejecutar";
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

    @GetMapping("/animalesinicio")
    public String animales() {
        return "animalesinicio";
    }

    @GetMapping("/animales")
    public String animal() {
        return "animales";
    }

    @GetMapping("/formularioAnimales")
    public String formularioAnimal() {
        return "formularioAnimales";
    }

    @GetMapping("/indexbbdd")
    public String indexbasedatos() {
        return "indexbbdd";
    }

    @GetMapping("/index")
    public String index() {
        return "index";
    }

    @GetMapping("/listado")
    public String listado() {
        return "listado";
    }

    @GetMapping("/resultado")
    public String resultado(Model model) {
        model.addAttribute("animales", animalRepository.findAll());
        return "resultado";
    }

//    @GetMapping("/pruebaAnimales")
//    public String mostrarAnimales(@RequestParam(name = "i", defaultValue = "0") int i, Model model,@ModelAttribute("preguntas") List<PreguntasAnimales> preguntas) {
//        if (i >= preguntas.size()) {
//            List<Animal> animales = animalRepository.findAll();
//            model.addAttribute("animales", animales);
//            return "resultado";
//        }
//        model.addAttribute("preguntas", preguntas.get(i));
//        model.addAttribute("i", i);
//        return "pruebaAnimales";
//    }

    @GetMapping("/pruebaAnimales")
    public String mostrarPregunta(@RequestParam(name = "i", defaultValue = "0") int i,
                                  Model model, HttpSession session) {

        List<PreguntasAnimales> preguntasRandom = (List<PreguntasAnimales>) session.getAttribute("preguntasRandom");

        if (preguntasRandom == null) {
            preguntasRandom = new ArrayList<>(preguntas); // original ordenado
            Collections.shuffle(preguntasRandom);          // mezclar aleatoriamente
            session.setAttribute("preguntasRandom", preguntasRandom);
        }

        // Si ya terminaste todas las preguntas, muestra resultado final
        if (i >= preguntasRandom.size()) {
            List<Animal> resultado = (List<Animal>) session.getAttribute("animalesFiltrados");
            if (resultado == null) resultado = new ArrayList<>();
            model.addAttribute("animales", resultado);
            return "resultado";
        }

        // Cargar la pregunta correspondiente
        model.addAttribute("pregunta", preguntasRandom.get(i).getPregunta());
        model.addAttribute("i", i);
        return "pruebaAnimales";
    }

//    @PostMapping("/filtrar")
//    public String filtrarAnimales(@RequestParam("respuesta") boolean respuesta,
//                                  @RequestParam("i") int i, Model model) {
//        List<Animal> animales = animalRepository.findAll();
//        if(i==0 && respuesta){
//            model.addAttribute("animales", animales);
//            return "resultado";
//        }
//        int suma=i+1;
//        return "redirect:/pruebaAnimales?i=" + suma;
//    }

    @PostMapping("/filtrar")
    public String filtrarAnimales(@RequestParam("respuesta") boolean respuesta,
                                  @RequestParam("i") int i,
                                  HttpSession session) {

        // Obtener lista aleatoria de preguntas desde sesión
        List<PreguntasAnimales> preguntasRandom = (List<PreguntasAnimales>) session.getAttribute("preguntasRandom");
        if (preguntasRandom == null) {
            preguntasRandom = new ArrayList<>(preguntas); // si no está en sesión, poner orden original
            Collections.shuffle(preguntasRandom);
            session.setAttribute("preguntasRandom", preguntasRandom);
        }

        // Obtener animales ya filtrados o cargar todos si es el paso 0
        List<Animal> animalesFiltrados = (List<Animal>) session.getAttribute("animalesFiltrados");
        if (animalesFiltrados == null || i == 0) {
            animalesFiltrados = animalRepository.findAll();
        }

        // Pregunta actual (aleatoria)
        PreguntasAnimales preguntaActual = preguntasRandom.get(i);

        // Aplicar filtro según la pregunta actual
//        List<Animal> filtrados = animalesFiltrados.stream().filter(animal -> {
//            // Aquí debes mapear la pregunta actual al atributo del animal
//            // Ejemplo si tu preguntaActual tiene un código o texto que identifica el atributo:
//            switch (preguntaActual.getPregunta()) {
//                case "mamifero": return animal.getMamifero() != null && animal.getMamifero() == respuesta;
//                case "ave": return animal.getAve() != null && animal.getAve() == respuesta;
//                case "pelaje": return animal.getPelaje() != null && animal.getPelaje() == respuesta;
//                case "huevos": return animal.getHuevos() != null && animal.getHuevos() == respuesta;
//                case "domestico": return animal.getDomestico() != null && animal.getDomestico() == respuesta;
//                case "pez": return animal.getPez() != null && animal.getPez() == respuesta;
//                default: return true;
//            }
//        }).collect(Collectors.toList());

        List<Animal> filtrados = animalesFiltrados.stream().filter(animal -> {
            switch (preguntaActual.getCodigo()) {
                case 0: return animal.getMamifero() != null && animal.getMamifero() == respuesta;
                case 1: return animal.getAve() != null && animal.getAve() == respuesta;
                case 2: return animal.getPelaje() != null && animal.getPelaje() == respuesta;
                case 3: return animal.getHuevos() != null && animal.getHuevos() == respuesta;
                case 4: return animal.getDomestico() != null && animal.getDomestico() == respuesta;
                case 5: return animal.getPez() != null && animal.getPez() == respuesta;
                default: return true;
            }
        }).collect(Collectors.toList());

        // Guardar lista filtrada en sesión
        session.setAttribute("animalesFiltrados", filtrados);

        // Si no quedan animales o no hay más preguntas, mostrar resultado
        if (filtrados.isEmpty() || i + 1 >= preguntasRandom.size()) {
            return "redirect:/pruebaAnimales?i=" + preguntasRandom.size(); // va directo a resultado
            //return "resultado";
        }

        // Siguiente pregunta
        return "redirect:/pruebaAnimales?i=" + (i + 1);
    }

    @GetMapping("/reiniciar")
    public String reiniciar(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

    @GetMapping("/jugarNuevo")
    public String jugarNuevo() {
        return "redirect:/animalesinicio";
    }



}
