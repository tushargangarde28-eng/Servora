package com.servora.servora_backend.controller;

import com.servora.servora_backend.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/api/users/test")
    public String testUserApi() {
        return "User API is working!";
    }
}