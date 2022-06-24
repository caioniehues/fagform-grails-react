package fagform

class Interacao {

    private static final long serialVersionUID = 1
    String obervacao
    Date data = new Date()
    Usuario usuario
    String status
    static belongsTo = [pessoa : Pessoa]


    static constraints = {
//        historico nullable: true
    }

    static mapping = {
        id generator: 'identity'
    }
}
