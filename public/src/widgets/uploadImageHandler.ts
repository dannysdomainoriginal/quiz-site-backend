import { dom, modal } from '../utils/index.js'

const profileImage = dom('#profile-pic') as HTMLImageElement
const inputFile = dom('#input-file') as HTMLInputElement

inputFile.addEventListener('change', async function () {
  let [ file ] = inputFile.files as FileList

  const reader = new FileReader()
  reader.onload = (e) => {
    profileImage.src = e.target?.result as string
  }

  reader.onerror = (err) => {
    console.error("Error reading file:", err)
    alert('An error occured while reading file')
  }

  reader.readAsDataURL(file)
})