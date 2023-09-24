package com.yao.toolbox.mapper;

import com.yao.toolbox.pojo.Menu;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Set;


@Mapper
public interface MenuMapper {

    Set<String> getPermsByUserId(Long userId);

}
