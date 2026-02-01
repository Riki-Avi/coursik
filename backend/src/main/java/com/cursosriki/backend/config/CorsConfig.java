package com.cursosriki.backend.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * Configuración de CORS (Cross-Origin Resource Sharing)
 * 
 * CORS es una medida de seguridad del navegador que bloquea
 * peticiones entre diferentes orígenes (puertos/dominios).
 * 
 * Sin esto, React (puerto 5173) no podría llamar a Spring Boot (puerto 8080).
 */
@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @SuppressWarnings("null")
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**") // Rutas que permiten CORS
                .allowedOrigins("http://localhost:5173") // Origen permitido (React)
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos HTTP permitidos
                .allowedHeaders("*"); // Permitir todos los headers
    }
}
