const container = document.querySelector('#container');
// Defining parent node //

const btn2 = document.createElement('button');

btn2.setAttribute('id','btn2');

btn2.textContent = "Click Me";

btn2.onclick = () => alert("Hello World!");

const btn3 = document.createElement('button');

btn3.setAttribute('id','btn3');


btn3.textContent = "Click Me Too";


btn3.addEventListener('click', () => {
    alert("Hello World!");
});


container.appendChild(btn2);
container.appendChild(btn3);



