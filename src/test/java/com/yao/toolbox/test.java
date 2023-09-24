package com.yao.toolbox;

import com.yao.toolbox.enums.ContentType;
import org.junit.jupiter.api.Test;

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

}
