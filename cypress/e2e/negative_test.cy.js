const { getUser } = require("../support/api/userApi")

// Criação de Classe para teste de requisição de usuário.
describe('API - Teste de falha', () => {
    it('deve falhar pela API-KEY', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
           
           // Garantir a validação do erro manualmente, evitando que o cypress quebre o teste.
            failOnStatusCode: false 
        }).then((response) => {
            
            // Validar código e estrutura da mensagem de erro sem a API_KEY.
            expect(response.status).to.eq(401)
            expect(response.body.error).to.eq('missing_api_key')
        })
    })
})