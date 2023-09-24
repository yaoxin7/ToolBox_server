package com.yao.toolbox.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yao.toolbox.mapper.UserInfoMapper;
import com.yao.toolbox.pojo.UserInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserInfoServiceImp extends ServiceImpl<UserInfoMapper, UserInfo> implements UserInfoService {

    @Autowired
    private UserInfoMapper userInfoMapper;

    @Override
    public boolean addUserInfo(UserInfo userInfo) {
        int row = userInfoMapper.insert(userInfo);
        return row > 0;
    }

    @Override
    public UserInfo getUserInfoByUserId(Long userId) {
        return userInfoMapper.selectOne(new QueryWrapper<UserInfo>().eq("account_id", userId));
    }

    @Override
    public boolean updateUserInfoByUserId(Long userId, UserInfo userInfo) {
        UpdateWrapper<UserInfo> wrapper = new UpdateWrapper<>();

        wrapper.set(userInfo.getNickname() != null, "nickname", userInfo.getNickname())
                .set(userInfo.getBio() != null, "bio", userInfo.getBio())
                .set(userInfo.getAvatar() != null,"avatar", userInfo.getAvatar())
                .eq("account_id", userId);

        return userInfoMapper.update(null, wrapper) > 0;
    }
}
