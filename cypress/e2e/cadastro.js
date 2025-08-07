import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CadastroUsuario from '../pages/cadastro_usuario';

const cadastroUsuario = new CadastroUsuario();
beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
});


Given('que o usuário está na página de cadastro em um dispositivo móvel', () => { 
  cadastroUsuario.acessoCadastroPage();
  cadastroUsuario.viewportSize();
  
});

When('ele preenche todos os dados obrigatórios corretamente', () => {
  cadastroUsuario.cadastroUsuario('Ana', 'Silva', 'Senha131*')
  
});

When('clica no botão de cadastrar', () => {
  cadastroUsuario.clicarBotaoCadastrar();
});

Then('o sistema é redirecionado para outra página', () => {
  cy.contains('Estamos quase lá...').should('be.visible');
});

Then('o sistema deve mostrar uma mensagem de envio de verificação para o e-mail', () => {
  cy.contains('O link ficará ativo por 24 horas.').should('be.visible');
});
