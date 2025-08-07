### Desafio Técnico - QA | Lacrei Saúde

Este repositório contém a minha entrega para o desafio técnico da vaga de QA voluntário na Lacrei Saúde. O projeto contempla testes manuais e automatizados na **versão mobile**, com foco em **qualidade, acessibilidade, desempenho e documentação**.

### Como Rodar os Testes

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/lacrei-qa-desafio.git
cd lacrei-qa-desafio
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar os testes manualmente (via Cypress GUI)

```bash
npx cypress open
```
### 4. Rodar os testes automaticamente (modo headless)

```bash
npx cypress run
```

###  Documentação
Os arquivos e evidências do desafio foram organizados no Notion, incluindo:
  - Plano de Teste
  - Casos de Teste em Gherkin
  - Evidências (prints, vídeos e observações)
  - Registro de Bugs com impacto e sugestão de correção
🔗https://www.notion.so/246d196e174f803fb776fccc1545b282?v=246d196e174f81d9af65000c46a9fbea&source=copy_link

### Checklist de Segurança
### 🔐 Dados e Privacidade

[x] Todos os dados utilizados nos testes são **fictícios**, definidos manualmente em arquivos.

[x] Nenhuma informação pessoal real foi incluída nos testes, prints ou fixtures.

[x] Não há nenhuma simulação de envio de dados sensíveis (como CPF real, cartão de crédito, senhas reais).

### 🧪 Testes Automatizados

[x] Os testes automatizados foram criados com **Cypress + Cucumber** e são executados em modo **GUI** (`npx cypress open`) e **headless** (`npx cypress run`).

[x] Os testes são realizados em ambiente de staging, que simula o comportamento do ambiente de produção, mas sem afetar dados reais.

### ⚙️ GitHub Actions

[x] O projeto possui um arquivo de workflow (`.github/workflows/cypress-tests.yml`) que executa os testes automaticamente após cada `push` ou `pull_request`.

[x] O workflow é **simples e seguro**, sem comandos perigosos como `sudo`, `rm -rf`, etc.

[x] Não há uso de tokens ou senhas no workflow (e caso sejam necessários, serão protegidos via `GitHub Secrets`).

### 📄 Documentação

[x] O arquivo `README.md` explica como:
  - Instalar dependências
  - Rodar os testes manualmente (GUI)
  - Rodar os testes automaticamente (headless)
  - Entender a estrutura do projeto
  - Aplicar este checklist de segurança
    
