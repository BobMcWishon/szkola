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
