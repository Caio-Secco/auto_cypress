import {usuario} from '../fixtures/usuario.json'
describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    context('Testes na página de cadastro', () => {
        it('Clica no link "Cadastra-se" e redireciona para a página de cadastro da clínica', () => {
            cy.get('[href="/cadastro"]').click();
            cy.location('pathname').should('equal', '/cadastro')

        })
    })

    usuario.forEach(usuario => {
        it('Preenche os dados de cadastro e salvar, ser redirecionado á tela de cadastros técnicos e salvar, criando o cadastro do usuário.', () => {
            cy.get('[href="/cadastro"]').click();
            cy.get('[data-test="inputNome"]').type(usuario.name);
            cy.get('[data-test="inputCNPJ"]').type(usuario.cpf);
            cy.get('[data-test="inputEmail"]').type(usuario.email);
            cy.get('[data-test="inputSenha"]').type(usuario.senha);
            cy.get('[data-test="inputSenhaVerificada"]').type(usuario.senha);
            cy.get('.sc-bcXHqe').click();
            cy.get('[data-test="inputTelefone"]').type(usuario.telefone);
            cy.get('[data-test="inputCEP"]').type(usuario.cep);
            cy.get('[data-test="inputRua"]').type(usuario.rua);
            cy.get('[data-test="inputNumero"]').type(usuario.numero);
            cy.get('[data-test="inputComplemento"]').type(usuario.complemento);
            cy.get('[data-test="inputEstado"]').type(usuario.estado);
            cy.get('.sc-bcXHqe').click()

        })
    })

})
