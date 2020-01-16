package com.enterprise.CursoReact.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/test")
public class TestController {

    @GetMapping(value = "curso")
    @ResponseBody
    public String testCurso(){
        return "Respuesta OK";
    }
}
