package com.cursosriki.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HolaMundoController {

    @GetMapping("/")
    public String holaMundo() {
        return "¡Hola Mundo desde Spring Boot!";
    }

    @GetMapping("/api/saludo")
    public String saludo() {
        return "Bienvenido a CursosRiki API";
    }

    @GetMapping("/api/despedida")
    public String despedida() {
        return "¡Adios CursosRiki!";
    }

    @GetMapping("/api/welcome")
    public String welcome() {
        return "Welcome to CursosRiki API";
    }
}
