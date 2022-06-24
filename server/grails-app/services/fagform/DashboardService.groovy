package fagform

import grails.gorm.transactions.Transactional

@Transactional
class DashboardService {

    def obtemPessoas(){
        def pessoas = Pessoa.findAll()
        List<Map> result = []
        pessoas.each {
            def map = [
                    'id' : it.id,
                    'data' : it.dataDeCadastro,
                    'curso' : it.curso.nome,
                    'nome_completo' : it.nomeCompleto,
                    'cidade' : it.cidade,
                    'telefone' : it.telefone,
                    'historico' : it.historico,
                    'email' : it.email,
                    'estado' : 'PR',
                    'observacao' : it.observacao
            ]
            result.add(map)
        }
        return result
    }

    def teste(){

    }
}
