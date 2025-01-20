/**const grid = document.querySelector('.grid');

function printOnePlant(product, dom) {
    const article = document.createElement('article');
    article.classList.add(product.categoria);
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = `${product.imgen}`
    img.alt = `${product.nombre}`
    const h3 = document.createElement('h3');
    h3.textContent = `${product.nombre}`;
    const ul = document.createElement('ul');
    ul.innerHTML = `<li>${product.descripcion}€</li>
                    <li>${product.precio}€</li>`
    const button = document.createElement('button');
    button.textContent = 'Comprar';
    figure.append(img, h3, ul, button);
    article.append(figure);
    dom.appendChild(article);
}

function printPlants(products, dom) {
    products.forEach(product => {
        printOnePlant(product, dom);
    });
}
    
printPlants(productos, grid);/**/

/*const grid = document.querySelector('#plantas .grid');

/**function printOnePlant(product, dom) {
    const article = document.createElement('article');
    article.classList.add(product.categoria);

    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = `${product.imagen}`;
    img.alt = `${product.nombre}`;

    const h3 = document.createElement('h3');
    h3.textContent = `${product.nombre}`;

    const ul = document.createElement('ul');
    ul.innerHTML = `
        <li>${product.descripcion}</li>
        <li>Precio: €${product.precio}</li>
        <li>Stock: ${product.stock} unidades</li>
    `;

    const button = document.createElement('button');
    button.textContent = 'Agregar al carrito';

    figure.appendChild(img);
    article.append(figure, h3, ul, button);

    dom.appendChild(article);
}

function printAllPlants(products, dom) {
    dom.innerHTML = '';
    products.forEach(product => printOnePlant(product, dom));
}

const select = document.getElementById('tipoPlanta');

select.addEventListener('change', (event) => {
    const category = event.target.value;
    if (category === 'todas') {
        printAllPlants(productos, grid);
    } else {
        const filteredProducts = productos.filter(product => product.categoria.toLowerCase().includes(category.toLowerCase()));
        printAllPlants(filteredProducts, grid);
    }
});

// Pintar todas las plantas al cargar la página
printAllPlants(productos, grid);*/

/**function printOnePlant(product, dom) {
    const article = document.createElement('article');
    article.classList.add(product.categoria);
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = product.imagen; // Asegúrate de que 'imagen' sea la propiedad correcta
    img.alt = product.nombre;
    const h3 = document.createElement('h3');
    h3.textContent = product.nombre;
    const ul = document.createElement('ul');
    ul.innerHTML = `<li>${product.descripcion}</li>
                    <li>Precio: €${product.precio}</li>
                    <li>Stock: ${product.stock} unidades</li>`;
    const button = document.createElement('button');
    button.textContent = 'Agregar al carrito';
    figure.append(img, h3, ul, button);
    article.appendChild(figure);
    dom.appendChild(article);
}
/**console.log(productos);*/

/**function printPlants(products, dom) {
    dom.innerHTML = '';
    if (products.length > 0) {
        products.forEach(product => printOnePlant(product, dom));
    } else { 
        dom.innerHTML = '<p>No hay productos disponibles</p>';
    }
}

//** Pintar todas las plantas al cargar el html
printPlants(productos, grid);


function filterPlants(category) {
    if (category === 'todas') {
        printPlants(productos, grid);
    } else {
        const filteredProducts = productos.filter(product => product.categoria.toLowerCase().includes(category.toLowerCase()));
        printPlants(filteredProducts, grid);
    }
}

// Agregar event listener al select
const select = document.getElementById('tipoPlanta');
select.addEventListener('change', (event) => {
    const category = event.target.value;
    filterPlants(category);
});
    
function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    console.log(cart); // Para verificar que el producto se ha agregado correctamente
    updateCartUI();
}

function updateCartUI() {
    const cartContainer = document.querySelector('#cart');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.nombre} - ${item.quantity} x €${item.precio}</p>
        `;
        cartContainer.appendChild(cartItem);
    });
} */ 

// Array de productos importado desde data.js
const contenedorPlantas = document.querySelector("#plantas .grid");

// Función para renderizar los productos
function imprimirProductos(productos) {
  // Limpiar el contenedor antes de agregar productos
  contenedorPlantas.innerHTML = "";

  productos.forEach((producto) => {
    // Crear el artículo para cada producto
    const articulo = document.createElement("article");

    // Contenido dinámico del artículo
    articulo.innerHTML = `
      <figure>
        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid">
      </figure>
      <h3>${producto.nombre}</h3>
      <ul>
        <li>${producto.descripcion}</li>
        <li>Precio: €${producto.precio.toFixed(2)}</li>
        <li>Stock: ${producto.stock}</li>
      </ul>
      <button class="btn btn-success" data-id="${producto.id}">Agregar al carrito</button>
    `;

    // Agregar el artículo al contenedor
    contenedorPlantas.appendChild(articulo);
  });
}

// Llamar a la función para mostrar todos los productos al cargar la página
imprimirProductos(productos);

const productsPerPage = 20; // Número de productos por página
  let currentPage = 1;
  
  // Referencias al DOM
  const buttonNext = document.getElementById(".flex");
  const sectionProducts = document.getElementById("#plantas .grid");
  const selectTipo = document.getElementById("#tipoPlanta");

  function goToPage(event) {
    init(event.target.dataset.page);
  }
  buttons.forEach(button => 
    button.addEventListener("click", goToPage));

  function obtenerTipoProductos (event) {
    let tipo = event.target.value;
    let productosFiltrados = productos;
  }
  
  selectTipo.addEventListener("change", obtenerTipoProductos);

