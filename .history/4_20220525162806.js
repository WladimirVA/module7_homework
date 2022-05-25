// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function HomeElectrodevice() {
    this.name = name;
    this.isPlugged = true;
}

function LampElectrodevice(name, pover, brand) {
    this.name = name;
    this.pover = pover;
    this.brand = brand;
}

function ComputerElectrodevice(name, pover, brand) {
    this.name = name;
    this.pover = pover;
    this.brand = brand;
}

LampElectrodevice.prototype = new HomeElectrodevice();
ComputerElectrodevice.prototype = new HomeElectrodevice();

HomeElectrodevice.prototype.getEnergyUsage = function (energy) {
    console.log(`power usage of ${this.name} = ${energy}`);
}

HomeElectrodevice.prototype.plugIn = function () {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

const tableLamp = new LampElectrodevice("Table lamp", 5, "Xiaomi");
const homePC = new ComputerElectrodevice("Table PC", 120, 'Hewlett Packard');

console.log(tableLamp);
console.log(homePC);

tableLamp.getEnergyUsage('20Vt');
homePC.getEnergyUsage('350Vt');

console.log(tableLamp.name, 'PlugIn_info:', tableLamp.isPlugged)
tableLamp.plugIn();
console.log(homePC.name, 'PlugIn_info:', homePC.isPlugged);

console.log(tableLamp.name, 'Model_info:', tableLamp.model);