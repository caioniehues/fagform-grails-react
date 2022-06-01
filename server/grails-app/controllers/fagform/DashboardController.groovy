package fagform

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*

class DashboardController {
	static responseFormats = ['json']

    @Secured(['ROLE_ADMIN'])
    def index() { // vai retornar todos TODO service para retornar JSON de teste

        render "batata"
    }

    @Secured('ROLE_ADMIN')
    def batata(){
        render 'teste de endpont'
    }

    def mostrarTodos(){
        
    }
}
