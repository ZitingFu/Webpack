//管理资源
import _ from 'lodash';
import './style.css';
import Img from './avatar.png';
import Data from './data.xml';
//管理输出
import printMe from './print.js';


  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'wozhidao'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    
    
    //css
    element.classList.add('hello');
    //img
    var myIcon = new Image();
		myIcon.src = Img;
		element.appendChild(myIcon);
    //xml
	 console.log(Data);
   element.appendChild(btn);
    return element;
  }

  document.body.appendChild(component());

// if (module.hot) {
//    module.hot.accept('./print.js', function() {
//      console.log('Accepting the updated printMe module!');
//      printMe();
//    })
// }