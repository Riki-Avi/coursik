package com.cursosriki.backend.dto;

/**
 * DTO (Data Transfer Object) para recibir datos de explicación de errores.
 * 
 * Un DTO es una clase simple que transporta datos entre capas (React →
 * Controller).
 * No tiene lógica de negocio, solo datos.
 */
public class ExplicacionRequestDTO {

    private String pregunta;
    private String respuestaUsuario;
    private String respuestaCorrecta;

    // Getters y Setters (necesarios para que Spring deserialize el JSON)

    public String getPregunta() {
        return pregunta;
    }

    public void setPregunta(String pregunta) {
        this.pregunta = pregunta;
    }

    public String getRespuestaUsuario() {
        return respuestaUsuario;
    }

    public void setRespuestaUsuario(String respuestaUsuario) {
        this.respuestaUsuario = respuestaUsuario;
    }

    public String getRespuestaCorrecta() {
        return respuestaCorrecta;
    }

    public void setRespuestaCorrecta(String respuestaCorrecta) {
        this.respuestaCorrecta = respuestaCorrecta;
    }
}
