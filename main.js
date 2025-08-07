//Efeito de exibição inicial dos cards (efeito cascata) - jQuery

$(document).ready(function () {
  const cards = $(".card");

  // Esconde todos os cards inicialmente
  cards.removeClass("show");

  // Exibe os cards com um efeito de cascata

  for (let i = 0; i < cards.length; i++) {
    setTimeout(() => {
      $(cards[i]).addClass("show");
    }, i * 500); // delay de 500ms entre cada card
  }
});
