package fagform

import org.grails.datastore.mapping.query.Query

class Pessoa {

    private static final long serialVersionUID = 1

    String nomeCompleto

    String email

    Date dataDeCadastro = new Date()

    String telefone

    String curso

    String cidade

    String estado

    static hasMany = [historico : Interacao]


    static constraints = {
        nomeCompleto(nullable: false)
        telefone(nullable: false)
        curso(nullable: false)
        cidade(nullable: false)
//        observacao nullable: true
    }

    static mapping = {
        id generator: 'identity'
    }


}
