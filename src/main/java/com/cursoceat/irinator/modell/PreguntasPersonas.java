package com.cursoceat.irinator.modell;

public class PreguntasPersonas {
    private int codigo;
    private String pregunta;

    public PreguntasPersonas() {
    }

    public PreguntasPersonas(int codigo, String pregunta) {
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
        return "PreguntasPersonas{" +
                "codigo=" + codigo +
                ", pregunta='" + pregunta + '\'' +
                '}';
    }
}
