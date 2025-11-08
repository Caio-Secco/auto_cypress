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
            cy.cadastro_Login('Caio', '12345678933', 'caio@teste.com', '123456', '123456', '4899662500', '89215050', 'Rua Brasil', '299', 'Casa de esquina', 'SC')
        })
    })

})
