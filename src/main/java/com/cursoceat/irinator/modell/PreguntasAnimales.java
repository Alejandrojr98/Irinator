package com.cursoceat.irinator.modell;

public class PreguntasAnimales {
    private int codigo;
    private String pregunta;

    public PreguntasAnimales() {
    }

    public PreguntasAnimales(String pregunta) {
        this.pregunta = pregunta;
    }

    public PreguntasAnimales(int codigo, String pregunta) {
        this.codigo = codigo;
        this.pregunta = pregunta;
    }

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
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
                "codigo=" + codigo +
                ", pregunta='" + pregunta + '\'' +
                '}';
    }
}
