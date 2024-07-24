package com.example.ebookstore.service;

import com.example.ebookstore.model.Book;
import com.example.ebookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImplementation implements BookService {
    @Autowired
    private final BookRepository bookRepository;

    public BookServiceImplementation(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public Book add(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    @Override
    public Book getById(long id) {
        if(bookRepository.findById(id).isPresent()) {
            return bookRepository.findById(id).get();
        }

        return null;
    }

    @Override
    public Book update(long id, Book book) {
        if(bookRepository.findById(id).isPresent()) {
            Book newBook = bookRepository.findById(id).get();
            newBook.setName(book.getName());
            newBook.setAuthor(book.getAuthor());
            newBook.setGenre(book.getGenre());
            newBook.setDescription(book.getDescription());
            newBook.setStock(book.getStock());
            newBook.setPrice(book.getPrice());

            bookRepository.save(newBook);
            return book;
        }

        return null;
    }

    @Override
    public boolean delete(long id) {
        if(bookRepository.findById(id).isPresent()) {
            Book book = bookRepository.findById(id).get();
            bookRepository.delete(book);
            return true;
        }

        return false;
    }
}
