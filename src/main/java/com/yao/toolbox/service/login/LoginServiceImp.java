package com.yao.toolbox.service.login;

import com.yao.toolbox.pojo.ResponseMessage;
import com.yao.toolbox.pojo.User;
import com.yao.toolbox.pojo.security.UserDetailsImp;
import com.yao.toolbox.service.TokenService;
import com.yao.toolbox.service.UserService;
import com.yao.toolbox.service.security.SecurityUtil;
import org.apache.commons.lang3.StringUtils;
import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.LinkedHashMap;
import java.util.Map;

@Service
public class LoginServiceImp implements LoginService {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public ResponseMessage<Map<String, String>> login(String username, String password) {
        // 进行认证
        Authentication authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(username, password)
        );
        // 认证结果为空抛出，交给异常处理器处理
        if (authenticate == null) throw new RuntimeException("登录失败");
        // 生成token
        String token = tokenService.createToken((UserDetailsImp) authenticate.getPrincipal());
        // 返回登录成功信息和token
        LinkedHashMap<String, String> map = new LinkedHashMap<>();
        map.put("token", token);
        return new ResponseMessage<>(0, "登录成功", map);

    }

    @Override
    public ResponseMessage<String> logout(HttpServletRequest request) {
        tokenService.delLoginUser(request);
        return new ResponseMessage<>(0, "注销成功");
    }

    @Override
    public ResponseMessage<String> register(User user) {
        ResponseMessage<String> response;
        boolean bool;

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));

        try {
            bool = userService.addUser(user);
        } catch (DuplicateKeyException e) {
            return new ResponseMessage<>(1, "账户已存在");
        }

        if (bool) response = new ResponseMessage<>(0, "注册成功");
        else response = new ResponseMessage<>(1, "请检查用户名或密码是否合法");

        return response;
    }

    @Override
    public UserDetailsImp getUserDetails() {
        return (UserDetailsImp) SecurityUtil.getUserDetails();
    }
}
