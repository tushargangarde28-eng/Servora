package com.servora.servora_backend.service;

import com.servora.servora_backend.entity.User;
import com.servora.servora_backend.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
}