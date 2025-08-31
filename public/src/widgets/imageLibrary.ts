import { dom, modal } from '../utils/index.js'

const profileImage = dom('#profile-pic') as HTMLImageElement

const imageLibrary = dom('.library-modal img') as NodeListOf<HTMLImageElement>

imageLibrary.forEach(img => {
  img.addEventListener('click', async function (this: HTMLImageElement) {
    
    await loadImageToInput(this.src)
    modal.close('modal2')

  })
});

const loadImageToInput = async function (url: string) {
  const response = await fetch(url)
  const blob = await response.blob()
  const file = new File([blob], 'image.png', { type: blob.type } )

  // Populate the file input
  const dataTransfer = new DataTransfer()
  dataTransfer.items.add(file)
  
  const inputFile = dom('#input-file') as HTMLInputElement
  inputFile.files = dataTransfer.files
  inputFile.dispatchEvent(new Event('change'))
}

// loadImageToInput(profileImage.src)