package com.example.ebookstore.service;

import com.example.ebookstore.model.User;

import java.util.HashMap;
import java.util.List;

public interface UserService {
    User add(User user);

    List<User> getAll();

    User getById(long id);

    User update(long id, User user);

    boolean delete(long id);
}
