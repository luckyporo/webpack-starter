import '../css/style.css';
import '../css/style.less';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = 'hello webpack';

document.body.appendChild(divEl);

const pEl = document.createElement('p');
pEl.className = 'content';
pEl.innerHTML = 'less style';

document.body.appendChild(pEl);
