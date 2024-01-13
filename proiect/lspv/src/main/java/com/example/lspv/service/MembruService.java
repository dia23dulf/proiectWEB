package com.example.lspv.service;

import com.example.lspv.model.Membru;
import com.example.lspv.repository.MembruRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MembruService {

    @Autowired
    private MembruRepository membruRepository;


    public boolean registerMembru(Membru membru) {
        Optional<Membru> existingMembru = membruRepository.findByEmail(membru.getEmail());

        if (existingMembru.isPresent()) {
            Membru foundMembru = existingMembru.get();
            foundMembru.setParola(membru.getParola());
            membruRepository.save(foundMembru);
            return true;
        } else {
            return false;
        }
    }

    public boolean autentificare(Membru membru) {
        Optional<Membru> existingMembru = membruRepository.findByEmail(membru.getEmail());

        return existingMembru.map(foundMembru -> verificaParola(membru.getParola(), foundMembru.getParola()))
                .orElse(false);
    }

    private boolean verificaParola(String parolaIntrodusa, String parolaStocata) {
     return parolaIntrodusa.equals(parolaStocata);
    }

    private boolean verificaEmail(String emailIntrodus, String emailStocat){
        return emailIntrodus.equals(emailStocat);
    }
}
