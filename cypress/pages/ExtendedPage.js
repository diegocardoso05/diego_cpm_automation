class ExtendedPage {

    fillExtended(vehicle) {

        cy.get('#extended-plan h3').should('have.text', 'Step 2')
        cy.get('.first-info > .field-vehicle > .field').should('have.value', vehicle.VehicleName)

        cy.get('.field-protection > .button-wrapper > .field').click()
        cy.contains('.field-protection > .list-wrapper ul li', vehicle.extendePlan.Protection).click()

        cy.get('.field-years > .button-wrapper > .field').click()
        cy.contains('.field-years > .list-wrapper ul li', vehicle.extendePlan.Yeas).click()

        cy.get('.field-miles > .button-wrapper > .field').click()
        cy.contains('.field-miles > .list-wrapper ul li', vehicle.extendePlan.Miles).click()

        cy.get('.field-deductible > .button-wrapper > .field').click()
        cy.contains('.field-deductible > .list-wrapper ul li', vehicle.extendePlan.Deductible).click()

        
        cy.get('.first-info > .field-cents-per-mile > .field').should('have.value', vehicle.extendePlan.Cents)
        cy.get('.first-info > .field-service-contract-price > .field').should('have.value', vehicle.extendePlan.Contract)

                        
        
       

    }

}

export default new ExtendedPage;