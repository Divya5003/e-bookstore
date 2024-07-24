package com.example.ebookstore.controller;

import com.example.ebookstore.model.Book;
import com.example.ebookstore.model.User;
import com.example.ebookstore.service.BookService;
import com.example.ebookstore.service.UserService;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.ProjectedPayload;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

@RestController
@RequestMapping("/")
@CrossOrigin("http://localhost:3000/")
public class CombinedController {
    @Autowired
    private final UserService userService;

    @Autowired
    private final BookService bookService;

    public CombinedController(UserService userService, BookService bookService) {
        this.userService = userService;
        this.bookService = bookService;
    }

    @PutMapping("/add-to-cart/{id}/{bookId}")
    public ResponseEntity<HashMap<Long, Long>> addToCart(@PathVariable long id, @PathVariable long bookId){
        Book book = bookService.getById(bookId);
        if(book != null && book.getStock() != 0){
            User user = userService.getById(id);
            HashMap<Long, Long> cart = user.getCart();
            if(cart == null){
                cart = new HashMap<>();
            }
            cart.put(bookId, 1L);
            user.setCart(cart);
            userService.update(id, user);
            return ResponseEntity.ok(cart);
        }

        return null;
    }

    @PutMapping("/increase/{id}/{bookId}")
    public ResponseEntity<HashMap<Long, Long>> increase(@PathVariable long id, @PathVariable long bookId){
        User user = userService.getById(id);
        HashMap<Long, Long> cart = user.getCart();
        long count = cart.get(bookId);
        cart.put(bookId, count + 1);
        user.setCart(cart);
        userService.update(id, user);

        return ResponseEntity.ok(cart);
    }

    @PutMapping("/decrease/{id}/{bookId}")
    public ResponseEntity<HashMap<Long, Long>> decrease(@PathVariable long id, @PathVariable long bookId){
        User user = userService.getById(id);
        HashMap<Long, Long> cart = user.getCart();
        long count = cart.get(bookId);
        if(count > 1) {
            cart.put(bookId, count - 1);
            user.setCart(cart);
            userService.update(id, user);
        }

        return ResponseEntity.ok(cart);
    }

    @PutMapping("/purchase/{id}/{quantity}")
    public ResponseEntity<Map<String, Long>> purchase( @PathVariable long id, @PathVariable long quantity){
        Book book = bookService.getById(id);
        long count = book.getStock();
        long purchased = 0;
        long amount = 0;
        if(count >= quantity){
            book.setStock(count - quantity);
            bookService.update(id, book);
            amount = book.getPrice()*quantity;
            purchased = quantity;
        }

        Map<String, Long> response = new HashMap<>();
        response.put("purchased", purchased);
        response.put("amount", amount);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/purchase-cart/{id}")
    public ResponseEntity<Map<String, Long>> purchaseCart( @PathVariable long id){
        User user = userService.getById(id);
        HashMap<Long, Long> cart = user.getCart();
        long purchased = 0;
        long total = 0;
        for(long bookId : cart.keySet()){
            Book book = bookService.getById(bookId);
            long count = book.getStock();
            long quantity = cart.get(bookId);
            if(count >= quantity){
                purchased = 1;
            }
            else{
                purchased = 0;
                break;
            }
        }

        if(purchased == 1){
            for(long bookId : cart.keySet()){
                Book book = bookService.getById(bookId);
                long count = book.getStock();
                long quantity = cart.get(bookId);
                book.setStock(count - quantity);
                total += book.getPrice()*quantity;
                bookService.update(bookId, book);
            }
            cart.clear();
            user.setCart(cart);
            userService.update(id, user);
        }

        Map<String, Long> response = new HashMap<>();
        response.put("purchased", purchased);
        response.put("amount", total);
        return ResponseEntity.ok(response);
    }
}
