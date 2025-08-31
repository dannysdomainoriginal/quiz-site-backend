import { dom, modal } from '../utils/index.js';
const signUp = dom('.signin-modal');
signUp.addEventListener('click', () => modal.open('modal1'));
const closeSignUp = dom('.close-btn');
closeSignUp.addEventListener('click', () => modal.close('modal1'));
const imageLibraryBtn = dom('.modal2.btn');
imageLibraryBtn.addEventListener('click', () => modal.open('modal2'));
const imageLibraryModal = dom('#modal2');
imageLibraryModal.addEventListener('click', function (e) {
    const element = e.target;
    if (element != dom('.library-modal') && element.parentElement != dom('.library-modal')) {
        modal.close('modal2');
    }
});
const loginBtn = dom('.login-modal');
loginBtn.addEventListener('click', () => modal.open('modal3'));
const checkResults = dom('.check-results');
checkResults.addEventListener('click', () => modal.open('modal3'));
const closeLoginBtn = dom('.close-btn-login');
closeLoginBtn.addEventListener('click', () => modal.close('modal3'));
