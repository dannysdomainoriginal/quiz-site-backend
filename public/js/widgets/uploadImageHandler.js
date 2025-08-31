import { dom } from '../utils/index.js';
const profileImage = dom('#profile-pic');
const inputFile = dom('#input-file');
inputFile.addEventListener('change', async function () {
    let [file] = inputFile.files;
    const reader = new FileReader();
    reader.onload = (e) => {
        profileImage.src = e.target?.result;
    };
    reader.onerror = (err) => {
        console.error("Error reading file:", err);
        alert('An error occured while reading file');
    };
    reader.readAsDataURL(file);
});
