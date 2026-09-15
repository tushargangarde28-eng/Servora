package com.servora.servora_backend.repository;

import com.servora.servora_backend.entity.BusinessProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BusinessProfileRepository extends JpaRepository<BusinessProfile, Long> {
}