package com.yao.toolbox.service;

import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yao.toolbox.mapper.ContentMapper;
import com.yao.toolbox.pojo.Content;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContentServiceImp extends ServiceImpl<ContentMapper, Content> implements ContentService{

    @Autowired
    private ContentMapper contentMapper;

    @Override
    public Content getArticle(Long id) {
        QueryWrapper<Content> wrapper = new QueryWrapper<>();
        wrapper.eq("article_id", id);
        return contentMapper.selectOne(wrapper);
    }

    @Override
    public boolean updateContentByArticleId(Long id, Content content) {
        UpdateWrapper<Content> wrapper = new UpdateWrapper<>();
        wrapper.eq("article_id", id);
        return contentMapper.update(content, wrapper) > 0;
    }

    @Override
    public boolean deleteContentByArticleId(Long id) {
        QueryWrapper<Content> wrapper = new QueryWrapper<>();
        wrapper.eq("article_id", id);
        return contentMapper.delete(wrapper) > 0;
    }
}
