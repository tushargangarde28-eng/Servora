package com.servora.servora_backend.entity;

import java.io.Serializable;

public class UserRoleId implements Serializable {

    private Long userId;
    private Long roleId;

    public UserRoleId() {
    }

    public UserRoleId(Long userId, Long roleId) {
        this.userId = userId;
        this.roleId = roleId;
    }

    public Long getUserId() {
        return userId;
    }

    public Long getRoleId() {
        return roleId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof UserRoleId)) return false;

        UserRoleId that = (UserRoleId) o;

        return userId.equals(that.userId)
                && roleId.equals(that.roleId);
    }

    @Override
    public int hashCode() {
        return 31 * userId.hashCode() + roleId.hashCode();
    }
}