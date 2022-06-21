package fagform

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*
import org.grails.web.json.JSONArray

class DashboardController {
	static responseFormats = ['json']

    @Secured(['ROLE_ADMIN'])
    def index() { // vai retornar todos TODO service para retornar JSON de teste

        render "batata"
    }

    @Secured('ROLE_ADMIN')
    def batata(){

        def mapaDeRetorno = [
                chave : 'valor',
                mapa : 'é um mapa!!'
        ]

        respond (mapaDeRetorno)
    }

    def mostrarTodos(){
        
    }
}
