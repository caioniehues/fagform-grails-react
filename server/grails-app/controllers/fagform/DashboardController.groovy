package fagform

import grails.plugin.springsecurity.annotation.Secured
import grails.rest.*
import grails.converters.*

class DashboardController {
	static responseFormats = ['json']

    @Secured(['ROLE_ADMIN'])
    def index() {
        render "batata"
    }
}
