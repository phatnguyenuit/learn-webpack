import _pick from 'lodash/pick';

const obj = {
  name: 'Phat',
  age: 25,
  gender: 'male',
};

console.log(_pick(obj, ['name', 'gender']));
