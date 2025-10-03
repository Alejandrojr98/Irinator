package com.cursoceat.irinator.repository;

import com.cursoceat.irinator.modell.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal, Integer> {
//    List<Animal> findByNombre(String nombre);
//    List<Animal> findByMamifero(boolean mamifero);
//    List<Animal> findByAve(boolean ave);
//    List<Animal> findByPelaje(boolean pelaje);
//    List<Animal> findByHuevos(boolean huevos);
//    List<Animal> findByDomestico(boolean domestico);
//    List<Animal> findByPez(boolean pez);
//    List<Animal> findByRespuestas(boolean mamifero,boolean ave ,boolean pelaje, boolean huevos, boolean domestico, boolean pez);
//    List<Animal> findByRespuestas(boolean mamifero,boolean ave);
}
