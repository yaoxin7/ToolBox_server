package com.yao.toolbox;

import com.yao.toolbox.enums.ContentType;
import com.yao.toolbox.pojo.Menu;
import org.junit.jupiter.api.Test;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.LinkedHashSet;

public class test {

    @Test
    public void test01() {
        System.out.println(ContentType.valueOf("MARKDOWN"));
    }

    @Test
    public void test02() {
        String fileName = "yao.txt";
        String[] split = fileName.split("\\.");
        String newFileName = split[0] + "_" + System.currentTimeMillis() + "." + split[1];
        System.out.println(newFileName);
    }

    @Test
    public void test03() {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        String encode = encoder.encode("123456");
        System.out.println(encode);
    }

    @Test void test04() {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        boolean matches = encoder.matches("123456", "$2a$10$8c0H899zPclDAn3q.93nOubqfF6ruaQDUiBHRSdlnsum603CHFvnK");
        System.out.println(matches);
    }

}
