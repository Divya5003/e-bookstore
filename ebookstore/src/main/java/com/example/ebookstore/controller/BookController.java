package com.example.ebookstore.controller;

import com.example.ebookstore.model.Book;
import com.example.ebookstore.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/book")
@CrossOrigin
public class BookController {
    @Autowired
    public final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping("/add")
    public Book add(@RequestBody Book book){
        return bookService.add(book);
    }

    @GetMapping("/get-all")
    public List<Book> getAll(){
        return bookService.getAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<Book> get(@PathVariable long id){
        Book book;
        book = bookService.getById(id);
        return ResponseEntity.ok(book);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Book> update(@PathVariable long id, @RequestBody Book book){
        book = bookService.update(id, book);
        return ResponseEntity.ok(book);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Map<String, Boolean>> delete(@PathVariable long id){
        boolean deleted;
        deleted = bookService.delete(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }
}
