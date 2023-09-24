package com.yao.toolbox.interceptors;

import com.yao.toolbox.controller.LoginController;
import com.yao.toolbox.pojo.User;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/*
* TODO: 1. 拦截未登录用户
*       2. 返回状态码401
*       3. 未登录用户除了登陆、注册接口和预检请求，其他接口都会被拦截
* */
public class LoginInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        User user = new LoginController().getUser(request.getSession());
        if (user != null || request.getMethod().equals("OPTIONS")) return HandlerInterceptor.super.preHandle(request, response, handler);
        else {
            response.setStatus(401);
            response.setHeader("Content-Type", "application/json;charset=utf-8");
            response.getWriter().write("{\"code\": 401, \"message\": \"未登录\"}");
            return false;
        }
    }

}
