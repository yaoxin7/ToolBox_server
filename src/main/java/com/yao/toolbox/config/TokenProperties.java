package com.yao.toolbox.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "token")
public class TokenProperties {

    // TODO token 密钥
    public String server_key = "yao.com";

    // TODO token 前缀
    public String user_key = "login_user_key";

    // TODO 过期时间 5小时 单位： 秒
    public int expire_time = 5 * 60 * 60;

    public void setServer_key(String server_key) {
        this.server_key = server_key;
    }

    public void setUser_key(String user_key) {
        this.user_key = user_key;
    }

    public void setExpire_time(int expire_time) {
        this.expire_time = expire_time;
    }
}
