class CadastroUsuario {
    selectorsList() {
    const selectorsList = {
        inputContainer: ".inputContainer",   // todos os campos de texto
        termoRadio: ".check-container", // os botões de aceitar termos
        botaoCadastrar: "[aria-label='Criar cadastro no site Lacrei Saúde']"     
    };
    return selectorsList;
    }

    viewportSize() {
    cy.viewport('iphone-x');
    }

    acessoCadastroPage() {
    cy.visit('/cadastro');
    }

    generateRandomEmail() {
    const timestamp = Date.now();
    return `usuario_${timestamp}@teste.com`;
    }

    cadastroUsuario(nome, sobrenome, senha) {
    const email = this.generateRandomEmail(); 

    const selectors = this.selectorsList();
    cy.get(selectors.inputContainer).eq(0).type(nome);
    cy.get(selectors.inputContainer).eq(1).type(sobrenome);
    cy.get(selectors.inputContainer).eq(2).type(email);
    cy.get(selectors.inputContainer).eq(3).type(email);
    cy.get(selectors.inputContainer).eq(4).type(senha);
    cy.get(selectors.inputContainer).eq(5).type(senha);

    cy.get(selectors.termoRadio).eq(0).click();
    cy.get(selectors.termoRadio).eq(1).click();
    }

    clicarBotaoCadastrar() {
        cy.get(this.selectorsList().botaoCadastrar).click();
    }
}

export default CadastroUsuario;
