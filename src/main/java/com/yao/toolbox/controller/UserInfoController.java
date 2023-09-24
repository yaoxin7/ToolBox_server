package com.yao.toolbox.controller;

import com.yao.toolbox.pojo.ResponseMessage;
import com.yao.toolbox.pojo.User;
import com.yao.toolbox.pojo.UserInfo;
import com.yao.toolbox.service.UserInfoService;
import com.yao.toolbox.service.UserService;
import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

/*
* TODO: 1. 支持跨域请求, 允许携带cookie
*  2. UserInfoController类实现客户端请求用户信息的返回
*  3. 返回json对象
*  4. 基地址：/server/user/info，restful风格
* */
@RestController
@RequestMapping("/server/user/info")
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private UserService userService;

    @Autowired
    private LoginController loginController;

    /*
    * TODO: 1. 返回session对象中登录用户的信息
    *   2. 请求地址：/server/user/info
    *   3. 请求方式：GET
    * */
    @GetMapping("")
    public ResponseMessage<UserInfo> getUserInfo(HttpSession session) {
        // 获取当前登录用户实例
        User user = loginController.getUser(session);
        ResponseMessage<UserInfo> response;
        UserInfo userInfo = userInfoService.getUserInfoByUserId(user.getId());
        if (userInfo != null) {
            response = new ResponseMessage<>(0, "获取用户信息成功", userInfo);
        } else {
            response = new ResponseMessage<>(1, "获取用户信息失败");
        }
        return response;
    }

    /*
    * TODO: 1. 更新用户信息
    *  2. 请求地址： /server/user/info
    *  3. 请求方式： post
    *  4. 请求参数 json对象 {"nickname": XXX, "bio": XXX, "avatar": XXX}
    * */
    @PostMapping("")
    public ResponseMessage<Null> updateUserInfo(HttpSession session, @RequestBody UserInfo userInfo) {
        // 获取当前登录用户实例
        User user = loginController.getUser(session);

        ResponseMessage<Null> message;

        if (userInfoService.updateUserInfoByUserId(user.getId(), userInfo)) {
            message = new ResponseMessage<>(0, "用户信息更细成功");
        } else {
            message = new ResponseMessage<>(1, "用户信息更新失败");
        }

        return message;
    }

    /*
    * TODO 获取指定用户信息
    *  1. 请求地址： /server/user/info/{id}
    *  2. 请求方式：get
    * */
    @GetMapping("/{id}")
    public ResponseMessage<UserInfo> getUserinfoById(@PathVariable Integer id) {
        ResponseMessage<UserInfo> response;
        UserInfo userInfo = userInfoService.getUserInfoByUserId(Long.valueOf(id));
        if (userInfo == null) response = new ResponseMessage<>(1, "获取用户信息失败");
        else
            response = new ResponseMessage<>(0, "获取用户信息成功", userInfo);
        return response;
    }


}
