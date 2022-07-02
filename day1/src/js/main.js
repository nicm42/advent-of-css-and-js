import '../scss/styles.scss';

import Alpine from 'alpinejs';
import countdown from './countdown.js';

window.Alpine = Alpine;

Alpine.data('countdown', countdown);

Alpine.start();
