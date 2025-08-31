import dom from '../dom.js'

const handleChosen = (chosen: string) => {
  // set overlay
  (dom('.overlay') as HTMLDivElement).style.display = 'block';

  // set the right answer to right answer
  ( dom('.options.right') as HTMLLabelElement ).classList.add('chosen')
  
  const chosenInput = dom(`input[type="radio"][value="${chosen}"]`) as HTMLInputElement
  chosenInput.parentElement?.classList.add('chosen')
  console.log(chosenInput)
}

export default handleChosen