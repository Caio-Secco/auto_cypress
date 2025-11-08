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

context('Cadastro incorreto', () => {
    it('Deve incluir dados incorretos e ser vísivel as mensagens de erro ao usuário', () => {
        cy.get('[href="/cadastro"]').click();
        cy.get('.sc-bcXHqe').click();
        cy.get('[data-test="inputNome"]').then(($input) => { //Verifica se a mensagem de erro ao não preencher o campo 'NOME'aparece
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
        cy.get('[data-test="inputNome"]').clear().type('Caio');
        cy.get('.sc-bcXHqe').click();
        cy.get('[data-test="inputCNPJ"]').then(($input) => { //Verifica se a mensagem de erro ao não preencher o campo 'CNPJ'aparece
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
        cy.get('[data-test="inputNome"]').clear().type('Caio');
        cy.get('[data-test="inputCNPJ"]').clear().type('12345678910');
        cy.get('.sc-bcXHqe').click();
        cy.get('[data-test="inputEmail"]').then(($input) => { //Verifica se a mensagem de erro ao não preencher o campo 'EMAIL'aparece
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
        cy.get('[data-test="inputNome"]').clear().type('Caio');
        cy.get('[data-test="inputCNPJ"]').clear().type('12345678910');
        cy.get('[data-test="inputEmail"]').clear().type('ss');
        cy.get('.sc-bcXHqe').click();
        cy.get('[data-test="inputEmail"]').then(($input) => { //Verifica se a mensagem de erro ao preencher o campo 'EMAIL'errado aparece
            expect($input[0].validationMessage).to.include('@')
        })
        cy.get('[data-test="inputNome"]').clear().type('Caio');
        cy.get('[data-test="inputCNPJ"]').clear().type('12345678910');
        cy.get('[data-test="inputEmail"]').clear().type('caio@teste.com');
        cy.get('.sc-bcXHqe').click();
        cy.get('[data-test="inputSenha"]').then(($input) => { //Verifica se a mensagem de erro ao não preencher o campo 'SENHA'aparece
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
        cy.get('[data-test="inputNome"]').clear().type('Caio');
        cy.get('[data-test="inputCNPJ"]').clear().type('12345678910');
        cy.get('[data-test="inputEmail"]').clear().type('caio@teste.com');
        cy.get('[data-test="inputSenha"]').clear().type('123')
        cy.get('.sc-bcXHqe').click();
        cy.get('[data-test="inputSenhaVerificada"]').then(($input) => { //Verifica se a mensagem de erro ao não preencher o campo 'SENHA CONFIRMAÇÃO'aparece
            expect($input[0].validationMessage).to.eq('Preencha este campo.')
        })
    })
})

})
