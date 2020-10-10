const dateWrapper = document.querySelector('.date');
const body = document.querySelector('body');
const video = document.querySelector('video');

const hide = () => {
  return anime({
    targets: ['.back-one', '.back-two'],
    height: '0',
    easing: 'easeInOutSine',
    duration: 4000,
    delay: 3000,
    autoplay: false,
  });
};

hide().play()

const getDate = () => {
  const date = new Date();

  const [hrs, min, sec] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  return `${hrs}:${min}:${sec}`;
};

const createCrusor = () => {
  const node = document.createElement('div');
  const cursor = `
    <div class="cursor-effect"><div></div><div></div></div>
  `;
  node.classList.add('cursor');
  node.innerHTML = cursor;
  body.append(node);
};

const render = async () => {
  dateWrapper.innerText = getDate();
  createCrusor();

  const cursor = document.querySelector('.cursor');
  hide();
  body.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    video.style.transformOrigin = `${x}px   ${y}px`;
    video.style.transform = 'scale(1.1)';

    cursor.style.top = e.clientY - 50 + 'px';
    cursor.style.left = e.clientX - 50 + 'px';
  });
};

window.addEventListener('load', render);
