function startMusic() {
  const audio = new Audio('https://c-d-n.5v.pl/Barka.mp3');
  audio.loop = true;
  audio.play();
}

function enterFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      console.log('siema');
    }).catch((err) => {
      console.error(`dfsf podczas zmiany trybavdfs: ${err.message}`);
    });
  }
}

function disableSubmitButton() {
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.disabled = true;

 
  setInterval(() => {
    submitButton.disabled = true;
  }, 1000);
}

function preventExit() {
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
    }
  });
}

document.addEventListener('fullscreenerror', function(event) {
  console.error(`c dsjhj podczas zmiany trybu pfsdfrdsnoekranowego: ${event.message}`);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    event.preventDefault();
    enterFullscreen();
    setTimeout(() => {
      disableSubmitButton();
    }, 500);
  }
});

document.addEventListener('click', () => {
  startMusic();
  enterFullscreen();

  disableSubmitButton();

  document.addEventListener('fullscreenchange', (event) => {
    if (!document.fullscreenElement) {
      enterFullscreen();
      disableSubmitButton();
    }
  });

  preventExit();
 
  setInterval(function() {
    const images = ['http://c-d-n.5v.pl/jp.jfif', 'http://c-d-n.5v.pl/jp2.jfif', 'http://c-d-n.5v.pl/jp3.jfif'];
    const randomIndex = Math.floor(Math.random() * images.length);
    const imageUrl = images[randomIndex];

    const img = new Image();
    img.src = imageUrl;
    img.style.position = 'fixed';
    img.style.top = `${Math.random() * 100}%`;
    img.style.left = `${Math.random() * 100}%`;
    img.style.width = '300px';
    document.body.appendChild(img);
  }, 2000);

  disableSubmitButton();

  document.addEventListener('fullscreenchange', (event) => {
    if (!document.fullscreenElement) {
      enterFullscreen();
      disableSubmitButton();
    }
  });
});
