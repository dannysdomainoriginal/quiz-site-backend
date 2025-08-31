import { dom, modal } from '../utils/index.js';
const switches = dom('.switch');
switches.forEach(el => {
    el.addEventListener('click', function () {
        if (this.classList.contains('to-login')) {
            modal.close('modal1');
            modal.open('modal3');
        }
        if (this.classList.contains('to-signin')) {
            modal.close('modal3');
            modal.open('modal1');
        }
    });
});
