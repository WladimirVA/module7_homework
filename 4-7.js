// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
// Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricDevice(name,wat,warrantyYears,powerDevice){
    this.name = name,
    this.wat = wat,
    this.warrantyYears = warrantyYears,
    this.powerOnOf = powerDevice
}

// функция переключения питания вынесена в prototype
ElectricDevise.prototype.powerDevise = function(){
  if (this.powerOnOf =='on') this.powerOnOf =='off';
  else this.powerOnOf = 'on';
}

