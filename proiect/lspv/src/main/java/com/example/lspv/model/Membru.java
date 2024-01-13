package com.example.lspv.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "membru")
public class Membru {
    @Id
    @GeneratedValue
    private Long id;

    private String nume;

    private String prenume;

    private String email;

    private String telefon;

    @Column(nullable = true)
    private String cnp;

    private String rol;

    @Column(nullable = true)
    private Date data_nastere;

    private int an_aderare;

    @Column(nullable = true)
    private String parola;

    private boolean account;

    private boolean mentor;

    private boolean coordonator;

    private Double puncte;
}
