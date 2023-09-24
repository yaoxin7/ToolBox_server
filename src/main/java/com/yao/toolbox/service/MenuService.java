package com.yao.toolbox.service;

import java.util.Set;

public interface MenuService {
    Set<String> getMenuByUserId(Long id);
}
