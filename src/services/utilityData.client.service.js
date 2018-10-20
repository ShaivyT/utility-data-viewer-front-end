import * as constants from '../constants'

let _singleton = Symbol();

class UtilityDataService {
    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Singleton!!!');
    }

    static get instance() {
        if (!this[_singleton])
            this[_singleton] = new UtilityDataService(_singleton);
        return this[_singleton]
    }

    getYearsData(years) {
        return fetch(constants.YEARS_URL)
            .then(response => response.json());
    }

    getMonthsData(months) {
        return fetch(constants.MONTHS_URL)
            .then(response => response.json());
    }

    getKwhsData(kwhs) {
        return fetch(constants.KWHS_URL)
            .then(response => response.json());
    }

    getBillsData(bills) {
        return fetch(constants.BILLS_URL)
            .then(response => response.json())
            .then(bills => bills.billsJ);
    }

    getSavingsData(savings) {
        return fetch(constants.SAVINGS_URL)
            .then(response => response.json())
            .then(savings => savings.savingsJ);
    }
}

export default UtilityDataService;