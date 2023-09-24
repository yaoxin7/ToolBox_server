package com.yao.toolbox.interceptors;

import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Date;

/*
* TODO: 1. 实现跨域请求携带cookie
* */
public class CORSInterceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
//        System.out.println(new Date().toString()  + request.getRequestURL());
        response.setHeader("Access-Control-Allow-Credentials", "true");
        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
    }

}
