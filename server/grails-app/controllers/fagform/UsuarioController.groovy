package fagform


import grails.rest.*
import grails.converters.*

class UsuarioController {
	static responseFormats = ['json']
	
    def cadastrarNovoUsuario() {
        def Object novoUsuario = request.JSON
        print(novoUsuario)
        def testUser = new Usuario(username: novoUsuario.username,
                password: 'senha',
                nomeCompleto: 'Caio Cesar Niehues')
                .save()

        UserRole.create(testUser, UserRole.findById(2))



    }
}
