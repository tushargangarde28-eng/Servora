package com.servora.servora_backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http
                // REST API does not use CSRF tokens
                .csrf(csrf -> csrf.disable())

                // We will use JWT later
                .sessionManagement(session ->
                        session.sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS
                        )
                )

                // Disable Spring's default login mechanisms
                .formLogin(form -> form.disable())
                .httpBasic(basic -> basic.disable())

                .authorizeHttpRequests(auth -> auth

                        // Business registration is PUBLIC
                        .requestMatchers(
                                HttpMethod.POST,
                                "/api/auth/register/business"
                        ).permitAll()

                        // Other authentication APIs will also be PUBLIC
                        .requestMatchers("/api/auth/**").permitAll()

                        // Root URL
                        .requestMatchers("/").permitAll()

                        // Everything else will require JWT later
                        .anyRequest().authenticated()
                );

        return http.build();
    }
}