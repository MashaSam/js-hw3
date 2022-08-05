import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('play',onPlay)
  function onPlay() {
    console.log('played the video!');
    
};
  
player.on('timeupdate', throttle(onTimeupdate , 1000));
  function onTimeupdate(data) {
    
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data.seconds);
    
    
};

  const currentTime = localStorage.getItem('videoplayer-current-time');
 player.setCurrentTime(Number(currentTime));
  // localStorage.setItem('videoplayer-current-time', timeupdateJSON);
        
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
  

  // Добавьте прослушиватель событий для указанного события.
  //  Вызовет обратный вызов с одним параметром, dataкоторый содержит данные для этого события.Подробности смотрите ниже.
});
