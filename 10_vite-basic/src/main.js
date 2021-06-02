import { sum } from './lib/math';
import _ from 'lodash-es'
import mul from './lib/mul'
import { createApp } from 'vue'

import './css/style.css'
import './css/title.less'

import App from './components/App.vue'

console.log('hello world');
console.log(sum(1, 2));

console.log(_.join(['abc', 'def'], '-'));

const div = document.createElement('div');
div.className = 'title';
div.innerHTML = 'hello vite';

document.body.appendChild(div);

console.log(mul(5, 8));

createApp(App).mount('#app');