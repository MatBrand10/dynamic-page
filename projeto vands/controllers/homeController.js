exports.getHome = (req, res) => {
  const filmes = [
    { titulo: "Interestelar", ano: 2014, assistido: true },
    { titulo: "Oppenheimer", ano: 2023, assistido: false },
    { titulo: "Duna", ano: 2021, assistido: true },
    { titulo: "Matrix", ano: 1999, assistido: false }
  ];

  const mostrarMensagem = filmes.length > 0;

  res.render('home', {
    filmes,
    mostrarMensagem
  });
};