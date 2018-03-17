function MediaPlayer(video) {

  console.log('MediaPlayer created');

  function play() {
    console.log('play');
    video.play();
  }

  function pause() {
    console.log('pause');
    video.pause();
  }

  function setSource(src) {
    console.log('setSource');
    video.src = src;
  }
  
  return {
    setSource,
    play,
    pause
  }
}

window.MediaPlayer = MediaPlayer;

export default MediaPlayer;