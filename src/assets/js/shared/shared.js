import * as utils from '../utils/utils';

class Shared {
  constructor() {
    this._imageMap = {
      './assets/images/streamelements.png': require('../../images/streamelements.png'),
      './assets/images/creativegrenade.png': require('../../images/creativegrenade.png'),
      './assets/images/epicsgg.png': require('../../images/epicsgg.png'),
      './assets/images/fossabot.png': require('../../images/fossabot.png'),
      './assets/images/ryzegg.png': require('../../images/ryze.jpg'),
    };

    this._preloadImages();
  }

  _preloadImages() {
    const items = document.querySelectorAll('.preload-fader');
    for (let i = 0; i < items.length; ++i) {
      const item = items[i];
      const src = this._imageMap[item.dataset.src];
      utils.preloadImage(src)
        .then(() => {
          item.style.backgroundImage = `url(${src})`;
          item.classList.add('preload-fader--faded');
        });
    }
  }
}

window.app = window.app || {};
window.app.shared = window.app.shared || new Shared();
