package fagform

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*

@Secured(['ROLE_ADMIN', 'ROLE_USER'])
class PessoaController {
	static responseFormats = ['json']

    PessoaService pessoaService

    def index() { }

    def cadastrarNovaPessoa(){
        Object novaPessoaRequestJson = request.JSON

        def novaPessoa = [
                nomeCompleto : novaPessoaRequestJson.nome as String,
                email : novaPessoaRequestJson.email as String,
                telefone : novaPessoaRequestJson.telefone as String,
                curso : novaPessoaRequestJson.curso as String,
                estado : novaPessoaRequestJson.estado as String,
                cidade : novaPessoaRequestJson.cidade as String,
                observacao : novaPessoaRequestJson.observacao as String
        ]

        Pessoa pessoaCadastrada = pessoaService.cadastrarNovaPessoa(novaPessoa)
        respond([pessoaCadastrada])
    }
}
