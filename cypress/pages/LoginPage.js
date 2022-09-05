import loginFactory from "../factories/LoginFactory"


class LoginPage {

    fillLogin() {

        var loginfill = loginFactory.loginfill()

        cy.visit('/')
        // cy.contains('.idpDescription span', 'Dealer, Supplier, Other Login')
        // cy.contains('.idpDescription span', 'Dealer, Supplier, Other Login').click()
        // cy.get('.headerbar span').should('have.text', 'Web Single Sign-On')
        // cy.get('#userName').type(loginfill.id)
        // cy.get('#password').type(loginfill.pwd)
        // cy.get('#btn-sign-in').click()

        cy.get('.name').should('have.text', " Tracy Groves ")
        cy.wait(3000)
    }

}

export default new LoginPage;