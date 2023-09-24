package com.yao.toolbox.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.yao.toolbox.pojo.Content;

public interface ContentService extends IService<Content> {

    public Content getArticle(Long id);

    public boolean updateContentByArticleId(Long id, Content content);

    public boolean deleteContentByArticleId(Long id);
}
