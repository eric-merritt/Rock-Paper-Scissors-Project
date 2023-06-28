const div = document.createElement('div');
// Creates the original div//

div.setAttribute('id', 'container');

const redPara = document.createElement('p');

redPara.style.cssText = 'color: red;';

redPara.textContent = "Hey I'm red!";

const blueH3 = document.createElement('h3');

blueH3.style.cssText = 'color: blue;';

blueH3.textContent = "I'm a blue H3!";

const div2 = document.createElement('div');

div2.setAttribute('id', 'inner-container');

div2.style.backgroundColor = 'pink';

div2.style.borderStyle = 'solid';
div2.style.borderColor = 'black';

const div2H1 = document.createElement('h1');

div2H1.textContent = "I'm in a div";

const div2P = document.createElement('p');

div2P.textContent = "ME TOO!";

div.appendChild(redPara);

div.appendChild(blueH3);

div2.appendChild(div2H1);

div2.appendChild(div2P);

div.appendChild(div2);

document.body.appendChild(div);




