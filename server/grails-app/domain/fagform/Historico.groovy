package fagform

class Historico {

    Pessoa pessoa

    static hasMany = [interacoes : Interacao]

    static constraints = {
    }
}
