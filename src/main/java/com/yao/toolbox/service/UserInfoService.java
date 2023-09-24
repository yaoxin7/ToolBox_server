package com.yao.toolbox.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.yao.toolbox.pojo.UserInfo;

public interface UserInfoService extends IService<UserInfo> {

    public boolean addUserInfo(UserInfo userInfo);

    // 通过用户id获取用户信息
    public UserInfo getUserInfoByUserId(Long userId);

    // 通过用户账户账户id更新用户信息
    public boolean updateUserInfoByUserId(Long userId, UserInfo userInfo);
}
