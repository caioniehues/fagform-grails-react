package myapp

import fagform.User
import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class UserRoleSpec extends Specification implements DomainUnitTest<User.UserRole> {

    def setup() {
    }

    def cleanup() {
    }

    void "test something"() {
        expect:"fix me"
            true == false
    }
}
