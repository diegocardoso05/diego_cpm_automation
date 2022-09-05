class BasePage {

    submit(){
        cy.get('.fds-button').click()
    }

}

export default new BasePage;