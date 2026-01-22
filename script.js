function toggleMode() {
  // faz a troca da classe
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a imagem
  const img = document.querySelector("#profile img")
  // Se contém light mode
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    // Senão mantem a imagem normal
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
