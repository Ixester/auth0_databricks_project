```markdown
# Auth0 + Databricks Integration Project

Este projeto demonstra como configurar um sistema de autenticação usando Auth0 e integração com Databricks. Ele inclui um frontend em React para autenticação de usuários e um backend em Node.js com Express para gerenciar a autenticação JWT e a integração com Databricks.

## Estrutura do Projeto

```
auth0_databricks_project/
│
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── routes/
│   │   │   ├── protected.js
│   │   │   └── databricks.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── auth/
│   │       ├── AuthProvider.js
│   │       ├── ProtectedRoute.js
│   │       └── useAuth.js
│   ├── .env
│   ├── package.json
│   └── README.md
│
└── README.md
```

## Configuração do Projeto

### 1. Configuração do Backend

1. **Clone o repositório e navegue até o diretório `backend`:**

    ```bash
    git clone https://github.com/seu-usuario/auth0-databricks-project.git
    cd auth0_databricks_project/backend
    ```

2. **Instale as dependências do projeto:**

    ```bash
    npm install
    ```

3. **Configurar as variáveis de ambiente:**

   Crie um arquivo `.env` no diretório `backend` com as seguintes variáveis:

    ```bash
    AUTH0_DOMAIN=your-auth0-domain
    AUTH0_AUDIENCE=your-auth0-api-audience
    DATABRICKS_HOST=your-databricks-workspace-url
    DATABRICKS_TOKEN=your-databricks-access-token
    ```

4. **Execute o backend:**

    ```bash
    npm start
    ```

### 2. Configuração do Frontend

1. **Navegue até o diretório `frontend`:**

    ```bash
    cd ../frontend
    ```

2. **Instale as dependências do projeto:**

    ```bash
    npm install
    ```

3. **Configurar as variáveis de ambiente:**

   Crie um arquivo `.env` no diretório `frontend` com as seguintes variáveis:

    ```bash
    REACT_APP_AUTH0_DOMAIN=your-auth0-domain
    REACT_APP_AUTH0_CLIENT_ID=your-auth0-client-id
    REACT_APP_AUTH0_AUDIENCE=your-auth0-api-audience
    ```

4. **Execute o frontend:**

    ```bash
    npm start
    ```

### 3. Testando o Sistema

- **Autenticação:** Acesse `http://localhost:3000` e use o botão "Log In" para autenticar via Auth0. Após a autenticação, o nome do usuário logado será exibido.
- **Rota Protegida:** Teste a rota protegida no backend acessando `http://localhost:3001/api/protected`. Isso requer um token JWT válido.
- **Integração com Databricks:** Acesse a rota `http://localhost:3001/api/databricks/query` para realizar uma consulta simples no Databricks.

## Notas Finais

Este projeto serve como um ponto de partida para integrar autenticação via Auth0 e operações de dados avançadas com Databricks em aplicações web. Ele pode ser expandido para incluir funcionalidades mais avançadas, como autorização baseada em papéis, manipulação de dados em larga escala, e muito mais.

```
