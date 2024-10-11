package com.example.todolist.exception;

import org.springframework.web.bind.annotation.RestControllerAdvice;

public class IdNotFoundException extends Exception{
    public IdNotFoundException(String errorMessage){
        super(errorMessage);
    }
}
