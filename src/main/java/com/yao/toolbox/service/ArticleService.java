package com.yao.toolbox.service;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.yao.toolbox.enums.ContentType;
import com.yao.toolbox.pojo.Article;
import com.yao.toolbox.pojo.Content;
import com.yao.toolbox.pojo.User;

public interface ArticleService extends IService<Article> {

    public Page<Article> getArticleList(int current, int size, QueryWrapper<Article> queryWrapper);

    public boolean createArticle(Article article, Content content);

    // TODO 获取指定用户的动态信息（分页）
    public Page<Article> getArticleListByUserId(int current, int size, int user_id);

    // TODO 修改动态
    public boolean updateArticle(User user, Article article, Content content);

    // TODO 删除动态
    public boolean deleteArticle(User user, Article article, Content content);

    // TODO 搜索动态，设置筛选, 限定只搜索已发布
    public Page<Article> searchArticle(int current, int size, String search, ContentType[] types);
}
