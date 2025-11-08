Cypress.Commands.add('login', (email, senha) => {
    cy.visit('/login')
    cy.get('[data-test="inputLoginEmail"]').type(email)
    cy.get('[data-test="inputLoginSenha"]').type(senha, { log: false })
    cy.get('[data-test="botaoTeste"]').should('be.visible').click()

})


Cypress.Commands.add('cadastraEspecialista', (nome, email, senha, especialidade, crm, imagem, cep, rua, numero, complemento, estado) => {
    cy.visit('/dashboard')
    cy.contains('Cadastrar especialista').should('be.visible').click()
    cy.get('[data-test="inputEspecialistaNome"]').type(nome)
    cy.get('[data-test="inputEspecialistaEmail"]').type(email)
    cy.get('[data-test="inputEspecialistaSenha"]').type(senha)
    cy.get('[data-test="inputEspecialistaSenhaVerificada"]').type(senha)
    cy.get('[data-test="inputEspecialistaEspecialidade"]').type(especialidade)
    cy.get('[data-test="inputEspecialistaCRM"]').type(crm)
    cy.get('[data-test="inputEspecialistaImagem"]').type(imagem)
    cy.get('[data-test="inputEspecialistaCEP"]').type(cep)
    cy.get('[data-test="inputEspecialistaRua"]').type(rua)
    cy.get('[data-test="inputEspecialistaNumero"]').type(numero)
    cy.get('[data-test="inputEspecialistaComplemento"]').type(complemento)
    cy.get('[data-test="inputEspecialistaEstado"]').type(estado)

})

Cypress.Commands.add('cadastro_Login', (nome, cpf, email, senha, senha_verificada, telefone, cep, rua, numero, complemento, estado) => {
    cy.get('[href="/cadastro"]').click();
    cy.get('[data-test="inputNome"]').type(nome);
    cy.get('[data-test="inputCNPJ"]').type(cpf);
    cy.get('[data-test="inputEmail"]').type(email);
    cy.get('[data-test="inputSenha"]').type(senha);
    cy.get('[data-test="inputSenhaVerificada"]').type(senha_verificada);
    cy.get('.sc-bcXHqe').click();
    cy.get('[data-test="inputTelefone"]').type(telefone);
    cy.get('[data-test="inputCEP"]').type(cep);
    cy.get('[data-test="inputRua"]').type(rua);
    cy.get('[data-test="inputNumero"]').type(numero);
    cy.get('[data-test="inputComplemento"]').type(complemento);
    cy.get('[data-test="inputEstado"]').type(estado);
    cy.get('.sc-bcXHqe').click()
})






