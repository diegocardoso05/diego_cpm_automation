import dataFactory from "../factories/DataFactory"

class DataPage {

    fillData(vehicle) {

    

        cy.get('#step-data h3').should('have.text', 'Step 4')
        cy.get('label[class*="fds-text-field"] > span[class="label"]').first().click().type(vehicle.BusinessName)

        cy.get('label[class*="fds-text-field"] > span[class="label"]').click().type(vehicle.quickQuote.Year)

        cy.get('h4.step-subtitle')
            .contains('Vehicle Information')
            .parent()
            .parent()
            .find('input[type="number"]')
            .click()
            .type(vehicle.quickQuote.NetCap)

        cy.get('h4.step-subtitle')
            .parent()
            .parent()
            .contains('Residual %')

        cy.get('.label')
            .contains('Residual %')
            .parent().find('input[type="number"]')
            .click()
            .type(vehicle.quickQuote.Residual)

        cy.get('.label')
            .contains('Customer Lease Rate')
            .parent().find('input[type="number"]')
            .click()
            .type(vehicle.quickQuote.LeaseRate)

        cy.get('.label')
            .contains('Customer Lease Term')
            .parent().find('input[type="number"]')
            .click()
            .type(vehicle.quickQuote.LeaseTerm)

        cy.get('.label')
            .contains('State Tax %')
            .parent().find('input[type="number"]')
            .click()
            .type(vehicle.quickQuote.StateTax)

    }

}

export default new DataPage;