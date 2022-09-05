

class MaintenancePage {

    shuldBeQuickQuote() {


        cy.get('#finish-step h3').should('have.text', 'Step 5')  
        cy.get('.render-pdf').should('be.visible')
        

    }

}

export default new MaintenancePage;