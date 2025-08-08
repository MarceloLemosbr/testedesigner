# Desafio Web Designer Jr. - Cards Imobiliária

## Funcionalidades implementadas

- Efeito de entrada em cascata com delay entre os cards usando jQuery
- Destaque visual para imóveis abaixo de R$ 1.000.000,00
- Layout com cantos arredondados
- Slider responsivo em dispositivos móveis usando Swiper.js

## Bibliotecas Externas Utilizadas

1. [jQuery](https://jquery.com)
   **Motivo do uso:**

- Simplificação da manipulação do DOM e seleção de elementos.
- Uso prático para aplicar efeitos visuais (ex.: entrada em cascata dos cards) e percorrer elementos para aplicar lógicas condicionais.
- Facilita a escrita de código mais enxuto e legível, especialmente para adicionar/remover classes e mover elementos na estrutura.

**Onde foi usado no projeto:**

- Efeito de exibição em cascata dos cards na tela inicial.
- Destaque visual automático para imóveis abaixo de R$ 1.000.000,00.
- Detecção de largura de tela para alternar entre layout de grade e slider no mobile.
- Reestruturação dinâmica do HTML para criação/destruição do carrossel.

2. [Swiper.js](https://swiperjs.com)

**Motivo do uso:**

- Biblioteca leve e flexível para criação de sliders responsivos e touch-friendly.
- Suporte nativo a paginação, botões de navegação e configuração de slides por view.
- Funciona bem em conjunto com jQuery para inicialização e destruição condicional.

**Onde foi usado no projeto:**

- Transformação da listagem de cards em um carrossel interativo apenas na versão mobile.
- Inclusão de botões de navegação e paginação personalizada.
- Configuração de visualização de 1 card por vez, com espaçamento entre eles.

## Como testar

1. Abra o `index.html` em seu navegador.
2. Reduza a largura da tela para simular visualização mobile.
3. Observe o slider e os destaques condicionais.
