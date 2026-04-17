// Definição do método de criação de usuário via HTTP.

export const createUser = (payload) =>{
    return cy.request({
        method: 'POST',
        url: 'https://reqres.in/api/users',
        headers: {'x-api-key': Cypress.env('apiKey')},
        body: payload
    })
}

// Definição do método de requisição do usuário via HTTP.

export const getUser = () => {
    return cy.request({
        method: 'GET',
        url: 'https://reqres.in/api/users?page=2',
        headers: {'x-api-key': Cypress.env('apiKey')}

    })
}

// Definição do método de exclusão via HTTP.
export const deleteUser = (id) => {
    return cy.request({
        method: 'DELETE',
        url: `https://reqres.in/api/users/${id}`,
        headers: {'x-api-key': Cypress.env('apiKey')}
    })

}

// Definição do método de atualização via HTTP.
export const updateUser = (id,payload) => {
    return cy.request({
        method: 'PUT',
        url: `https://reqres.in/api/users/${id}`,
        headers: {'x-api-key': Cypress.env('apiKey')},
        body: payload
    })

}