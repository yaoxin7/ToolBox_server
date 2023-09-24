package com.yao.toolbox.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.yao.toolbox.pojo.User;

public interface UserService extends IService<User> {

    public boolean existUserByUsernameAndPassword(User user);

    public User getUserByUsernameAndPassword(User user);

    public boolean addUser(User user);

    public boolean updatePassword(User user);

    public boolean updateEmail(User user);

    public User getUserByUsername(String username);

}
