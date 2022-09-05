
class MaintenancePage {

    fillMaintenance(vehicle) {


        cy.get('#maintenance-step h3').should('have.text', 'Step 3')
        cy.get('.first-info > .field-vehicle > .field').should('have.value', vehicle.VehicleName)

        cy.get('.first-info > :nth-child(2) > .button-wrapper > .field').click()
        cy.contains('.list-wrapper ul li', vehicle.maintenacePlan.ServiceInterval).click()

        cy.get('.field-years > .button-wrapper > .field').click()
        cy.contains('.field-years > .list-wrapper  li', vehicle.maintenacePlan.Years).click()

        cy.get('.field-miles > .button-wrapper > .field').click()
        cy.contains('.field-miles > .list-wrapper ul li', vehicle.maintenacePlan.Miles).click()

        cy.get('.first-info > .field-cents-per-mile > .field').should('have.value', vehicle.maintenacePlan.Cents)
        cy.get('.first-info > .field-service-contract-price > .field').should('have.value', vehicle.maintenacePlan.Contract)
        

    }

}

export default new MaintenancePage;