package com.yao.toolbox.config;

import com.yao.toolbox.service.storage.StorageServiceProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class SpringMvcConfig implements WebMvcConfigurer {

    @Autowired
    private StorageServiceProperties properties;

    /*@Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 放行登录，注册
        registry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/server/**", "/upload/**")
                .excludePathPatterns("/server/login", "/server/reg");

        WebMvcConfigurer.super.addInterceptors(registry);
    }*/

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/upload/**")
                .addResourceLocations("file:///" + properties.getLocationRoot());
        WebMvcConfigurer.super.addResourceHandlers(registry);
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 允许跨域访问的路径
                .allowedOrigins("http://localhost","http://localhost:5173", "http://192.168.137.1") // 允许跨域访问的源
                .allowCredentials(true)// 是否发送cookie
                .allowedMethods("POST", "GET", "PUT", "OPTIONS", "DELETE") // 允许请求方法
                .maxAge(168000) // 预检间隔时间
                .allowedHeaders("*"); // 允许头部设置
    }

    /*
    * TODO 适配vue-router Html5 History 模式
    * */

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html");
        WebMvcConfigurer.super.addViewControllers(registry);
    }
}
