package com.yao.toolbox.service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.yao.toolbox.config.TokenProperties;
import com.yao.toolbox.pojo.security.UserDetailsImp;
import com.yao.toolbox.service.redis.RedisCache;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

@Service
public class TokenService {

    @Autowired
    private RedisCache redisCache;

    @Autowired
    private TokenProperties tokenProperties;

    // 生成token
    public String createToken(UserDetailsImp userDetails) {
        // 生成不带下划线的uuid
        String uuid = UUID.randomUUID().toString().replaceAll("-", "");

        String token = JWT.create()
                .withClaim(tokenProperties.user_key, uuid)
                .sign(Algorithm.HMAC256(tokenProperties.server_key));

        userDetails.setToken(token);

        saveToken(uuid, userDetails);
        return token;
    }

    // 存入redis
    public void saveToken(String token, UserDetailsImp userDetails) {
        userDetails.setLoginTime(System.currentTimeMillis());
        userDetails.setExpireTime(userDetails.getLoginTime() + tokenProperties.expire_time * 1000L);
        redisCache.setCacheObject(token, userDetails, tokenProperties.expire_time, TimeUnit.SECONDS);
    }

    // 刷新token超时时间
    public void refreshToken(UserDetailsImp userDetails) {
        if (userDetails.isAccountNonExpired()) {
            saveToken(userDetails.getToken(), userDetails);
        }
    }

    public void delLoginUser(HttpServletRequest request) {
        String token = getUuid(request);
        if (StringUtils.isNotEmpty(token)) {
            redisCache.deleteObject(token);
        }
    }
    // 从redis中删除token
    public void delLoginUserByToken(String token) {
        if (StringUtils.isNotEmpty(token))
            redisCache.deleteObject(token);
    }

    // 从请求头中获取token
    public String getToken(HttpServletRequest request) {
        return request.getHeader("token");
    }

    // 从请求头中获取uuid
    public String getUuid(HttpServletRequest request) {
        String token = getToken(request);
        if (StringUtils.isBlank(token)) {
            return null;
        }
        DecodedJWT decode = JWT.decode(token);

        return decode.getClaim(tokenProperties.user_key).asString();
    }

    // 从redis中获取登录用户
    public UserDetailsImp getLoginUser(HttpServletRequest request) {

        try {
            String uuid = getUuid(request);

            if (StringUtils.isNotEmpty(uuid)) {
                return redisCache.getCacheObject(uuid);
            }
        } catch (Exception e) {

        }

        return null;
    }


}
