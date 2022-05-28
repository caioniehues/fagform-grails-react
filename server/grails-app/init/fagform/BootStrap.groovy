package fagform

import grails.gorm.transactions.Transactional

class BootStrap {

    def init = { servletContext ->
//        addTestUser()
    }
    def destroy = {
    }

    @Transactional
    void addTestUser() {
        def adminRole = new Role(authority: 'ROLE_ADMIN').save()

        def testUser = new Usuario(username: 'caio@admin.com', password: 'senha', nomeCompleto: 'Caio Cesar Niehues').save()

        testUser.save()

        UserRole.create testUser, adminRole

        UserRole.withSession {
            it.flush()
            it.clear()
        }

        assert Usuario.count() == 1
        assert Role.count() == 1
        assert UserRole.count() == 1
    }
}
