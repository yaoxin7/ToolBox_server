package com.yao.toolbox;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yao.toolbox.enums.Role;
import com.yao.toolbox.pojo.Article;
import com.yao.toolbox.pojo.User;
import com.yao.toolbox.pojo.UserInfo;
import com.yao.toolbox.service.ArticleService;
import com.yao.toolbox.service.UserInfoService;
import com.yao.toolbox.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Date;
import java.util.List;

@SpringBootTest
class ToolBoxApplicationTests {

//    @Autowired
    private UserService userService;

//    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private ArticleService articleService;

    void addUser() {
        User user = new User(null,
                "yao",
                "123456",
                "3096828266@qq.com",
                Role.SuperAdmin,
                "none",
                9,
                new Date());
        System.out.println(userService.addUser(user));
    }

//    @Test
    void contextLoads() {
        List<User> list = userService.list();
        System.out.println(list);
    }

//    @Test
    void ex() {
        User user = new User();
        user.setUsername("yao");
        user.setPassword("123456");
        boolean b = userService.existUserByUsernameAndPassword(user);
        System.out.println("username=yao,password=123\t" + (b ? "存在" : "不存在"));
    }

//    @Test
    void updatePassword() {
        User user = new User();
        user.setUsername("yao");
        user.setPassword("123");
        System.out.println(userService.updatePassword(user));

    }

//    测试获取用户信息
//    @Test
    public void getUserInfo() {
        User user = new User();
        user.setUsername("yaoxin");
        user.setPassword("123456");
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.eq("username", user.getUsername())
                .eq("password", user.getPassword());
        User user1 = userService.getOne(wrapper);

        UserInfo userInfo = userInfoService.getUserInfoByUserId(user1.getId());
        System.out.println(userInfo);
    }

//    测试更新用户信息
//    @Test
    public void updateUserInfo() {
        User user = new User();
        user.setUsername("yaoxin");
        user.setPassword("123456");
        QueryWrapper<User> wrapper = new QueryWrapper<>();
        wrapper.eq("username", user.getUsername())
                .eq("password", user.getPassword());
        User user1 = userService.getOne(wrapper);

        UserInfo userInfo = new UserInfo(1L, 1L, "牛头人本人", "海内存知己，天涯若比邻", null);
        System.out.println(userInfoService.updateUserInfoByUserId(user1.getId(), userInfo));
    }

    @Test
    public void test() {
        Page<Article> page = articleService.getArticleList(1, 10, null);
        page.getRecords().forEach(System.out::println);
    }

}
