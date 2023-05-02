// Default
import myName from './myName';

// Named
import {functionOne, functionTwo} from './myModule'

function component() {
  const element = document.createElement('div');
  const element2 = document.createElement('div');

  // Lodash, now imported by this script
  element.textContent = myName('Philip');
  element2.textContent = functionOne() + functionTwo();

  return element;
}

document.body.appendChild(component());