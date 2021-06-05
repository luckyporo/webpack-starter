import { sum } from './lib/math';
const { priceFormat } = require('./lib/format');
import './lib/element';
import { createApp } from 'vue/dist/vue.esm-bundler';

console.log(sum(1, 2));
console.log(priceFormat());

const message = 'hello world';
const names = ['aaa', 'bbb', 'ccc'];

names.forEach(el => console.log(el));
console.log(message);

createApp({
  template: '<h2>我是Vue渲染出来的</h2>',
  data() {
    return {
      title: 'hello vue'
    }
  }
}).mount('#app');