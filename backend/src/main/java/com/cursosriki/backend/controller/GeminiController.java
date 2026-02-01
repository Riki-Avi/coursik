package com.cursosriki.backend.controller;

import com.cursosriki.backend.dto.ExplicacionRequestDTO;
import com.cursosriki.backend.service.GeminiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class GeminiController {

    private final GeminiService geminiService;

    // Inyección de dependencias por constructor (mejor práctica)
    public GeminiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    /**
     * Endpoint para explicar por qué una respuesta es incorrecta.
     * 
     * React envía: POST /api/explicar
     * Body: { pregunta, respuestaUsuario, respuestaCorrecta }
     * 
     * Returns: Explicación generada por Gemini AI
     */
    @PostMapping("/explicar")
    public String explicarError(@RequestBody ExplicacionRequestDTO dto) {
        return geminiService.explicarError(
                dto.getPregunta(),
                dto.getRespuestaUsuario(),
                dto.getRespuestaCorrecta());
    }
}
