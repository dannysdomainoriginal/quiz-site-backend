const dom = (query: string) => {
  const target = document.querySelectorAll(query) as NodeListOf<HTMLElement>

  if (target.length == 1) return target[0] as HTMLElement

  return target
}

export default dom