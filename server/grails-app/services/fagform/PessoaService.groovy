package fagform

import grails.gorm.transactions.Transactional
import grails.plugin.springsecurity.SpringSecurityService

@Transactional
class PessoaService {

    SpringSecurityService springSecurityService

    def cadastrarNovaPessoa(Map pessoaRequest) {
        def pessoa = new Pessoa(
                nomeCompleto: pessoaRequest.nomeCompleto,
                email: pessoaRequest.email,
                telefone: pessoaRequest.telefone,
                curso: pessoaRequest.curso,
                estado: pessoaRequest.estado,
                cidade: pessoaRequest.cidade
        ).addToHistorico(new Interacao(
                obervacao: pessoaRequest.observacao,
                status: "recém cadastrado",
                usuario: (Usuario) springSecurityService.getCurrentUser()
        )).save(failOnError: true, flush: true)
        return pessoa
    }
}
