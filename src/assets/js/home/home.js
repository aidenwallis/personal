import * as utils from '../utils/utils';

class Home {
  constructor() {
    this._registerVideoPlay();
  }

  _registerVideoPlay() {
    const heroVideo = document.getElementById('home-hero__video');
    heroVideo.onplay = () => {
      heroVideo.classList.add('home-hero__video--faded');
      const heroPromo = document.getElementById('home-hero__video-promo');
      heroPromo.classList.add('fade-07');
    };
  }
}

window.app = window.app || {};
window.app.home = window.app.home || new Home();
