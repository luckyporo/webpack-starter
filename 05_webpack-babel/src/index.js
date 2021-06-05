import { sum } from './lib/math';
const { priceFormat } = require('./lib/format');
import './lib/element';

console.log(sum(1, 2));
console.log(priceFormat());

const message = 'hello world';
const names = ['aaa', 'bbb', 'ccc'];

names.forEach(el => console.log(el));
console.log(message);