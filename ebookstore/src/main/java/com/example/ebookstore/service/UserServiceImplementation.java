package com.example.ebookstore.service;

import com.example.ebookstore.model.User;
import com.example.ebookstore.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImplementation implements UserService{

    @Autowired
    private final UserRepository userRepository;

    public UserServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User add(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User getById(long id) {
        if(userRepository.findById(id).isPresent()) {
            User user = userRepository.findById(id).get();
            return user;
        }

        return null;
    }

    @Override
    public User update(long id, User user) {
        if(userRepository.findById(id).isPresent()) {
            User newUser = userRepository.findById(id).get();
            newUser.setUsername(user.getUsername());
            newUser.setPassword((user.getPassword()));
            newUser.setCart(user.getCart());

            userRepository.save(newUser);
            return user;
        }

        return null;
    }

    @Override
    public boolean delete(long id) {
        if(userRepository.findById(id).isPresent()) {
            User user = userRepository.findById(id).get();
            userRepository.delete(user);
            return true;
        }

        return false;
    }
}
