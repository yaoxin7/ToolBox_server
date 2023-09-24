package com.yao.toolbox.mapper;

import com.yao.toolbox.pojo.Menu;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Set;

@SpringBootTest
public class MenuMapperTest {

    @Autowired
    private MenuMapper menuMapper;

    @Test
    public void getPermsByUserIdTest() {
        Set<String> set = menuMapper.getPermsByUserId(2L);
        set.forEach(System.out::println);
    }

}
