package com.yao.toolbox.service.security;

import com.yao.toolbox.pojo.User;
import com.yao.toolbox.pojo.security.UserDetailsImp;
import com.yao.toolbox.service.MenuService;
import com.yao.toolbox.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.LinkedHashSet;
import java.util.Set;

@Service
public class UserDetailServiceImp implements UserDetailsService {

    @Autowired
    private UserService userService;
    @Autowired
    private MenuService menuService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // 查询数据库
        User user = userService.getUserByUsername(username);
        // 未查找到抛出异常
        if (user == null) throw new UsernameNotFoundException("用户不存在");

        Set<String> auth;
        if (user.getId() == 1) {
            LinkedHashSet<String> strings = new LinkedHashSet<>();
            strings.add("*:*:*");
            auth = strings;
        } else auth = menuService.getMenuByUserId(user.getId());
        // 封装
        return new UserDetailsImp(user, auth);
    }
}
