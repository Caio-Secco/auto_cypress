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

    context('Cadastro do usuário', () => {
        it('Preenche os dados de cadastro e salvar, ser redirecionado á tela de cadastros técnicos e salvar, criando o cadastro do usuário.', () => {
            cy.get('[href="/cadastro"]').click();
            cy.get('[data-test="inputNome"]').type('Caio');
            cy.get('[data-test="inputCNPJ"]').type('12345678910');
            cy.get('[data-test="inputEmail"]').type('caio@teste.com.br');
            cy.get('[data-test="inputSenha"]').type('12345678');
            cy.get('[data-test="inputSenhaVerificada"]').type('12345678');
            cy.get('.sc-bcXHqe').click();
            cy.get('[data-test="inputTelefone"]').type('48996625001');
            cy.get('[data-test="inputCEP"]').type('215050');
            cy.get('[data-test="inputRua"]').type('Rua Brasil');
            cy.get('[data-test="inputNumero"]').type('299');
            cy.get('[data-test="inputComplemento"]').type('Casa de esquina');
            cy.get('[data-test="inputEstado"]').type('SC');
            cy.get('.sc-bcXHqe').click()

        })
    })

})
