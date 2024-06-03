tailwind.config = {
    theme: {
      extend: {
        colors: {
          clifford: '#da373d',
        }
      }
    }
}

const themeLink = document.createElement("link")
themeLink.rel = "stylesheet"
document.head.appendChild(themeLink)

function setTheme(cssFile){
    themeLink.href = cssFile
}
setTheme("/css/themes/default.css")