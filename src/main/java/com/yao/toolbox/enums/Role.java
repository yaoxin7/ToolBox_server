package com.yao.toolbox.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;

public enum Role {

    SuperAdmin(0), Admin(1), User(2), Guest(3);

    @EnumValue
    private int id;

    Role(int id) {
        this.id = id;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Role{" +
                "id=" + id +
                '}';
    }
}
