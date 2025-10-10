package com.cursoceat.irinator.modell;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
@Table(name="sugerencias_animales")
public class SugerenciasAnimales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_sugerencia")
    private int idSugerencia;
    private String nombre_animal;
    private String pregunta_especifica;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date fecha_sugerencia;
    private String estado;

    public int getIdSugerencia() {
        return idSugerencia;
    }

    public void setIdSugerencia(int idSugerencia) {
        this.idSugerencia = idSugerencia;
    }

    public String getNombre() {
        return nombre_animal;
    }

    public void setNombre(String nombre_animal) {
        this.nombre_animal = nombre_animal;
    }

    public String getPregunta() {
        return pregunta_especifica;
    }

    public void setPregunta(String pregunta_especifica) {
        this.pregunta_especifica = pregunta_especifica;
    }

    public Date getFecha() {
        return fecha_sugerencia;
    }

    public void setFecha(Date fecha_sugerencia) {
        this.fecha_sugerencia = fecha_sugerencia;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    @Override
    public String toString() {
        return "SugerenciasAnimales{" +
                "idSugerencia=" + idSugerencia +
                ", nombre='" + nombre_animal + '\'' +
                ", pregunta='" + pregunta_especifica + '\'' +
                ", fecha=" + fecha_sugerencia +
                ", estado='" + estado + '\'' +
                '}';
    }
}
