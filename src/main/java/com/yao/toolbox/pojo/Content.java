package com.yao.toolbox.pojo;

import com.yao.toolbox.enums.ContentType;

/*
* TODO: 1. "动态“的具体内容
*       2. 内容可以是markdown，图片，视频，音频
* */
public class Content {

    private Long id;

    // 关联”动态“
    private Long articleId;

    // 动态内容的类型（markdown，图片，视频，音频）
    private ContentType type;

    private String dataUrl;

    public Content() {
    }

    public Content(Long id, Long articleId, ContentType type, String dataUrl) {
        this.id = id;
        this.articleId = articleId;
        this.type = type;
        this.dataUrl = dataUrl;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getArticleId() {
        return articleId;
    }

    public void setArticleId(Long articleId) {
        this.articleId = articleId;
    }

    public ContentType getType() {
        return type;
    }

    public void setType(ContentType type) {
        this.type = type;
    }

    public String getDataUrl() {
        return dataUrl;
    }

    public void setDataUrl(String dataUrl) {
        this.dataUrl = dataUrl;
    }

    @Override
    public String toString() {
        return "Content{" +
                "id=" + id +
                ", articleId=" + articleId +
                ", type=" + type +
                ", dataUrl='" + dataUrl + '\'' +
                '}';
    }
}
