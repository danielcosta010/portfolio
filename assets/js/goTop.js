// pegar botão
var mybutton = document.querySelector(".btn-go-top");

// quando rolar a página 20px do topo para baixo, o botão será exibido
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// // quando clicar no botão, a página rola para o topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//mybutton.addEventListener('click', () => topFunction())