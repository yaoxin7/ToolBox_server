package com.yao.toolbox.enums;

import com.baomidou.mybatisplus.annotation.EnumValue;

/*
* TODO: 内容的类型可以是：markdown、文字、图片集、视频、音频
* */
public enum ContentType {
    MARKDOWN(0), TEXT(1), PICTURES(2), VIDEO(3), AUDIO(4);

    @EnumValue
    private final int type;

    ContentType(int type) {
        this.type = type;
    }

    public int getType() {
        return type;
    }

    @Override
    public String toString() {
        return "ContentType{" +
                "type=" + type +
                '}';
    }
}
