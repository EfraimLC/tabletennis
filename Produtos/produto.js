const container = document.getElementById("cardContainer");

const cardLista = [
  {
    id: 1,
    titulo: "2 Raquetes Butterfly + 3 Bolinhas Butterfly",
    subtitulo: "R$ 625,00",
    imagem: "figure_produto1",
  },
  {
    id: 2,
    titulo: "1 Raquete Joola + 12 Bolinhas Joola",
    subtitulo: "R$850,00",
    imagem: "figure_produto2",
  },
  {
    id: 3,
    titulo: "1 Raquete Tibhar + 1 Bolinha Tibhar",
    subtitulo: "R$ 295,00",
    imagem: "figure_produto3",
  },
  {
    id: 4,
    titulo: "1 Rede Joola + Suporte Interno",
    subtitulo: "R$ 45,00",
    imagem: "figure_produto4",
  },
];

cardLista.forEach((card) => {
  const cardHTML = `

    <div class="div_produto">
            <figure id="${card.imagem}">
            </figure>
            <h3>${card.titulo}</h3>
            <h2>${card.subtitulo}</h2>
            <button type="submit">Comprar</button>
    </div>
    `;

  container.innerHTML += cardHTML;
});
