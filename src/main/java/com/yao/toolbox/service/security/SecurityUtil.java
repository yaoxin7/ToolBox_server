package com.yao.toolbox.service.security;

import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityUtil {

    public static Object getUserDetails() {
        return SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    }

}
