import dom from '../dom.js';
const handleChosen = (chosen) => {
    dom('.overlay').style.display = 'block';
    dom('.options.right').classList.add('chosen');
    const chosenInput = dom(`input[type="radio"][value="${chosen}"]`);
    chosenInput.parentElement?.classList.add('chosen');
    console.log(chosenInput);
};
export default handleChosen;
