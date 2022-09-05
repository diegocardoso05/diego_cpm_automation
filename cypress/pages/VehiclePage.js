
class VehiclePage {

    fillVehicle(vehicle) {
        
        cy.get('input[step]').type(vehicle.BusinessName, { force: true })
        cy.get('#G').check({ force: true })
        cy.get('form > .fds-dropdown > .button-wrapper > .field').click()
        cy.contains('.list li', vehicle.VehicleName).click()

        

    }

}

export default new VehiclePage;