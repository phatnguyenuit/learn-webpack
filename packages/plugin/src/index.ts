import { Student } from './typings/common';
import './style.css';

console.log('index.ts');

const root = document.getElementById('root');

const p = document.createElement('p');
p.innerHTML = 'Hello TypeScript!';
p.className = 'hello hello-ts';

root?.append(p);

const student: Student = {
  name: 'Phat',
  age: 25,
  email: 'phatnt.uit@gmail.com',
};

const div = document.createElement('div');
div.innerHTML = JSON.stringify(student, null, 2);

root?.append(div);
