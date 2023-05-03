// Lodash
import _ from 'lodash';
// Default import
import myName from './myName';
// Named imports
import {functionOne, functionTwo} from './myModule';
// Style import
import './style.css';
// Image import
import Icon from './icon.png';

function component1() {
  const element1 = document.createElement('div');

  // Lodash, now imported by this script
  element1.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element1.classList.add('hello1');

  return element1;
}

function component2() {
  const element2 = document.createElement('div');

  element2.textContent = myName('Philip');
  element2.classList.add('hello2');


  return element2;
}

function component3() {
  const element3 = document.createElement('div');

  element3.textContent = functionOne() + functionTwo();
  element3.classList.add('hello3');


  return element3;
}

function addImage() {
  const element4 = document.createElement('div');


  const myIcon = new Image();
  myIcon.src = Icon;

  element4.appendChild(myIcon);

  return element4
}

document.body.appendChild(component1());
document.body.appendChild(component2());
document.body.appendChild(component3());
document.body.appendChild(addImage());