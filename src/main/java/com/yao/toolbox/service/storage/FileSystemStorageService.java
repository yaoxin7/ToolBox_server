package com.yao.toolbox.service.storage;

import com.yao.toolbox.utils.FileNameUtils;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Date;

public class FileSystemStorageService implements StorageService {

    // TODO: 文件存储的基础路径
    private Path rootLocation;

    public FileSystemStorageService(StorageServiceProperties properties) {
        this.rootLocation = Paths.get(properties.getLocationRoot());
    }

    // TODO: 1. 返回文件基于rootLocation的相对路径
    @Override
    public String store(MultipartFile file) {
        if (file.isEmpty())
            throw new RuntimeException("Failed to store empty file " + file.getOriginalFilename());

        try {
            String newFileName = FileNameUtils.getNewFileName(file.getOriginalFilename());

            Path resolve = rootLocation.resolve(Paths.get(newFileName));
            if (resolve.toFile().exists())
                throw new RuntimeException("File already exists " + file.getOriginalFilename());

            InputStream inputStream = file.getInputStream();
            Files.copy(inputStream, resolve, StandardCopyOption.REPLACE_EXISTING);
            inputStream.close();
            return resolve.getFileName().toString();
        } catch (Exception e) {
            throw new RuntimeException("文件存储失败", e);
        }
    }

    @Override
    public Path load(String filename) {
        return rootLocation.resolve(filename);
    }

    @Override
    public Resource loadAsResource(String filename) {
        Path file = load(filename);
        try {
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable())
                return resource;
            else
                throw new RuntimeException("Could not read file: " + filename);
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void deleteAll() {

    }

    @Override
    public void delete(String filename) {
        Path path = Paths.get(filename);
        File file = path.toFile();

        boolean success = true;
        if (file.exists())
            success = file.delete();

        if (!success) {
            throw new RuntimeException("Failed to delete file: " + filename);
        }
    }
}
