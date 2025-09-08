describe('test user ', () => {
  it('login user : valide', () => {
    //Arrange (config)
    cy.visit('http://127.0.0.1:8000/login')
    
    //Act (scénario)
    cy.get('[name="email"]').type("mathieu.mith@laposte.net")
    cy.get('[name="password"]').type("1234")
    cy.get('[name="submit"]').click()

    //assert
    cy.contains("Liste catégories").should("exist")

  })
  it('login user : email n\'existe pas', () => {
    //Arrange (config)
    cy.visit('http://127.0.0.1:8000/login')
    const message = "Les informations de connexion ne sont pas correctes"

    //Act (scénario)
    cy.get('[name="email"]').type("test@test.com")
    cy.get('[name="password"]').type("1234")
    cy.get('[name="submit"]').click()

    //assert
    cy.get(".error").contains(message)

  })
  it('login user : password incorrect', () => {
      //Arrange (config)
      cy.visit('http://127.0.0.1:8000/login')
      const message = "Les informations de connexion ne sont pas correctes"

      //Act (scénario)
      cy.get('[name="email"]').type("mathieu.mith@laposte.net")
      cy.get('[name="password"]').type("123456")
      cy.get('[name="submit"]').click()

      //assert
      cy.get(".error").contains(message)

  })
  it('login user : les champs ne sont pas tous remplis', () => {
      //Arrange (config)
      cy.visit('http://127.0.0.1:8000/login')
      const message = "Veuillez remplir les champs"

      //Act (scénario)
      cy.get('[name="submit"]').click()

      //assert
      cy.get(".error").contains(message)

  })
})
