package com.yao.toolbox.pojo;

/*
* TODO: 1. 用户信息实体类
* */
public class UserInfo {

    private Long id;

    private Long accountId;

    private String nickname;

    private String bio;

    private String avatar;

    public UserInfo() {
    }

    public UserInfo(Long id, Long accountId, String nickname, String bio, String avatar) {
        this.id = id;
        this.accountId = accountId;
        this.nickname = nickname;
        this.bio = bio;
        this.avatar = avatar;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    @Override
    public String toString() {
        return "UserInfo{" +
                "id=" + id +
                ", accountId=" + accountId +
                ", nickname='" + nickname + '\'' +
                ", bio='" + bio + '\'' +
                ", avatar='" + avatar + '\'' +
                '}';
    }
}
