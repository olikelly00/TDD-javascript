class Thermostat {
    constructor(maxTemperature, currentEnergyUsage, currentTemperature = 20, minTemperature = 10, powerSavingMode = true) {
        this.maxTemperature = maxTemperature;
        this.currentEnergyUsage = currentEnergyUsage;
        this.currentTemperature = currentTemperature;
        this.minTemperature = minTemperature;
        this.powerSavingMode = powerSavingMode;


    }

    getTemperature() {
        return this.currentTemperature
    };

    up() {
        if (this.powerSavingMode === true) {
            if (this.currentTemperature < 25) {
                this.currentTemperature += 1
            }
            else { return }
        }
        else if (this.powerSavingMode === false) {
            if (this.currentTemperature < 32) {
                this.currentTemperature += 1
            }
            else { return }
        }
        }
    

    down() {
        if (this.currentTemperature > this.minTemperature) {
            this.currentTemperature -= 1
        } else { return }
    }



    reset() {
        this.currentTemperature = 20
    }

    setPowerSavingMode(status) {
        this.powerSavingMode = status
        if (this.powerSavingMode === true) {
            this.maxTemperature = 25
        } else if (this.powerSavingMode === false) {
            this.maxTemperature = 32
        }
    }
    
    getCurrentEnergyUsage() {
        if (this.currentEnergyUsage < 18) {
            return "low usage"
        } else if (this.currentEnergyUsage >= 18 && this.currentEnergyUsage < 26) {
            return "medium usage"
        } else {
            return "high usage"
        }
        }

}

module.exports = Thermostat;


const thermostat = new Thermostat();



console.log(thermostat.getTemperature()); // should return 20

thermostat.up();
thermostat.up();

console.log(thermostat.getTemperature()); // should now return 22

thermostat.down();

console.log(thermostat.getTemperature()); // should now return 21

thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

for (let i = 0 ; i < 10 ; i++) {
  thermostat.up();
}

console.log(thermostat.getTemperature()); // should be 25 (max reached)

thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25
console.log(thermostat)

thermostat.up();

console.log(thermostat.getTemperature()); // should now return 26

thermostat.reset();

console.log(thermostat.getTemperature()); // should be back to 20
