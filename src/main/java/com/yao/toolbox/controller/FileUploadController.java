package com.yao.toolbox.controller;

import com.yao.toolbox.pojo.ResponseMessage;
import com.yao.toolbox.service.storage.StorageService;
import org.apache.ibatis.jdbc.Null;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/server")
public class FileUploadController {

    @Autowired
    private StorageService storageService;

    /*
    * TODO: 1.上传文件
    *       2.请求地址："/server/upload"
    *       3.请求方式：POST
    * */
    @PostMapping("/upload")
    public ResponseMessage<Map<String, String>> uploadFile(MultipartFile file) {
        ResponseMessage<Map<String, String>> response;
        try {
            String store = storageService.store(file);
            Map<String, String> map = new LinkedHashMap<>();
            map.put("url", store);
            response = new ResponseMessage<>(0, "上传文件成功",
                        map
                    );
        } catch (Exception e) {
            response = new ResponseMessage<>(-1, "上传文件失败");
        }
        return response;
    }




}
