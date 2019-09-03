class Product {
  constructor(name, image, price, oldPrice, paymentDescription) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.oldPrice = oldPrice;
    this.paymentDescription = paymentDescription;
  }
}

// const retorno = await request();
// request.then(retorno => {

// });

//ESSE CÓDIGO FAZ UMA REQUISIÇÃO

async function pegaProdutos() {
  const response = await fetch('https://raw.githubusercontent.com/KaiqueBressi/itelios-frontend-challenge/master/products.json'); //promise
  const json = await response.json(); //aqui a promise já foi resolvida
  
  return json;
}

let products = [];

//usamos o then quando a promise retornar uma resposta (for cumprida) e executar algo após essa resolução
pegaProdutos().then((data) => {
  data[0]['data']['recommendation'].forEach(element => { //esse element representa cada item do array
    products.push(new Product(element.name, element.imageName, element.price, element.oldPrice, element.productInfo.paymentConditions))
  });

  let getDivProducts = document.querySelector("#products");

  // getDivProducts.innerHTML = "nome: " + products[0].name;

  getDivProducts.innerHTML = `
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
  
  <div class="carousel-inner"></div>  

  <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>   
`;

let getCarouselInner = document.querySelector(".carousel-inner");
  // products.forEach(function(product) {

  // });  

  products.forEach(product => {
    getCarouselInner.innerHTML += `
      <div class="carousel-item">
          <img src="${product.image}" alt="">
          
          <p>
            Nome: ${product.name} <br>
            Preço: ${product.price} <br>
            Descrição: ${product.paymentDescription}
          </p>
         
      </div>   
      `;
  });

  document.querySelector('.carousel-item').classList.add('active')
});