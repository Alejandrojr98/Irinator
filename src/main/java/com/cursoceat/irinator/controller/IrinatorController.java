package com.cursoceat.irinator.controller;

import com.cursoceat.irinator.modell.Animal;
import com.cursoceat.irinator.modell.PreguntasAnimales;
import com.cursoceat.irinator.modell.SugerenciasAnimales;
import com.cursoceat.irinator.modell.SugerenciasPersonas;
import com.cursoceat.irinator.repository.*;
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

import java.time.LocalDate;
import java.util.*;
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
    private final SugerenciaAnimalesRepository sugerenciaAnimalesRepository;

    @Autowired
    private final SugerenciaPersonasRepository sugerenciaPersonasRepository;

    public IrinatorController(AnimalRepository animalRepository, ImagenRepository imagenRepository, PersonaRepository personaRepository, SugerenciaAnimalesRepository sugerenciaAnimalesRepository, SugerenciaPersonasRepository sugerenciaPersonasRepository) {
        this.animalRepository = animalRepository;
        this.imagenRepository = imagenRepository;
        this.personaRepository = personaRepository;
        this.sugerenciaAnimalesRepository = sugerenciaAnimalesRepository;
        this.sugerenciaPersonasRepository = sugerenciaPersonasRepository;
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
            new PreguntasAnimales(0, "¿Es un mamífero?"),
            new PreguntasAnimales(1, "¿Es un ave?"),
            new PreguntasAnimales(2, "¿Tiene pelaje?"),
            new PreguntasAnimales(3, "Pone huevos?"),
            new PreguntasAnimales(4, "¿Es doméstico?"),
            new PreguntasAnimales(5, "Es acuático?")
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

    @GetMapping("/maravillas")
    public String maravillas() {
        return "maravillas";
    }

    @GetMapping("maravillasinicio")
    public String maravillasinicio() {
        return "maravillasinicio";
    }

    @GetMapping("redesinicio")
    public String redesinicio() {
        return "redesinicio";
    }

    @GetMapping("/redessociales")
    public String redessociales() {
        return "redessociales";
    }

    @GetMapping("/redAcertada")
    public String redAcertada() {
        return "redAcertada";
    }

    @GetMapping("/formularioAnimales")
    public String formularioAnimal() {
        return "formularioAnimales";
    }

    @GetMapping("/formularioPersonas")
    public String formularioPersonas() {
        return "formularioPersonas";
    }

    @GetMapping("/indexbbdd")
    public String indexbasedatos() {
        return "indexbbdd";
    }

    @GetMapping("/indexejecutar")
    public String indexEjecutar() {
        return "index";
    }

    @GetMapping("/index")
    public String index() {
        return "index";
    }

    @GetMapping("/listado")
    public String listado(Model model) {
        model.addAttribute("sugerenciasA", sugerenciaAnimalesRepository.findAll());
        model.addAttribute("sugerenciasP", sugerenciaPersonasRepository.findAll());
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
        List<Animal> filtrados = animalesFiltrados.stream().filter(animal -> {
            switch (preguntaActual.getCodigo()) {
                case 0:
                    return animal.getMamifero() != null && animal.getMamifero() == respuesta;
                case 1:
                    return animal.getAve() != null && animal.getAve() == respuesta;
                case 2:
                    return animal.getPelaje() != null && animal.getPelaje() == respuesta;
                case 3:
                    return animal.getHuevos() != null && animal.getHuevos() == respuesta;
                case 4:
                    return animal.getDomestico() != null && animal.getDomestico() == respuesta;
                case 5:
                    return animal.getPez() != null && animal.getPez() == respuesta;
                default:
                    return true;
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

//    @PostMapping("/filtrar")
//    public String filtrarAnimales(@RequestParam("respuesta") boolean respuesta,
//                                  @RequestParam("i") int i,
//                                  HttpSession session,
//                                  Model model) {
//
//        // Obtener lista aleatoria de preguntas desde sesión
//        List<PreguntasAnimales> preguntasRandom = (List<PreguntasAnimales>) session.getAttribute("preguntasRandom");
//        if (preguntasRandom == null) {
//            preguntasRandom = new ArrayList<>(preguntas); // si no está en sesión, usar orden original
//            Collections.shuffle(preguntasRandom);
//            session.setAttribute("preguntasRandom", preguntasRandom);
//        }
//
//        // Obtener animales ya filtrados o cargar todos si es el paso 0
//        List<Animal> animalesFiltrados = (List<Animal>) session.getAttribute("animalesFiltrados");
//        if (animalesFiltrados == null || i == 0) {
//            animalesFiltrados = animalRepository.findAll();
//        }
//
//        // Guardar respuesta actual en sesión
//        Map<Integer, Boolean> respuestasDadas = (Map<Integer, Boolean>) session.getAttribute("respuestasDadas");
//        if (respuestasDadas == null) {
//            respuestasDadas = new HashMap<>();
//        }
//        respuestasDadas.put(i, respuesta);
//        session.setAttribute("respuestasDadas", respuestasDadas);
//
//        // Pregunta actual
//        PreguntasAnimales preguntaActual = preguntasRandom.get(i);
//
//        // Filtrar animales según la respuesta
//        List<Animal> filtrados = animalesFiltrados.stream().filter(animal -> {
//            switch (preguntaActual.getCodigo()) {
//                case 0: return animal.getMamifero() != null && animal.getMamifero() == respuesta;
//                case 1: return animal.getAve() != null && animal.getAve() == respuesta;
//                case 2: return animal.getPelaje() != null && animal.getPelaje() == respuesta;
//                case 3: return animal.getHuevos() != null && animal.getHuevos() == respuesta;
//                case 4: return animal.getDomestico() != null && animal.getDomestico() == respuesta;
//                case 5: return animal.getPez() != null && animal.getPez() == respuesta;
//                default: return true;
//            }
//        }).collect(Collectors.toList());
//
//        // Guardar nueva lista filtrada
//        session.setAttribute("animalesFiltrados", filtrados);
//
//        // Si no quedan animales, redirigir a resultado vacío
//        if (filtrados.isEmpty()) {
//            model.addAttribute("mensaje", "No se encontró ningún animal con esas características.");
//            return "resultado";
//        }
//
//        // Calcular cuántas preguntas faltan
//        int preguntasRestantes = preguntasRandom.size() - (i + 1);
//
//        // Si quedan exactamente 3 preguntas → intentar adivinar
//        if (preguntasRestantes == 2) {
//            Animal mejorCoincidencia = null;
//            int mejorPuntaje = -1;
//
//            for (Animal animal : filtrados) {
//                int puntaje = 0;
//                for (Map.Entry<Integer, Boolean> entry : respuestasDadas.entrySet()) {
//                    int idxPregunta = entry.getKey();
//                    boolean respuestaUsuario = entry.getValue();
//                    int codigoPregunta = preguntasRandom.get(idxPregunta).getCodigo();
//
//                    boolean coincide = false;
//                    switch (codigoPregunta) {
//                        case 0: coincide = animal.getMamifero() != null && animal.getMamifero() == respuestaUsuario; break;
//                        case 1: coincide = animal.getAve() != null && animal.getAve() == respuestaUsuario; break;
//                        case 2: coincide = animal.getPelaje() != null && animal.getPelaje() == respuestaUsuario; break;
//                        case 3: coincide = animal.getHuevos() != null && animal.getHuevos() == respuestaUsuario; break;
//                        case 4: coincide = animal.getDomestico() != null && animal.getDomestico() == respuestaUsuario; break;
//                        case 5: coincide = animal.getPez() != null && animal.getPez() == respuestaUsuario; break;
//                    }
//
//                    if (coincide) puntaje++;
//                }
//
//                if (puntaje > mejorPuntaje) {
//                    mejorPuntaje = puntaje;
//                    mejorCoincidencia = animal;
//                }
//            }
//
//            // Mostrar mejor coincidencia
//            model.addAttribute("animales", mejorCoincidencia);
//            return "resultado";
//        }
//
//        // Si queda solo un animal, mostrarlo directamente
//        if (filtrados.size() == 1) {
//            model.addAttribute("animales", filtrados.get(0));
//            return "resultado";
//        }
//
//        // Si no quedan preguntas, redirigir al final
//        if (i + 1 >= preguntasRandom.size()) {
//            return "redirect:/pruebaAnimales?i=" + preguntasRandom.size();
//        }
//
//        // Siguiente pregunta
//        return "redirect:/pruebaAnimales?i=" + (i + 1);
//    }


    @GetMapping("/reiniciar")
    public String reiniciar(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

    @GetMapping("/jugarNuevo")
    public String jugarNuevo() {
        return "redirect:/animalesinicio";
    }

    @GetMapping("/reiniciarM")
    public String reiniciarM(HttpSession session) {
        session.invalidate();
        return "redirect:/";
    }

    @GetMapping("/jugarNuevoM")
    public String jugarNuevoM() {
        return "redirect:/maravillasinicio";
    }

    @GetMapping("/jugarRS")
    public String jugarRS() {
        return "redirect:/redesinicio";
    }


    @PostMapping("/guardarA")
    public String guardarSugerencia(@ModelAttribute SugerenciasAnimales sugerenciasAnimales) {
        sugerenciasAnimales.setFecha(new Date());
        sugerenciasAnimales.setEstado("Pendiente");
        sugerenciaAnimalesRepository.save(sugerenciasAnimales);
        return "redirect:/";
    }

    @PostMapping("/guardarP")
    public String guardarSugerencia(@ModelAttribute SugerenciasPersonas sugerenciasPersonas) {
        sugerenciasPersonas.setFecha(new Date());
        sugerenciasPersonas.setEstado("Pendiente");
        sugerenciaPersonasRepository.save(sugerenciasPersonas);
        return "redirect:/";
    }

    @GetMapping("/nuevoA")
    public String nuevaSugerenciaA(Model model) {
        model.addAttribute("sugerenciaA", new SugerenciasAnimales());
        return "formularioAnimales";
    }

    @GetMapping("/nuevoP")
    public String nuevaSugerenciaP(Model model) {
        model.addAttribute("sugerenciaP", new SugerenciasPersonas());
        return "formularioPersonas";
    }


    @GetMapping("/eliminarP/{id}")
    public String eliminarPersona(@PathVariable("id") int idP) {
        sugerenciaPersonasRepository.deleteById(idP);
        return "redirect:/listado";
    }

    @GetMapping("/eliminarA/{id}")
    public String eliminarAnimal(@PathVariable("id") int idA) {
        sugerenciaAnimalesRepository.deleteById(idA);
        return "redirect:/listado";
    }








}
