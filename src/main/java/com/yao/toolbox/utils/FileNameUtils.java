package com.yao.toolbox.utils;

public class FileNameUtils {

    public static String getNewFileName(String fileName) {
        String[] split = fileName.split("\\.");
        int length = split.length;
        StringBuilder newFileName = new StringBuilder();
        for (int i = 0; i < length - 1; i ++) {
            if (i == length - 2) {
                newFileName.append(split[i]).append("_").append(System.currentTimeMillis()).append(".").append(split[i + 1]);
            } else {
                newFileName.append(split[i]).append(".");
            }
        }
        return newFileName.toString();
    }

}
