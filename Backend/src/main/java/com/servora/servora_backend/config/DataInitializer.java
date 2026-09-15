package com.servora.servora_backend.config;

import com.servora.servora_backend.entity.Role;
import com.servora.servora_backend.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initializeRoles(RoleRepository roleRepository) {

        return args -> {

            createRoleIfNotExists(roleRepository, "BUSINESS_OWNER");
            createRoleIfNotExists(roleRepository, "PROFESSIONAL");
            createRoleIfNotExists(roleRepository, "CUSTOMER");
            createRoleIfNotExists(roleRepository, "ADMIN");
        };
    }

    private void createRoleIfNotExists(
            RoleRepository roleRepository,
            String roleName) {

        if (roleRepository.findByName(roleName).isEmpty()) {

            Role role = new Role();
            role.setName(roleName);

            roleRepository.save(role);
        }
    }
}