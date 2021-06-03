import '../css/style.css';
import '../css/style.less';
import '../font/iconfont.css';

const divEl = document.createElement('div');
divEl.className = 'title';
divEl.innerHTML = 'hello webpack';

document.body.appendChild(divEl);

const pEl = document.createElement('p');
pEl.className = 'content';
pEl.innerHTML = 'less style';

document.body.appendChild(pEl);

const bgDiv = document.createElement('div');
bgDiv.className = 'bg-image';

document.body.appendChild(bgDiv);

const iEl = document.createElement('i');
iEl.className = 'iconfont icon-ashbin';

document.body.appendChild(iEl);