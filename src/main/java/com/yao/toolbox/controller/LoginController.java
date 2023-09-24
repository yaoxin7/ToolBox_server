package com.yao.toolbox.controller;

import com.yao.toolbox.pojo.ResponseMessage;
import com.yao.toolbox.pojo.User;
import com.yao.toolbox.service.UserService;
import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

/*
* TODO： 1. @CrossOrigin("*")注解实现跨域请求
*  2.LoginController类实现登陆、注册、注销功能
* */
@RestController
@RequestMapping("/server")
public class LoginController {

    @Autowired
    private UserService userService;

    /*
    * TODO: 1. ‘/server/login’接口实现登陆功能，并将用户信息存入session
    *  2. json参数：{"username": "xxx", "password": "xxx"}
    * */
    @PostMapping("/login")
    public ResponseMessage<Null> login(HttpSession session, @RequestBody User user) {
        ResponseMessage<Null> response;
        user = userService.getUserByUsernameAndPassword(user);
        if (user != null) {
            session.setAttribute("userToken", user);
            response = new ResponseMessage<>(0, "登陆成功");
        } else {
            response = new ResponseMessage<>(1, "请检查用户名和密码是否正确");
        }
        return response;
    }

    /*
    * TODO： 1. ‘/server/reg’接口实现注册功能
    *  2. json参数：{"username": "xxx", "password": "xxx"}
    * */
    @PostMapping("/reg")
    public ResponseMessage<Null> reg(@RequestBody User user) {
        ResponseMessage<Null> response;
        boolean bool;

        try {
            bool = userService.addUser(user);
        } catch (DuplicateKeyException e) {
            return new ResponseMessage<>(1, "账户已存在");
        }

        if (bool) response = new ResponseMessage<>(0, "注册成功");
        else response = new ResponseMessage<>(1, "请检查用户名或密码是否合法");

        return response;
    }

    /*
    * TODO： 1. ‘/server/logout’接口实现注销功能
    * */
    @PutMapping("/logout")
    public ResponseMessage<Null> logout(HttpSession session) {
        session.invalidate();
        return new ResponseMessage<>(0, "成功");
    }

    /*
    * 获取当前登录用户实例
    * 不开放为接口，仅供内部调用
    * */
    public User getUser(HttpSession session) {
        return (User) session.getAttribute("userToken");
    }

}
