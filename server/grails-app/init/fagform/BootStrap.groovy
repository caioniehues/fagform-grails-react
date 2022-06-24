package fagform

import grails.gorm.transactions.Transactional

class BootStrap {

    def init = { servletContext ->
        addTestUser()
    }
    def destroy = {
    }

    @Transactional
    void addTestUser() {
        def adminRole = new Role(authority: 'ROLE_ADMIN').save()
        def userRole = new Role(authority: 'ROLE_USER').save()

        def testUser = new Usuario(username: 'caio@admin.com', password: 'senha', nomeCompleto: 'Caio Cesar Niehues').save()
        def testUser2 = new Usuario(username: "matheus", password: "123").save()

        def userNormal = new Usuario(username: "dhieizi@usuario.com", password: "senha", nomeCompleto: "Dhieizi Welter").save()

        userNormal.save()

        testUser2.save()
        testUser.save()

        UserRole.create testUser, adminRole
        UserRole.create userNormal, userRole

        UserRole.create(testUser2, adminRole)

        UserRole.withSession {
            it.flush()
            it.clear()
        }

//        assert Usuario.count() == 2
//        assert Role.count() == 1
//        assert UserRole.count() == 2
    }


}
