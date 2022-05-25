// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

class HomeElectrodevice {
    constructor(){
        this.name = name;
        this.pover = pover;
        this.isPlugged = true;
    }
}

class Lamp extends HomeElectrodevice {
    constructor(name, brand, pover) {
        super(name);
        this.name = name;
        this.brand = brand;
        this.pover = pover;
    }

    getEnergyUse(energy) {
        return `power usage of ${this.name} = ${energy}`;
    }

    plugIn() {
        this.isPlugged = true;
        return this.name + " is plugged!";
    }
}


class Computer extends HomeElectrodevice {
    constructor(name, brand, pover) {
        super(name);
        this.name = name;
        this.brand = brand;
        this.pover = pover;
    }

    getEnergyUse(energy) {
        return `power usage of ${this.name} = ${energy}`;
    }

    plugIn() {
        this.isPlugged = true;
        return this.name + " is plugged!";
    }
}

const tableLamp = new Lamp("Table lamp", "Xiaomi", 5);
const homePC = new Computer("Table PC", 'Hewlett Packard', 120);

console.log(tableLamp);
console.log(homePC);

console.log(tableLamp.getEnergyUsage('5Vt'));
console.log(homePC.getEnergyUsage('120Vt'));

console.log(tableLamp.name, 'PlugIn_info:', tableLamp.isPlugged)
tableLamp.plugIn();
console.log(homePC.name, 'PlugIn_info:', homePC.isPlugged);

console.log(tableLamp.name, 'Model_info:', tableLamp.model);