// Criação de Classe para teste para a atualização de usuário.
import { updateUser } from "../support/api/userApi";

describe('API - Atualizar usuário', () => {
    it('deve atualizar um usuário', () => {
        cy.fixture('user').then((data) => {    
            const Id = 2
            

            updateUser(Id,data.updateUser).then((response) => {
                // Validar atualização de código, dados e estrutura de objeto atualizado.
                expect(response.status).to.eq(200)
                expect(response.body.name).to.eq(data.updateUser.name)
                expect(response.body.job).to.eq(data.updateUser.job)
                expect(response.body).to.have.property('updatedAt')
            })
        })
        
    })
})