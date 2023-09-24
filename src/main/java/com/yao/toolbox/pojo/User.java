package com.yao.toolbox.pojo;

import com.yao.toolbox.enums.Role;

import java.io.Serializable;
import java.util.Date;

/*
* TODO: 1. 用户实体类
*  可序列化
* */
public class User implements Serializable {

    private Long id;

    private String username;

    private String password;

    private String email;

    private Role role;

    private String status;

    private int level;

    private Date createTime;

    public User() {
    }

    public User(Long id, String username, String password, String email, Role role, String status, int level, Date createTime) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.status = status;
        this.level = level;
        this.createTime = createTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", role=" + role +
                ", status='" + status + '\'' +
                ", level=" + level +
                ", createTime=" + createTime +
                '}';
    }
}

