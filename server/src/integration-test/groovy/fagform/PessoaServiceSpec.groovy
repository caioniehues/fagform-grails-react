package fagform

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import org.grails.datastore.mapping.core.Datastore
import org.springframework.beans.factory.annotation.Autowired
import spock.lang.Specification

@Integration
@Rollback
class PessoaServiceSpec extends Specification {

    PessoaService pessoaService
    @Autowired Datastore datastore

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Pessoa(...).save(flush: true, failOnError: true)
        //new Pessoa(...).save(flush: true, failOnError: true)
        //Pessoa pessoa = new Pessoa(...).save(flush: true, failOnError: true)
        //new Pessoa(...).save(flush: true, failOnError: true)
        //new Pessoa(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //pessoa.id
    }

    void cleanup() {
        assert false, "TODO: Provide a cleanup implementation if using MongoDB"
    }

    void "test get"() {
        setupData()

        expect:
        pessoaService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Pessoa> pessoaList = pessoaService.list(max: 2, offset: 2)

        then:
        pessoaList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        pessoaService.count() == 5
    }

    void "test delete"() {
        Long pessoaId = setupData()

        expect:
        pessoaService.count() == 5

        when:
        pessoaService.delete(pessoaId)
        datastore.currentSession.flush()

        then:
        pessoaService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Pessoa pessoa = new Pessoa()
        pessoaService.save(pessoa)

        then:
        pessoa.id != null
    }
}
