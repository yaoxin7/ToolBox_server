package com.yao.toolbox.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yao.toolbox.mapper.UserMapper;
import com.yao.toolbox.pojo.User;
import com.yao.toolbox.pojo.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserServiceImp extends ServiceImpl<UserMapper, User> implements UserService{

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private UserInfoService userInfoService;

    @Override
    public boolean existUserByUsernameAndPassword(User user) {
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.eq("username", user.getUsername())
                .eq("password", user.getPassword());
        return userMapper.exists(wrapper);
    }

    @Override
    public User getUserByUsernameAndPassword(User user) {
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.eq("username", user.getUsername())
                .eq("password", user.getPassword());
        return userMapper.selectOne(wrapper);
    }

    @Override
    @Transactional
    public boolean addUser(User user) {
        user.setId(null);
        int row = userMapper.insert(user);

//        创建与用户登录信息关联的用户信息
        UserInfo userInfo = new UserInfo();
        userInfo.setAccountId(user.getId());
        boolean b = userInfoService.addUserInfo(userInfo);

        return row > 0 && b;
    }

    @Override
    public boolean updatePassword(User user) {
        UpdateWrapper<User> wrapper = new UpdateWrapper<>();
        wrapper.set("password", user.getPassword())
                .eq("username", user.getUsername());
        int row = userMapper.update(null, wrapper);

        return row > 0;
    }

    @Override
    public boolean updateEmail(User user) {
        return false;
    }
}
