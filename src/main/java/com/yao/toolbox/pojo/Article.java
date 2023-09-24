package com.yao.toolbox.pojo;

import com.yao.toolbox.enums.ArticleStatus;

import java.util.Date;

/*
* TODO: 1. “动态”实体类
*       2. 用于存储用户发表的动态
* */
public class Article {

    private Long id;

    // 关联User类的id
    private Long userId;

    private String title;

    private String coverImageUrl;

    private String intro;

    // 枚举类保存“动态”的发布状态：草稿、审核、已发布，撤回
    private ArticleStatus status;

    private Date createTime;

    private Date updateTime;

    public Article() {
    }

    public Article(Long id, Long userId, String title, String coverImageUrl, String intro, ArticleStatus status, Date createTime, Date updateTime) {
        this.id = id;
        this.userId = userId;
        this.title = title;
        this.coverImageUrl = coverImageUrl;
        this.intro = intro;
        this.status = status;
        this.createTime = createTime;
        this.updateTime = updateTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCoverImageUrl() {
        return coverImageUrl;
    }

    public void setCoverImageUrl(String coverImageUrl) {
        this.coverImageUrl = coverImageUrl;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public ArticleStatus getStatus() {
        return status;
    }

    public void setStatus(ArticleStatus status) {
        this.status = status;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", userId=" + userId +
                ", title='" + title + '\'' +
                ", coverImageUrl='" + coverImageUrl + '\'' +
                ", intro='" + intro + '\'' +
                ", status=" + status +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                '}';
    }
}
