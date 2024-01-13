package com.example.lspv.controller;

import com.example.lspv.model.Membru;
import com.example.lspv.repository.MembruRepository;
import com.example.lspv.service.MembruService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class MembruController {

    @Autowired
    private MembruService membruService;

    @Autowired
    private MembruRepository membruRepository;

    @PostMapping("/adaugamembru")
    Membru newMembru(@RequestBody Membru newMembru){
        return membruRepository.save(newMembru);
    }

    @GetMapping("/membrii")
    List<Membru> getAllMembrii(){
        return membruRepository.findAll();
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Membru membru){
        if(membruService.registerMembru(membru)){
            return ResponseEntity.ok("Înregistrare reușită");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Înregistrare eșuată");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Membru membru) {
        if (membruService.autentificare(membru)) {
            return ResponseEntity.ok("Autentificare reușită");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Autentificare eșuată");
        }
    }
}
