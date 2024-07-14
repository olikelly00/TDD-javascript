const Thermostat = require('./thermostat')

//    constructor(maxTemperature, currentEnergyUsage, currentTemperature = 20, minTemperature = 10, powerSavingMode = true) {


describe('Thermostat', () => {
    it('if I call getTemperature on my Thermostat, the current temperature is returned', () => {
        const testThermostat = new Thermostat(25, 21, 22, 10, true)
        expect(testThermostat.getTemperature()).toEqual(22);
    });
});


describe('Thermostat', () => {
    it('if I create an instance of Thermostat, it has the expected attributes', () => {
        const testThermostat = new Thermostat(25, 26, undefined, undefined, undefined)
        expect(testThermostat.maxTemperature).toEqual(25)
        expect(testThermostat.currentEnergyUsage).toEqual(26);
        expect(testThermostat.currentTemperature).toEqual(20);
        expect(testThermostat.minTemperature).toEqual(10);
        expect(testThermostat.powerSavingMode).toEqual(true);

    });
});


describe('Thermostat', () => {
    it('if I call the up method on my Thermostat, it increments the current temperature by 1', () => {
        const testThermostat = new Thermostat(25, 22, 24, 10, true)
        testThermostat.up()
        expect(testThermostat.getTemperature()).toEqual(25);
    });
});

describe('Thermostat', () => {
    it('if I call the up method on my Thermostat while power save mode is on and the temp is at 25, the temperature will not increase', () => {
        const testThermostat = new Thermostat(25, 22, 25, 10, true)
        testThermostat.up()
        expect(testThermostat.getTemperature()).toEqual(25);
    });
});

describe('Thermostat', () => {
    it('if I call the down method on my Thermostat, it decrements the current temperature by 1', () => {
        const testThermostat = new Thermostat(25, 23, 22, 10, true)
        testThermostat.down()
        expect(testThermostat.getTemperature()).toEqual(21);
    });
});

describe('Thermostat', () => {
    it('if I call the down method on my Thermostat and current temp is below min temperature, it doesnt decrease', () => {
        const testThermostat = new Thermostat(25, 24, 10, 10, true)
        testThermostat.down()
        expect(testThermostat.getTemperature()).toEqual(10);
    });
});



describe('Thermostat', () => {
    it('if I call the down method on my Thermostat, it decrements the current temperature by 1', () => {
        const testThermostat = new Thermostat(25, 19, 22, 10, true)
        testThermostat.reset()
        expect(testThermostat.getTemperature()).toEqual(20);
    });
});



describe('Thermostat', () => {
    it('if I call setPowerSavingMode on my Thermostat with power saving mode set to false, it switches the value from false to true', () => {
        const testThermostat = new Thermostat(25, 18, 24, 10, false)
        testThermostat.setPowerSavingMode(true)
        expect(testThermostat.powerSavingMode).toEqual(true);
    });
});


describe('Thermostat', () => {
    it('if I call setPowerSavingMode on my Thermostat with power saving mode set to true, it switches the value from true to false', () => {
        const testThermostat = new Thermostat(25, 18, 24, 10, true)
        testThermostat.setPowerSavingMode(false)
        expect(testThermostat.powerSavingMode).toEqual(false);
    });
});


describe('Thermostat', () => {
    it('if I call setPowerSavingMode on my Thermostat with power saving mode set to false, the max temperature increases to 32', () => {
        const testThermostat = new Thermostat(25, 27, 24, 10, true)
        testThermostat.setPowerSavingMode(false)
        expect(testThermostat.maxTemperature).toEqual(32);
    });
});

describe('Thermostat', () => {
    it('if I call setPowerSavingMode on my Thermostat with power saving mode set to false, the max temperature increases to 32', () => {
        const testThermostat = new Thermostat(32, 22, 24, 10, false)
        testThermostat.setPowerSavingMode(true)
        expect(testThermostat.maxTemperature).toEqual(25);
    });
});


describe('Thermostat', () => {
    it('if I call the getCurrentEnergyUsage) method on my Thermostat and the usage is 17, it returns low usage', () => {
        const testThermostat = new Thermostat(32, 17, 24, 10, false)
        expect(testThermostat.getCurrentEnergyUsage()).toEqual("low usage");

    });
});

describe('Thermostat', () => {
    it('if I call the getCurrentEnergyUsage) method on my Thermostat and the usage is 26, it returns high usage', () => {
        const testThermostat = new Thermostat(32, 26, 24, 10, false)
        expect(testThermostat.getCurrentEnergyUsage()).toEqual("high usage");

    });
});


describe('Thermostat', () => {
    it('if I call the getCurrentEnergyUsage) method on my Thermostat and the usage is 21, it returns medium usage', () => {
        const testThermostat = new Thermostat(32, 21, 24, 10, false)
        expect(testThermostat.getCurrentEnergyUsage()).toEqual("medium usage");

    });
});