
import $, { each } from 'jquery';

import '../css/style.css';
import persons from './test';

each(persons, function (key, value) {
    $('body').append('<h1>' + persons[key].name+ '</h1>')
})
console.log(persons)