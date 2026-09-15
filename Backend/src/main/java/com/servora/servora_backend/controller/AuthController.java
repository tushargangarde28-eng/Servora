package com.servora.servora_backend.controller;

import com.servora.servora_backend.dto.auth.BusinessRegisterRequest;
import com.servora.servora_backend.service.AuthService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register/business")
    public String registerBusinessOwner(
            @RequestBody BusinessRegisterRequest request) {

        return authService.registerBusinessOwner(request);
    }
}