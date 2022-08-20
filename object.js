// Object

var myComputer = {

    processor: 'corei5',
    motherBoard: 'Gigabyte',
    poweerSuply:' Atom',
    SSD: 'm.2',
    HardDisk: 'none',
    casing:'valuetop',
    mouse: 1,
    keyboard: 1,
    speaker: 1,


}

console.log(myComputer);


// // get property value 
// var value = myComputer.casing;
// console.log(value);

 

// // show output all propertes
// var properties = Object.keys(myComputer);
// console.log(properties);

// // show output all properties values
// var propertyValues = Object.values(myComputer);
// console.log(propertyValues);

// show outpur propery and propertyvalues
// var propertyName1 = 'keyboard';
// var propertyvalue1 = myComputer[propertyName1];
// console.log(propertyName1, propertyvalue1);



// var propertyName2 = 'SSD';
// var propertyvalue2 = myComputer[propertyName2];
// console.log(propertyName2, propertyvalue2);



// change or set property value
myComputer.mouse = 5;
myComputer.keyboard = 10;
console.log(myComputer);


