package com.yao.toolbox.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;

/*
* TODO: “动态”的发布状态：草稿、审核、已发布，撤回
* */
public enum ArticleStatus {
    DRAFT(0), AUDIT(1), PUBLISHED(2), RECALL(3);

    @EnumValue
    private int status;

    ArticleStatus(int status) {
        this.status = status;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "ArticleStatus{" +
                "status=" + status +
                '}';
    }
}
