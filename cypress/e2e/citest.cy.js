describe('test user ', () => {
  it('register user valide', () => {
    //Arrange (config)
    cy.visit('http://127.0.0.1:8000/user/register')
    const message = "Le compte : test3@test.com a été ajouté en BDD"

    //Act (scénario)
    cy.get('[name="firstname"]').type("Mathieu")
    cy.get('[name="lastname"]').type("Mithridate")
    cy.get('[name="email"]').type("test3@test.com")
    cy.get('[name="password"]').type("1234")
    cy.get('[name="submit"]').click()

    //assert
    cy.get(".error").contains(message)

  })
  it('register user doublon', () => {
    //Arrange (config)
    cy.visit('http://127.0.0.1:8000/user/register')
    const message = "Le compte existe déja"

    //Act (scénario)
    cy.get('[name="firstname"]').type("Mathieu")
    cy.get('[name="lastname"]').type("Mithridate")
    cy.get('[name="email"]').type("test3@test.com")
    cy.get('[name="password"]').type("1234")
    cy.get('[name="submit"]').click()

    //assert
    cy.get(".error").contains(message)

  })
  
})