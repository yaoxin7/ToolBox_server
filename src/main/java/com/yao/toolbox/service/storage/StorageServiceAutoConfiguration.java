package com.yao.toolbox.service.storage;

import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(StorageServiceProperties.class)
public class StorageServiceAutoConfiguration {

    @Bean
    public StorageService storageService(StorageServiceProperties properties) {
        return new FileSystemStorageService(properties);
    }

}
