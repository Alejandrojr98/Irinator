package com.cursoceat.irinator.modell;

public class PreguntasAnimales {
    private String pregunta;

    public PreguntasAnimales() {
    }

    public PreguntasAnimales(String pregunta) {
        this.pregunta = pregunta;
    }

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    @Override
    public String toString() {
        return "PreguntasAnimales{" +
                "pregunta='" + pregunta + '\'' +
                '}';
    }
}
