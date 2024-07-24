package com.example.ebookstore.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String author;
    private String genre;
    private String description;
    private long stock;
    private long price;

    private String bokurl;
}
