"use strict";

function findElementByClass(element, className) {
  if (element.classList.contains(className)) {
    return element;
  }

  for (let i = 0; i < element.children.length; i++) {
    const foundElement = findElementByClass(element.children[i], className);
    if (foundElement) {
      return foundElement;
    }
  }

  return null;
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

//function findElementByClass(element, className) {
//  return element.querySelector('.' + className);}

//const rootElement = document.getElementById('root');
//const targetElement = findElementByClass(rootElement, 'my-class');
//console.log(targetElement);
