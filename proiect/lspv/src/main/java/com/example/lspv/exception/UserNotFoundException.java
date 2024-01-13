package com.example.lspv.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("nu s-a gasit user-ul cu id-ul "+id);
    }
}
