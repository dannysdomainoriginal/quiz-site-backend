import { dom, modal } from '../utils/index.js';
const profileImage = dom('#profile-pic');
const imageLibrary = dom('.library-modal img');
imageLibrary.forEach(img => {
    img.addEventListener('click', async function () {
        await loadImageToInput(this.src);
        modal.close('modal2');
    });
});
const loadImageToInput = async function (url) {
    const response = await fetch(url);
    const blob = await response.blob();
    const file = new File([blob], 'image.png', { type: blob.type });
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    const inputFile = dom('#input-file');
    inputFile.files = dataTransfer.files;
    inputFile.dispatchEvent(new Event('change'));
};
