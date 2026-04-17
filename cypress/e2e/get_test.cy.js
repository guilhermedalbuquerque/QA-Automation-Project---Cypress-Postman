// Criação de Classe para teste de requisição de usuário.
import { getUser } from "../support/api/userApi";

describe ('API - Selecionar usuário', () =>{
    it ('deve selecionar lista de usuários', ()=> {
        getUser().then((response) => {
            
            // Validar status-code (200)
            expect(response.status).to.eq(200)

            // Validar a estrutura.
            expect(response.body).to.have.property('data')

            expect(response.body).to.include.all.keys(
                'page',
                'per_page',
                'total',
                'total_pages',
                'data'
                )

            expect(response.body.data).to.be.an('array')

            // Validando a lista, verificando se não está vazia.
            expect(response.body.data.length).to.be.greaterThan(0)

            // Validando um usuário.
            response.body.data.forEach((user) => {
                expect (user).to.include.all.keys("id","email",'first_name','last_name',"avatar")

                //Validando estrutura do email.
                expect(user.email).to.include("@")
            });

            


        }
        
        )
    })
})