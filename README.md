# Tool box 后端文档

## 技术栈

-  Spring Boot

-  Mybatis Plus
 
-  MySQL
 
-  Redis

## 更新说明 2023年9月26日

- 使用token进行用户认证
- 使用redis进行缓存

- spring security进行安全控制

## 使用说明

```yaml
# application.yaml
server:
  port: 8080

# mysql数据库设置
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: 3096828266
    url: jdbc:mysql:///web_sql
  servlet: 
    multipart:
      max-file-size: 10MB # 文件上传大小限制

mybatis-plus:
  type-aliases-package: com.yao.toolbox.pojo

  global-config:
    db-config:
      id-type: AUTO

# 文件上传存储位置
storage:
  location-root: D:\upload\
```

### 其他

- redis默认配置

- 跨域请求配置：`com.yao.toolbox.config.SpringMvcConfig.addCorsMappings`

- mysql数据库结构：`/database/web_sql.sql`