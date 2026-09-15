package com.servora.servora_backend.service;

import com.servora.servora_backend.dto.auth.BusinessRegisterRequest;
import com.servora.servora_backend.entity.Role;
import com.servora.servora_backend.entity.User;
import com.servora.servora_backend.entity.UserRole;
import com.servora.servora_backend.repository.RoleRepository;
import com.servora.servora_backend.repository.UserRepository;
import com.servora.servora_backend.repository.UserRoleRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.servora.servora_backend.entity.BusinessProfile;
import com.servora.servora_backend.repository.BusinessProfileRepository;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserRoleRepository userRoleRepository;
    private final BusinessProfileRepository businessProfileRepository;
    private final BCryptPasswordEncoder passwordEncoder =
            new BCryptPasswordEncoder();

    public AuthService(
            UserRepository userRepository,
            RoleRepository roleRepository,
            UserRoleRepository userRoleRepository,
            BusinessProfileRepository businessProfileRepository) {

        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userRoleRepository = userRoleRepository;
        this.businessProfileRepository = businessProfileRepository;
    }
    @Transactional
    public String registerBusinessOwner(BusinessRegisterRequest request) {

        // 1. Check duplicate email
        if (userRepository.existsByEmail(request.getEmail())) {
            return "Email already registered!";
        }

        // 2. Create user
        User user = new User();

        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());

        // 3. Hash password
        String hashedPassword =
                passwordEncoder.encode(request.getPassword());

        user.setPasswordHash(hashedPassword);

        // 4. Save user
        userRepository.save(user);

        // 5. Find BUSINESS_OWNER role
        Role role = roleRepository.findByName("BUSINESS_OWNER")
                .orElseThrow(() ->
                        new RuntimeException("BUSINESS_OWNER role not found"));

        // 6. Connect user with role
        UserRole userRole = new UserRole(user, role);

        userRoleRepository.save(userRole);

        // 7. Create business profile
        BusinessProfile businessProfile = new BusinessProfile();

        businessProfile.setOwner(user);
        businessProfile.setBusinessName(request.getBusinessName());
        businessProfile.setBusinessEmail(request.getEmail());
        businessProfile.setStatus("ACTIVE");

        businessProfileRepository.save(businessProfile);

        return "Business owner registered successfully!";
    }
}