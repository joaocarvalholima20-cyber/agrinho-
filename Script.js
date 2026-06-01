package com.agro.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class SiteController {

    // Rota que serve a página inicial (index.html)
    @GetMapping("/")
    public String index() {
        return "index";
    }

    // Rota que recebe o formulário de contato enviado via POST
    @PostMapping("/enviar-contato")
    public String receberContato(
            @RequestParam("nome") String nome,
            @RequestParam("email") String email,
            @RequestParam("mensagem") String mensagem) {
        
        // Aqui você pode implementar a lógica para salvar no banco de dados
        // ou disparar um e-mail. Exemplo simples de log no console:
        System.out.println("--- Nova Mensagem de Contato ---");
        System.out.println("Nome: " + nome);
        System.out.println("E-mail: " + email);
        System.out.println("Mensagem: " + mensagem);

        // Redireciona o usuário de volta para a home após o envio bem-sucedido
        return "redirect:/?sucesso=true";
    }
}
