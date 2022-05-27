package myapp

class Pessoa {

    String nomeCompleto

    Historico historico

    String email

    String telefone

    Curso curso

    String cidade

    String observacao

    static constraints = {
        nomeCompleto(nullable: false)
        telefone(nullable: false)
        curso(nullable: false)
        estado(nullable: false)
        cidade(nullable: false)
    }
}
