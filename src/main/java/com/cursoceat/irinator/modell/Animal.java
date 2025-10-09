package com.cursoceat.irinator.modell;

import jakarta.persistence.*;

@Entity
@Table(name="animales")
public class Animal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int idAnimal;
    private String nombre;
    private Boolean mamifero;
    private Boolean ave;
    private Boolean pelaje;
    private Boolean huevos;
    private Boolean domestico;
    private Boolean pez;

    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "id_img", referencedColumnName = "id_imagen")
    private Imagen imagen;

    public int getIdAnimal() {
        return idAnimal;
    }

    public void setIdAnimal(int idAnimal) {
        this.idAnimal = idAnimal;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Boolean getMamifero() {
        return mamifero;
    }

    public void setMamifero(Boolean mamifero) {
        this.mamifero = mamifero;
    }

    public Boolean getAve() {
        return ave;
    }

    public void setAve(Boolean ave) {
        this.ave = ave;
    }

    public Boolean getPelaje() {
        return pelaje;
    }

    public void setPelaje(Boolean pelaje) {
        this.pelaje = pelaje;
    }

    public Boolean getHuevos() {
        return huevos;
    }

    public void setHuevos(Boolean huevos) {
        this.huevos = huevos;
    }

    public Boolean getDomestico() {
        return domestico;
    }

    public void setDomestico(Boolean domestico) {
        this.domestico = domestico;
    }

    public Boolean getPez() {
        return pez;
    }

    public void setPez(Boolean pez) {
        this.pez = pez;
    }

    public Imagen getImagen() {
        return imagen;
    }

    public void setImagen(Imagen imagen) {
        this.imagen = imagen;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "idAnimal=" + idAnimal +
                ", nombre='" + nombre + '\'' +
                ", mamifero=" + mamifero +
                ", ave=" + ave +
                ", pelaje=" + pelaje +
                ", huevos=" + huevos +
                ", domestico=" + domestico +
                ", pez=" + pez +
                '}';
    }
}
