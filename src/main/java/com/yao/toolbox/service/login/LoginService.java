package com.yao.toolbox.service.login;

import com.yao.toolbox.pojo.ResponseMessage;
import com.yao.toolbox.pojo.User;
import com.yao.toolbox.pojo.security.UserDetailsImp;
import org.springframework.security.core.userdetails.UserDetails;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

public interface LoginService {

    ResponseMessage<Map<String, String>> login(String username, String password);

    ResponseMessage<String> logout(HttpServletRequest request);

    ResponseMessage<String> register(User user);

    UserDetailsImp getUserDetails();

}
