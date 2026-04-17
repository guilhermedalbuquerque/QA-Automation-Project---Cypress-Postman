// Criação de Classe para teste de exclusão de usuário.
import { deleteUser } from "../support/api/userApi";

describe('API - Deletar usuário', () => {
    it('deve deletar um usuário', () =>{
        const Id =2
        deleteUser(Id).then((response) => {
            // Valida código de exclusão HTTP (204).
            expect (response.status).to.eq(204)

        })
    })
})