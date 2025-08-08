//Efeito de exibição inicial dos cards (efeito cascata) - jQuery
function showCards() {
  const cards = $(".card");

  // Esconde todos os cards inicialmente
  cards.removeClass("show");

  // Exibe os cards com um efeito de cascata
  for (let i = 0; i < cards.length; i++) {
    setTimeout(() => {
      $(cards[i]).addClass("show");
    }, i * 800); // delay de 600ms entre cada card
  }
}

$(document).ready(showCards);

//Destaque condicional para imóveis abaixo de R$ 1.000.000
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

// Slider/carrossel na versão mobile

$(document).ready(function () {
  const container = $(".cards-container");
  const originalHTML = $(container).html();
  const swiperInstance = null;

  function destroySwiper() {
    if (typeof swiperInstance !== "undefined" && swiperInstance !== null) {
      swiperInstance.destroy(true, true); // destrói swiper
      swiperInstance = null;
    }

    // Restaura o HTML original
    $(container)
      .removeClass("swiper") // remove classe do swiper
      .addClass("cards-container") // adiciona classe original (se necessário)
      .html(originalHTML); // volta pro HTML original

    $(document).ready(showCards);
  }

  function initSwiper() {
    $(container).removeClass("cards-container").addClass("swiper");

    let $wrapper = $("<div>").addClass("swiper-wrapper");
    $(container).children().appendTo($wrapper);
    $(container).empty().append($wrapper);

    // Adiciona elementos de navegação/paginação

    $(container).append('<div class="swiper-pagination"></div>');
    $(container).append('<div class="swiper-button-prev"></div>');
    $(container).append('<div class="swiper-button-next"></div>');

    const wrapper = $(".swiper-wrapper");

    $(wrapper)
      .children()
      .each(function () {
        var $card = $(this);
        var $slide = $("<div>").addClass("swiper-slide").append($card);
        $(wrapper).append($slide);
      });

    // Inicia o Swiper
    new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  function checkMode() {
    if ($(window).width() <= 768) {
      if (!swiperInstance) {
        initSwiper();
      }
    } else {
      destroySwiper();
    }
  }

  $(document).ready(checkMode);
  $(window).resize(checkMode);
});
