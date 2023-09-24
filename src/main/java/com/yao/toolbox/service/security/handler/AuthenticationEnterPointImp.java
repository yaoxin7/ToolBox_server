package com.yao.toolbox.service.security.handler;

import com.alibaba.fastjson2.JSON;
import com.yao.toolbox.pojo.ResponseMessage;
import com.yao.toolbox.utils.WebUtils;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AuthenticationEnterPointImp implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest request, HttpServletResponse response, AuthenticationException authException) throws IOException, ServletException {
        response.setStatus(401);
        ResponseMessage<String> message =
                new ResponseMessage<>(401, "权限不足", null);
        String jsonString = JSON.toJSONString(message);
        WebUtils.print(response, jsonString);
    }
}
