package com.yao.toolbox.controller;

import com.yao.toolbox.pojo.ResponseMessage;
import com.yao.toolbox.pojo.User;
import com.yao.toolbox.service.login.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

/*
* TODO： 1. @CrossOrigin("*")注解实现跨域请求
*  2.LoginController类实现登陆、注册、注销功能
* */
@RestController
@RequestMapping("/server")
public class LoginController {


    @Autowired
    private LoginService loginService;

    /*
    * TODO: 1. ‘/server/login’接口实现登陆功能，并将用户信息存入session
    *  2. json参数：{"username": "xxx", "password": "xxx"}
    * */
    @PostMapping("/login")
    public ResponseMessage<Map<String, String>> login(@RequestBody User user) {
        return loginService.login(user.getUsername(), user.getPassword());
    }

    /*
    * TODO： 1. ‘/server/reg’接口实现注册功能
    *  2. json参数：{"username": "xxx", "password": "xxx"}
    * */
    @PostMapping("/reg")
    public ResponseMessage<String> reg(@RequestBody User user) {
        return loginService.register(user);
    }

    /*
    * TODO： 1. ‘/server/logout’接口实现注销功能
    * */
    @PutMapping("/logout")
    public ResponseMessage<String> logout(HttpServletRequest request) {
        return loginService.logout(request);
    }

    /*
    * 获取当前登录用户实例
    * 不开放为接口，仅供内部调用
    * */
    public User getUser(HttpSession session) {
        return loginService.getUserDetails().getUser();
    }

    public User getUser() {
        return loginService.getUserDetails().getUser();
    }

}
