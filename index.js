// import React from 'react';
// import reactDom from 'react-dom';
// import App from './src/components/App';

// reactDom.render(<App />, document.getElementById('root'));
function object() {

const name = 'Philodendron-Brasil Heartleaf-Philodendron monstera prayer-plant elephant-ear chinese-money-plant Polly-Alocacia Peperomia-Ripple Peperomia Roger Cream-Allusion-Syngonium Strawbery-Cream-Syngonium Black-Velvet-Alocacia Chinese-Money-Plant-(big) Snake-Plant Swiss-Cheese-Monstera Dracaena'
const room =
 'Study Study Bedroom Bedroom Bedroom Study Study Conservatory Study Conservatory Conservatory Conservatory Conservatory Study Bedroom Bedroom Study';
const daysSinceWater = '3 5 14 3 14 2 3 3 2 16 2 7 7 1 15 8 3';

const roomArr = room.split(' ')
console.log(roomArr.length)
const nameArr = name.split(' ');
console.log(nameArr.length);
const daysArr = daysSinceWater.split(' ')
console.log(daysArr.length)


const obj = []

for (let i = 0; i < nameArr.length; i++) {
  let inner = {}
  inner['name'] = nameArr[i];
  inner['room'] = roomArr[i];
  inner['daysSinceWater'] = daysArr[i];
  obj.push(inner)
}
return obj
}
console.log(object())