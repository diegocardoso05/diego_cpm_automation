
import vehicle from '../pages/VehiclePage'
import extendedPage from '../pages/ExtendedPage'
import maintenancePage from '../pages/MaintenancePage';
import dataPage from '../pages/DataPage';
import finishPage from '../pages/FinishPage';
import basePage from '../pages/BasePage';
import dataFactory from '../factories/DataFactory';
import dealerPage from '../pages/DealerPage';

const vehicles = dataFactory.loadInfo().vehicles
describe('Vehicle Page', () => {


    it('Vehicle', () => {
        vehicle.fillVehicle(vehicles[0])
    });

    it('Extend Service Plan', () => {

        vehicle.fillVehicle(vehicles[0])
        basePage.submit()
        extendedPage.fillExtended(vehicles[0])

    });

    it('Maintenance Plan', () => {

        vehicle.fillVehicle(vehicles[0])
        basePage.submit()
        extendedPage.fillExtended(vehicles[0])
        basePage.submit()
        maintenancePage.fillMaintenance(vehicles[0])
    });

    it('Date Quick Quote', () => {

        vehicle.fillVehicle(vehicles[0])
        basePage.submit()
        extendedPage.fillExtended(vehicles[0])
        basePage.submit()
        maintenancePage.fillMaintenance(vehicles[0])
        basePage.submit()
        dataPage.fillData(vehicles[0])
    });

    vehicles.forEach(x => {
        it('Quick Quote/PDF', () => {

            dealerPage.configSettings(vehicles[0]);
            vehicle.fillVehicle(vehicles[0])
            basePage.submit()
            extendedPage.fillExtended(vehicles[0])
            basePage.submit()
            maintenancePage.fillMaintenance(vehicles[0])
            basePage.submit()
            dataPage.fillData(vehicles[0])
            basePage.submit()
            finishPage.shuldBeQuickQuote()

        });
    });

});

