"use strict";
// =================================
// Example
// =================================
const wElement = document.querySelector('.written-text');
const myTexts = ['I\'m Chema Alfonso  ', 'How are you?...', 'visit: chemaalfonso.com... ', 'Are you?...'];
let myWritterMachine = new WritterMachine(wElement, {
    texts: myTexts,
    speed: 250,
    prefix: 'Hi, ',
    sufix: '',
    lowerLimit: 0,
    upperLimit: 0,
    enableStyles: true,
    customStyles: '' // You can set custom styles directly using a string;
});
