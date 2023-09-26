package com.yao.toolbox.service.security.handler;

import com.alibaba.fastjson2.JSON;
import com.yao.toolbox.pojo.ResponseMessage;
import com.yao.toolbox.utils.WebUtils;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.ResponseCache;

@Component
public class AccessDeniedHandlerImp implements AccessDeniedHandler {

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
        response.setStatus(401);
        ResponseMessage<String> message =
                new ResponseMessage<>(401, "权限不足", null);
        String jsonString = JSON.toJSONString(message);
        WebUtils.print(response, jsonString);
    }
}
