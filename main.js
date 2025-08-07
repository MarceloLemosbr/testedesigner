//Efeito de exibição inicial dos cards (efeito cascata) - jQuery

$(document).ready(function () {
  const cards = $(".card");

  // Esconde todos os cards inicialmente
  cards.removeClass("show");

  // Exibe os cards com um efeito de cascata

  for (let i = 0; i < cards.length; i++) {
    setTimeout(() => {
      $(cards[i]).addClass("show");
    }, i * 800); // delay de 600ms entre cada card
  }
});

//Destaque condicional para imóveis abaixo de R$ 1.000.000

$(".card").removeClass("destaque");

$(document).ready(function () {
  $(".card").each(function () {
    const card = this;
    let rawText =
      (card.querySelector(".price") &&
        card.querySelector(".price").textContent) ||
      card.textContent;
    // Extrai o valor numérico do texto
    let valor = parseFloat(rawText.replace(/[^\d,]/g, "").replace(",", "."));
    if (!isNaN(valor) && valor < 1000000) {
      $(card).addClass("destaque");
    }
  });
});
