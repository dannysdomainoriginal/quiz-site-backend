import dom from './dom.js'

export const open = function (id: string) {
  const modal = dom('#' + id) as HTMLDivElement
  modal.style.display = 'grid'
}

export const close = function (id: string) {
  const modal = dom('#' + id) as HTMLDivElement
  modal.style.display = 'none'
}