package com.yao.toolbox.service.security;

import com.yao.toolbox.pojo.User;
import com.yao.toolbox.pojo.security.UserDetailsImp;
import com.yao.toolbox.service.TokenService;
import com.yao.toolbox.service.redis.RedisCache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtAuthenticationTokenFilter extends OncePerRequestFilter {

    @Autowired
    private TokenService tokenService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String token = request.getHeader("token");

        if (token == null) {
            doFilter(request, response, filterChain);
            return;
        }

        UserDetailsImp userDetails = tokenService.getLoginUser(request);

        if (userDetails == null) {
            doFilter(request, response, filterChain);
            return;
        }

        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

        SecurityContextHolder.getContext().setAuthentication(authenticationToken);

        doFilter(request, response, filterChain);
    }

}
