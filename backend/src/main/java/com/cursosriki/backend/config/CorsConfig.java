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
        registry.addMapping("/**") // Rutas que permiten CORS
                .allowedOrigins("https://coursik-production.up.railway.app", "http://localhost:5173",
                        "http://localhost:4173") // Solo Prod y Local
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos HTTP permitidos
                .allowedHeaders("*") // Permitir todos los headers
                .allowCredentials(true);
    }
}
