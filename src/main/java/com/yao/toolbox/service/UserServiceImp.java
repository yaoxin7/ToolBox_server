package com.yao.toolbox.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yao.toolbox.mapper.UserMapper;
import com.yao.toolbox.pojo.User;
import com.yao.toolbox.pojo.UserInfo;
import com.yao.toolbox.pojo.security.UserDetailsImp;
import com.yao.toolbox.service.security.SecurityUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;

@Service
public class UserServiceImp extends ServiceImpl<UserMapper, User> implements UserService{

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    private TokenService tokenService;


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
        String password = bCryptPasswordEncoder.encode(user.getPassword());
        wrapper.set("password", password)
                .eq("username", user.getUsername());
        int row = userMapper.update(null, wrapper);

        return row > 0;
    }

    @Override
    public boolean updateEmail(User user) {
        return false;
    }

    @Override
    public User getUserByUsername(String username) {
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.eq("username", username);
        return userMapper.selectOne(wrapper);
    }

    @Override
    public boolean changeUserPassword(String oldPassword, String newPassword) {
        if (StringUtils.isBlank(oldPassword) || StringUtils.isBlank(newPassword)) return false;
        UserDetailsImp userDetails = (UserDetailsImp) SecurityUtil.getUserDetails();
        String password = userDetails.getPassword();
        User user = new User();
        user.setUsername(userDetails.getUsername());
        user.setPassword(newPassword);
        if (bCryptPasswordEncoder.matches(oldPassword, password)) {
            return updatePassword(user);
        }
        return false;
    }

    public boolean passwordService(HttpServletRequest request, String oldPassword, String newPassword) {
        if (changeUserPassword(oldPassword, newPassword)) {
            tokenService.delLoginUser(request);
            return true;
        }

        return false;
    }
}
