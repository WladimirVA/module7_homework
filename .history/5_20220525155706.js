// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.

class HomeElectrodevice {
    constructor(){
        this.name = name;
        this.isPlugged = true;
    }
}

class PhoneElectrodevice extends HomeElectrodevice {
    constructor(name, price, model) {
        super(name);
        this.name = name;
        this.price = price;
        this.model = model;
    }

    getEnergyUse(energy) {
        return `power usage of ${this.name} = ${energy}`;
    }

    plugIn() {
        this.isPlugged = true;
        return this.name + " is plugged!";
    }
}


class LaptopElectrodevice extends HomeElectrodevice {
    constructor(name, price, model) {
        super(name);
        this.name = name;
        this.price = price;
        this.model = model;
    }

    getEnergyUse(energy) {
        return `power usage of ${this.name} = ${energy}`;
    }

    plugIn() {
        this.isPlugged = true;
        return this.name + " is plugged!";
    }
}

const applePhone = new PhoneElectrodevice('Iphone', '499 USD', 11);
const hpLaptop = new LaptopElectrodevice('Hewlett Packard', '849 USD', 'Pavilion13');

console.log(applePhone);
console.log(hpLaptop);

console.log(applePhone.getEnergyUsage('20Vt'));
console.log(hpLaptop.getEnergyUsage('350Vt'));

console.log(applePhone.name, 'PlugIn_info:', applePhone.isPlugged)
applePhone.plugIn();
console.log(hpLaptop.name, 'PlugIn_info:', hpLaptop.isPlugged);

console.log(applePhone.name, 'Model_info:', applePhone.model);