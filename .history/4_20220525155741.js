// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function HomeElectrodevice() {
    this.name = name;
    this.isPlugged = true;
}

function PhoneElectrodevice(name, price, model) {
    this.name = name;
    this.price = price;
    this.model = model;
}

function LaptopElectrodevice(name, price, model) {
    this.name = name;
    this.price = price;
    this.model = model;
}

PhoneElectrodevice.prototype = new HomeElectrodevice();
LaptopElectrodevice.prototype = new HomeElectrodevice();

HomeElectrodevice.prototype.getEnergyUsage = function (energy) {
    console.log(`power usage of ${this.name} = ${energy}`);
}

HomeElectrodevice.prototype.plugIn = function () {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

const applePhone = new PhoneElectrodevice('Iphone', '499 USD', 11);
const hpLaptop = new LaptopElectrodevice('Hewlett Packard', '849 USD', 'Pavilion13');

console.log(applePhone);
console.log(hpLaptop);

applePhone.getEnergyUsage('20Vt');
hpLaptop.getEnergyUsage('350Vt');

console.log(applePhone.name, 'PlugIn_info:', applePhone.isPlugged)
applePhone.plugIn();
console.log(hpLaptop.name, 'PlugIn_info:', hpLaptop.isPlugged);

console.log(applePhone.name, 'Model_info:', applePhone.model);
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Doc