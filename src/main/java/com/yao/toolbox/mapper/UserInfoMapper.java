package com.yao.toolbox.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yao.toolbox.pojo.UserInfo;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserInfoMapper extends BaseMapper<UserInfo> {
}
