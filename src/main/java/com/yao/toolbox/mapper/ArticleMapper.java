package com.yao.toolbox.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.yao.toolbox.pojo.Article;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ArticleMapper extends BaseMapper<Article> {
}
