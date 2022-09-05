export default {

    loadInfo: function () {

        var data = {
            vehicles: [{
                MechanicalProfit: '0',
                MaintenanceProfit: '0',
                MechanicalReserve: '0',
                MaintenanceReserve: '0',
                BusinessName: 'Test1',
                Fuel: 'G',
                VehicleName: 'F-150 4X2',
                extendePlan: {
                    Protection: ' ExtraCARE ',
                    Yeas: '8',
                    Miles: '75000',
                    Deductible: '$0 Deductible',
                    Cents: '1.8¢',
                    Contract: '$1,370.00'
                },
                maintenacePlan: {
                    ServiceInterval: 'Gas/Hybrid/5,000',
                    Years: '8',
                    Miles: '75000',
                    Cents: '1.9¢',
                    Contract: '$1,445.00'

                },
                quickQuote: {
                    Year: '2017',
                    NetCap: '40000',
                    Residual: '30',
                    LeaseRate: '5',
                    LeaseTerm: '48',
                    StateTax: '6',
                    SityTax: '0',
                    CountyTax: '0',
                    OtherTax: '0'
                },

            },
            {
                MechanicalProfit: '0',
                MaintenanceProfit: '0',
                MechanicalReserve: '300',
                MaintenanceReserve: '500',
                BusinessName: 'Test2',
                Fuel: 'G',
                VehicleName: 'Fiesta',
                extendePlan: {
                    Protection: ' ExtraCARE ',
                    Yeas: '3',
                    Miles: '60000',
                    Deductible: '$0 Deductible',
                    Cents: '1.6¢',
                    Contract: '$985.00'
                },
                maintenacePlan: {
                    ServiceInterval: 'Gas/Hybrid/10,000',
                    Years: '3',
                    Miles: '60000',
                    Cents: '1.8¢',
                    Contract: '$1,095.00'

                },
                quickQuote: {
                    Year: '2018',
                    NetCap: '30000',
                    Residual: '20',
                    LeaseRate: '6',
                    LeaseTerm: '36',
                    StateTax: '5',
                    SityTax: '5',
                    CountyTax: '0',
                    OtherTax: '0'
                },

            }]

        }
        return data;
    }
}