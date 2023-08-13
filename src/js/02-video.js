import Player from '@vimeo/player';
//const throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';


// const iframe = document.querySelector('iframe');
// const player = new Vimeo.Player(iframe);

//console.log(iframe);

const play = new Player(iframe);
play.on(`timeupdate`, throttle(fnTime, 1000));

