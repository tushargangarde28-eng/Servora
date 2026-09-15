package com.servora.servora_backend.repository;

import com.servora.servora_backend.entity.UserRole;
import com.servora.servora_backend.entity.UserRoleId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRoleRepository extends JpaRepository<UserRole, UserRoleId> {
}