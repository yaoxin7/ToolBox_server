package com.yao.toolbox.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.UpdateWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.yao.toolbox.enums.ArticleStatus;
import com.yao.toolbox.enums.ContentType;
import com.yao.toolbox.mapper.ArticleMapper;
import com.yao.toolbox.pojo.Article;
import com.yao.toolbox.pojo.Content;
import com.yao.toolbox.pojo.User;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
public class ArticleServiceImp extends ServiceImpl<ArticleMapper, Article> implements ArticleService{

    @Autowired
    private ArticleMapper articleMapper;

    @Autowired
    private ContentService contentService;

    @Override
    // TODO 按照更新时间进行排序
    public Page<Article> getArticleList(int current, int size, QueryWrapper<Article> queryWrapper) {
        Page<Article> page = new Page<>(current, size);
        if (queryWrapper == null) queryWrapper = new QueryWrapper<>();
        queryWrapper.orderByDesc("update_time");
        return articleMapper.selectPage(page, queryWrapper);
    }

    @Override
    public boolean createArticle(Article article, Content content) {
        if (articleMapper.insert(article) == 1) {
            content.setArticleId(article.getId());
            return contentService.save(content);
        }
        return false;
    }

    @Override
    public Page<Article> getArticleListByUserId(int current, int size, int user_id) {
        QueryWrapper<Article> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", user_id);
        return getArticleList(current, size, wrapper);
    }

    @Override
    @Transactional
    public boolean updateArticle(User user, Article article, Content content) {
        UpdateWrapper<Article> wrapper = new UpdateWrapper<>();
        wrapper.set(article.getTitle() != null, "title", article.getTitle())
                .set(article.getCoverImageUrl() != null, "cover_image_url", article.getCoverImageUrl())
                .set(article.getIntro() != null, "intro", article.getIntro())
                .set(article.getStatus() != null, "status", article.getStatus())
                .set( "update_time", new java.sql.Date(System.currentTimeMillis()))
                .eq("user_id", user.getId())
                .eq("id", article.getId());

        if (articleMapper.update(null, wrapper) < 1) return false;

        if (! contentService.updateContentByArticleId(content.getArticleId(), content))
            throw new RuntimeException("更新文章内容失败"); // TODO 失败回滚
         else
            return true;
    }

    @Override
    @Transactional
    public boolean deleteArticle(User user, Article article, Content content) {
        QueryWrapper<Article> wrapper = new QueryWrapper<>();
        wrapper.eq("user_id", user.getId())
                .eq("id", article.getId());
        if (articleMapper.delete(wrapper) < 1) return false;

        if (contentService.deleteContentByArticleId(content.getArticleId())) {
            return true;
        } else {
            throw new RuntimeException("删除文章内容失败"); // TODO 失败回滚
        }
    }

    @Override
    public Page<Article> searchArticle(int current, int size, String search, ContentType[] types) {
        QueryWrapper<Article> wrapper = new QueryWrapper<>();
        if (StringUtils.isNotBlank(search))
            wrapper.like("title", search);
        if (types != null && types.length > 0) {
            wrapper.in("type", types);
        }
        wrapper.eq("status", ArticleStatus.PUBLISHED);
        return getArticleList(current, size, wrapper);
    }
}
