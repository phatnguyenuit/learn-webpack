import './style.css';

console.log('index.js');

const root = document.getElementById('root');

const p = document.createElement('p');
p.innerHTML = 'Hello JS!';
p.className = 'hello hello-js';

root.append(p);
