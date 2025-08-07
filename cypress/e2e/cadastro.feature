Feature: Cadastro de usuário em dispositivos móveis

Scenario: Usuário realiza cadastro com sucesso no mobile
    Given que o usuário está na página de cadastro em um dispositivo móvel
    When ele preenche todos os dados obrigatórios corretamente
    And clica no botão de cadastrar
    Then o sistema é redirecionado para outra página
    And o sistema deve mostrar uma mensagem de envio de verificação para o e-mail
    

