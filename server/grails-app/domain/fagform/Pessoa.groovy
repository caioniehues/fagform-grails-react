package fagform

class Pessoa {

    String nomeCompleto

    static hasOne = [historico : Historico]

    String email

    String telefone

    Curso curso

    String cidade

    String observacao

    static constraints = {
        nomeCompleto(nullable: false)
        telefone(nullable: false)
        curso(nullable: false)
        historico unique: true
        cidade(nullable: false)
    }
}
