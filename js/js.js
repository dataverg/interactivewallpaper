const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');

const hide = () => {
  return anime({
    targets: ['.back-one', '.back-two'],
    height: '0',
    easing: 'easeInOutSine',
    duration: 2000,
    // delay: 3000,
    autoplay: false,
  });
};

const show = () => {
  return anime({
    targets: ['.back-one', '.back-two'],
    height: '50vh',
    easing: 'easeInOutSine',
    duration: 2000,
    // delay: 3000,
    autoplay: false,
  });
};

const getDate = () => {
  const dateWrapper = document.querySelector('.date');
  const date = new Date();
  dateWrapper.innerText = `${date.toLocaleTimeString()}`;
};

const renderCursorEffect = () => {
  const node = document.createElement('div');
  const cursor = `
    <div class="cursor-effect"><div></div><div></div></div>
  `;
  node.classList.add('cursor');
  node.innerHTML = cursor;
  body.append(node);
};

const renderCursor = () => {
  renderCursorEffect();

  const cursor = document.querySelector('.cursor');
  const video = document.querySelector('video');

  body.addEventListener('mousemove', (e) => {
    e.preventDefault();

    const x = e.clientX;
    const y = e.clientY;

    if (video) {
      video.style.transformOrigin = `${x}px   ${y}px`;
      video.style.transform = 'scale(1.1)';
    }

    cursor.style.top = e.clientY - 50 + 'px';
    cursor.style.left = e.clientX - 50 + 'px';
  });
};

const render = (page) => {
  switch (page) {
    case 'wallpaper':
      return (wrapper.innerHTML = pages.wallpaper);

    default:
      return (wrapper.innerHTML = pages.main);
  }
};

const start = () => {
  render('main');
  hide().play();

  anime
    .timeline({
      easing: 'easeOutExpo',
      duration: 700,
    })
    .add(
      {
        targets: '.text-welcome',
        translateX: [2000, 0],
      },
      '+= 2000'
    )
    .add(
      {
        targets: '.text-to',
        translateY: [2000, 0],
      },
      '+= 10'
    )
    .add(
      {
        targets: '.text-interactive',
        translateX: [-2000, 0],
      },
      '+= 5'
    )
    .add(
      {
        targets: '.text-wallpaper',
        translateY: [-2000, 0],
      },
      '+= 2'
    );

  const welcomeFinish = () => {
    return {
      closeing: () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            show().play();
            resolve();
          }, 5000);
        });
      },
    };
  };

  const welcomeFinished = async () => {
    const closeing = await welcomeFinish().closeing();
    return closeing;
  };

  welcomeFinished().then(() => {
    setTimeout(() => {
      render('wallpaper');
      renderCursor.bind(renderCursor)();
      document.querySelector('video').play();
      setTimeout(() => hide().play(), 1000)
    }, 3000);
  });

  console.log('ahaha');

  /* write some animatinon */
};

start();

window.addEventListener('scroll', (e) => {
  console.log(e);
});
