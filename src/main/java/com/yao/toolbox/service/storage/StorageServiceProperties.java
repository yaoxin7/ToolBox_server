package com.yao.toolbox.service.storage;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("storage")
public class StorageServiceProperties {

    private String locationRoot = "upload-dir";

    public String getLocationRoot() {
        return locationRoot;
    }

    public void setLocationRoot(String locationRoot) {
        this.locationRoot = locationRoot;
    }

}
