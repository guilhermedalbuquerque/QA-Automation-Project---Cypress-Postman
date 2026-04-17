// Criação de Classe para teste de criação de usuário.
import { createUser } from "../support/api/userApi"
describe('API - Criar Usuário' , () => {
    // Função para testar a criação de usuário pelo método "POST" HTTP.

    it ('deve criar um usuário', () => {


        cy.fixture('user').then((data) => {
            
            // Faz a requisição HTTP
            createUser(data.createUser).then((response) => {
                expect(response.status).to.eq(201)
                expect(response.body.name).to.eq(data.createUser.name)
                expect(response.body.job).to.eq(data.createUser.job)
            })
        })

        
        
    })
})