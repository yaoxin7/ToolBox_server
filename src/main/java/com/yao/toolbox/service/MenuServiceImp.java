package com.yao.toolbox.service;


import com.yao.toolbox.mapper.MenuMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class MenuServiceImp implements MenuService {

    @Autowired
    private MenuMapper mapper;

    @Override
    public Set<String> getMenuByUserId(Long id) {
        return mapper.getPermsByUserId( id);
    }
}
