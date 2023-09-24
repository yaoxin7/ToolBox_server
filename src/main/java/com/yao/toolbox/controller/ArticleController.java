package com.yao.toolbox.controller;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.yao.toolbox.enums.ArticleStatus;
import com.yao.toolbox.enums.ContentType;
import com.yao.toolbox.pojo.Article;
import com.yao.toolbox.pojo.Content;
import com.yao.toolbox.pojo.ResponseMessage;
import com.yao.toolbox.pojo.User;
import com.yao.toolbox.service.ArticleService;
import com.yao.toolbox.service.ContentService;
import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/server")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @Autowired
    private ContentService contentService;

    @Autowired
    private LoginController loginController;

    /*
    * TODO 1. 获取文章列表
    *      2. 请求地址"/server/articles"
    *      3. 请求方式：GET
    *      4. 开启分页
    *      5. 请求参数：
    *          ?current=1&size=10&search=XXX
    * */
    @GetMapping("/articles")
    public ResponseMessage<Page<Article>> getArticleList(Integer current, Integer size, String search) {
        ResponseMessage<Page<Article>> response;
        if (current == null || size == null) {
            response = new ResponseMessage<>(1, "获取文章列表失败");
            return response;
        }
//        Page<Article> page = articleService.getArticleList(current, size, null);
        Page<Article> page = articleService.searchArticle(current, size, search, null);
        response = new ResponseMessage<>(0, "获取文章列表成功", page);
        return response;
    }

    /*
    * TODO 查询指定用户的动态
    *  1. 请求地址："/server/articles/user"
    *  2. 请求方式：GET
    *  3. 开启分页
    * */
    @GetMapping("/articles/user")
    public ResponseMessage<Page<Article>> getUserArticleList(Integer user_id, Integer current, Integer size) {
        if (current == null || size == null)
            return new ResponseMessage<>(1, "获取文章列表失败");

        Page<Article> result = articleService.getArticleListByUserId(current, size, user_id);
        return new ResponseMessage<>(0, "获取文章列表成功", result);
    }

    /*
    * TODO 1. 获取”动态“详细内容
    *      2. 请求地址"/server/article"
    *      3. 请求方式：GET
    *      4. 请求参数：
    *           ?id=XXX
    * */
    @GetMapping("/article")
    public ResponseMessage<Map<String, String>> getArticle(@RequestParam("id") Long id) {
        LinkedHashMap<String, String> map = new LinkedHashMap<>();

        Article article = articleService.getOne(new QueryWrapper<Article>().eq("id", id));
        Content content = contentService.getArticle(id);

        if (content == null || article == null)
            return new ResponseMessage<>(1, "获取文章失败");

        if (article.getId() != null) {
            map.put("id", article.getId() != null ? article.getId().toString() : null);
        }
        map.put("title", article.getTitle());
        if (article.getUserId() != null) {
            map.put("user_id",article.getUserId().toString());
        }
        if (article.getCoverImageUrl() != null) {
            map.put("cover_image_url", article.getCoverImageUrl());
        }
        map.put("intro", article.getIntro());
        if (article.getStatus() != null) {
            map.put("status", article.getStatus().toString());
        }
        if (article.getCreateTime() != null) {
            map.put("create_time", article.getCreateTime().toString());
        }
        if (article.getUpdateTime() != null) {
            map.put("update_time", article.getUpdateTime().toString());
        }
        if (content.getType() != null) {
            map.put("type", content.getType().toString());
        }
        if (content.getDataUrl() != null) {
            map.put("data_url", content.getDataUrl());
        }


        return  new ResponseMessage<>(0, "获取文章成功", map);

    }


    /*
    * TODO: 1. 创建新的动态
    *       2. 请求地址:"/server/article"
    *       3. 请求方式:PUT
    *       4. 请求参数
    *           {
    *               "title": XXX,
    *               "cover_image_url": XXX,
    *               "intro": XXX,
    *               "status": XXX,
    *               "type": XXX,
    *               "data_url": XXX
    *           }
    * */
    @PutMapping ("/article")
    public ResponseMessage<Null> createArticle(@RequestBody Map<String, String> map, HttpSession session) {
        ResponseMessage<Null> response;

        ArticleStatus status = ArticleStatus.valueOf(map.get("status"));
        if (status != ArticleStatus.DRAFT && status != ArticleStatus.PUBLISHED) {
            return new ResponseMessage<>(1, "请选择正确的发布状态");
        }
        Date nowDate = new Date();
        Article article = new Article(
                null,
                loginController.getUser(session).getId(),
                map.get("title"),
                map.get("cover_image_url"),
                map.get("intro"),
                status,
                nowDate,
                nowDate
        );

        Content content = new Content(
                null,
                null,
                ContentType.valueOf(map.get("type")),
                map.get("data_url")
        );
        boolean b = articleService.createArticle(article, content);
        if (b) response = new ResponseMessage<>(0, "创建动态成功");
        else response = new ResponseMessage<>(1, "创建动态失败");

        return response;
    }

    /*
    * TODO 1. 修改动态
    *      2. 请求地址： ”/server/article
    *      3. 请求方式 POST
    *      4. 请求参数
    *           {
    *               "id": XXX,
    *               "title": XXX,
    *               "cover_image_url": XXX,
    *               "intro": XXX,
    *               "status": XXX,
    *               "type": XXX,
    *               "data_url": XXX
    *           }
    * */
    @PostMapping("/article")
    public ResponseMessage<Null> updateArticle(@RequestBody Map<String, String> map, HttpSession session) {

        ArticleStatus status = ArticleStatus.valueOf(map.get("status"));
        User user = loginController.getUser(session);
        if (status != ArticleStatus.DRAFT && status != ArticleStatus.PUBLISHED) {
            return new ResponseMessage<>(1, "请选择正确的发布状态");
        }
        Article article = new Article(
                Long.parseLong(map.get("id")),
                user.getId(),
                map.get("title"),
                map.get("cover_image_url"),
                map.get("into"),
                status,
                null,
                new Date()
        );
        Content content = new Content(
               null,
               article.getId(),
                ContentType.valueOf(map.get("type")),
                map.get("data_url")
        );
        boolean b = articleService.updateArticle(user, article, content);
        if (b)
            return new ResponseMessage<>(0, "修改成功");
        else return new ResponseMessage<>(1, "修改失败");
    }

    /*
    * TODO 1. 删除动态
    *      2. 请求地址： “/server/article
    *      3. 请求方式： delete
    *      4. 参数："article_id": XXX
    *
    * */
    @DeleteMapping("/article")
    public ResponseMessage<Null> deleteArticle(Long article_id, HttpSession session) {
        User user = loginController.getUser(session);
        if (article_id == null)
            return new ResponseMessage<>(1, "删除失败");
        Article article = new Article(
                article_id,
                user.getId(),
                null,
                null,
                null,
                null,
                null,
                null
        );
        Content content = new Content(
                null,
                article.getId(),
                null,
                null
        );
        if (articleService.deleteArticle(user, article, content)) {
            return new ResponseMessage<>(0, "删除成功");
        } else {
            return new ResponseMessage<>(1, "删除失败");
        }
    }
}
