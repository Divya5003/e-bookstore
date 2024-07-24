package com.example.ebookstore.controller;

import com.example.ebookstore.model.User;
import com.example.ebookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {
    @Autowired
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/add")
    public User add(@RequestBody User user){
        return userService.add(user);
    }

    @GetMapping("/get-all")
    public List<User> getAll(){
        return userService.getAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<User> get(@PathVariable long id){
        User user;
        user = userService.getById(id);
        return ResponseEntity.ok(user);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> update(@PathVariable long id, @RequestBody User user){
        user = userService.update(id, user);
        return ResponseEntity.ok(user);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> delete(@PathVariable long id){
        boolean deleted;
        deleted = userService.delete(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }
}
