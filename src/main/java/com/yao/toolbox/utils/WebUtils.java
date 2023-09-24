package com.yao.toolbox.utils;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class WebUtils {

    public static void print(HttpServletResponse response, String data) throws IOException {
            response.setContentType("application/json;charset=utf-8");
            response.setCharacterEncoding("UTF-8");
            response.getWriter().print(data);
    }

}
