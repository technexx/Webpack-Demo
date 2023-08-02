import _ from 'lodash';
import './style.css'
// import myName from './myName'

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello')
  
    return element;
  }

  function componentTwo() { 
    const element = document.createElement('div');
  
    element.textContent = myName('Cody');
    return element;
  }
  
  document.body.appendChild(component());
//   document.body.appendChild(componentTwo());