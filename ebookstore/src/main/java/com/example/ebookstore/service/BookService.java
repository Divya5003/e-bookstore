package com.example.ebookstore.service;

import com.example.ebookstore.model.Book;

import java.util.List;

public interface BookService {
    Book add(Book book);

    List<Book> getAll();

    Book getById(long id);

    Book update(long id, Book book);

    boolean delete(long id);
}
