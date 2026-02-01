package com.cursosriki.backend.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class GeminiService {

    @Value("${gemini.api.key:no-key}")
    private String apiKey;

    private final WebClient webClient;

    public GeminiService() {
        this.webClient = WebClient.builder()
                .baseUrl("https://generativelanguage.googleapis.com/v1beta")
                .build();
    }

    public String explicarError(String pregunta, String respuestaUsuario, String correcta) {
        String prompt = """
                Eres un tutor de React amigable. El estudiante respondió mal esta pregunta:

                Pregunta: %s
                Respuesta del estudiante: %s
                Respuesta correcta: %s

                Explica brevemente (máximo 3 oraciones) por qué la respuesta
                correcta es mejor. Sé motivador y claro.
                """.formatted(pregunta, respuestaUsuario, correcta);

        return llamarGemini(prompt);
    }

    @SuppressWarnings("null")
    private String llamarGemini(String prompt) {
        try {
            // Estructura del request para Gemini API
            Map<String, Object> requestBody = Map.of(
                    "contents", List.of(
                            Map.of("parts", List.of(
                                    Map.of("text", prompt)))));

            // Llamar a Gemini (gemini-2.5-flash - estable y rápido)
            Map<String, Object> response = webClient.post()
                    .uri("/models/gemini-2.5-flash:generateContent?key=" + apiKey)
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(new org.springframework.core.ParameterizedTypeReference<Map<String, Object>>() {
                    })
                    .block();

            // Extraer el texto de la respuesta
            if (response != null && response.containsKey("candidates")) {
                @SuppressWarnings("unchecked")
                List<Map<String, Object>> candidates = (List<Map<String, Object>>) response.get("candidates");
                if (!candidates.isEmpty()) {
                    Map<String, Object> candidate = candidates.get(0);
                    @SuppressWarnings("unchecked")
                    Map<String, Object> content = (Map<String, Object>) candidate.get("content");
                    @SuppressWarnings("unchecked")
                    List<Map<String, Object>> parts = (List<Map<String, Object>>) content.get("parts");
                    Map<String, Object> part = parts.get(0);
                    return (String) part.get("text");
                }
            }

            return "No se pudo generar explicación";

        } catch (Exception e) {
            return "Error al conectar con IA: " + e.getMessage();
        }
    }
}
