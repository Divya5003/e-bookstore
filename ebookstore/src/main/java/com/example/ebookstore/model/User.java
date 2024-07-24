package com.example.ebookstore.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.HashMap;

@Data
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String username;
    private String password;
    private HashMap<Long, Long> cart;
}
