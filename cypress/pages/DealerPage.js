

class DealerPage {

    configSettings(vehicle) {

        cy.get('.link').click()
        cy.get('.title-page').should('have.text', 'Dealer Settings')

        if (vehicle.MechanicalProfit > '0') {
            cy.get('.field-core-mechanical-profit > .field').click().type(vehicle.MechanicalProfit)
        }
        if (vehicle.MaintenanceProfit > '0') {
            cy.get('.field-maintenance > .field').click().type(vehicle.MaintenanceProfit)
        }
        if (vehicle.MechanicalReserve > '0') {
            cy.get('.field-core-mechanical > .field').click().type(vehicle.MechanicalReserve)
        }
        if (vehicle.MaintenanceReserve > '0') {
            cy.get('.field-maintenance > .field').click().type(vehicle.MaintenanceReserve)
        }
       
        cy.get('button[type="submit"]').click()
        cy.wait(3000)
    }

    descardChanges(){
        cy.get('button[type="button"]').click()
    }

}

export default new DealerPage;