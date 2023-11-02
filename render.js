export var toRender = function display(projectsDisplay) {
  let render = projectsDisplay.map(function (item) {
    // elementos
    var cardsContainer = document.querySelector(".cartasContainers");
    var cardDiv = document.createElement("div");
    var ancor = document.createElement("a");
    var imgProject = document.createElement("img");
    var descrContainer = document.createElement("div");
    var title = document.createElement("h2");
    var descr = document.createElement("p");

    // adicionando classes

    var cards = cardDiv;
    cards.classList.add("cartaProjeto");

    var a = ancor;
    a.href = item.href;

    var img = imgProject;
    img.src = item.img;
    img.alt = item.title;

    descrContainer.classList.add("descricao");
    var h2 = title;
    h2.classList.add("tituloProj");
    h2.innerText = item.title;

    var p = descr;
    p.innerText = item.desc;

    // pais e filhos

    cardsContainer.appendChild(cards);
    cards.appendChild(a);
    a.appendChild(img);
    a.appendChild(descrContainer);
    descrContainer.appendChild(h2);
    descrContainer.appendChild(p);
  });

  render();
};
