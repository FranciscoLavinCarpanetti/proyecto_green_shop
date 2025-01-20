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

    if (contenedorPlantas) {
        productos.forEach(producto => {
            // Crear elementos dinámicamente
            const articulo = document.createElement("article");
            const figura = document.createElement("figure");
            const img = document.createElement("img");
            const h3 = document.createElement("h3");
            const ul = document.createElement("ul");
            const liDescripcion = document.createElement("li");
            const liPrecio = document.createElement("li");
            const boton = document.createElement("button");

            // Configurar elementos con contenido dinámico
            img.src = producto.imagen;
            img.alt = producto.nombre;
            h3.textContent = producto.nombre;
            liDescripcion.textContent = producto.descripcion;
            liPrecio.textContent = `Precio: €${producto.precio.toFixed(2)}`;
            boton.textContent = "Agregar al carrito";

           // Configurar elementos
           figura.appendChild(img);

           ul.append(liDescripcion, liPrecio); // Añadir directamente varios elementos

         articulo.append(figura, h3, ul, boton); // Añadir directamente al artículo
            // Agregar artículo al contenedor
            contenedorPlantas.appendChild(articulo);
        });
    } else {
        console.error("No se encontró el contenedor para las plantas.");
    }
___________________



/**const product = document.querySelector('#plantas .grid');
const cart = [];

function printOnePlant(product, dom) {
    const article = document.createElement('article');
    article.classList.add(product.categoria);
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    img.src = product.imagen;
    img.alt = product.nombre;
    const h3 = document.createElement('h3');
    h3.textContent = product.nombre;
    const ul = document.createElement('ul');
    ul.innerHTML = `<li>${product.descripcion}</li>
                    <li>Precio: €${product.precio}</li>
                    <li>Stock: ${product.stock} unidades</li>`;
    const button = document.createElement('button');
    button.textContent = 'Agregar al carrito';
    button.addEventListener('click', () => addToCart(product));
    figure.append(img, h3, ul, button);
    article.appendChild(figure);
    dom.appendChild(article);
}

function printPlants(products, dom) {
    dom.innerHTML = '';
    if (products.length > 0) {
        products.forEach(product => printOnePlant(product, dom));
    } else { 
        dom.innerHTML = '<p>No hay productos disponibles</p>';
    }
}

function filterPlants(category) {
    if (category === 'todas') {
        printPlants(productos, grid);
    } else {
        const filteredProducts = productos.filter(product => product.categoria.toLowerCase().includes(category.toLowerCase()));
        printPlants(filteredProducts, grid);
    }
}

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
    const cartContainer = document.querySelector('#cart .cart-items');
    cartContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.nombre} - ${item.quantity} x €${item.precio}</p>
            <button class="remove" data-id="${item.id}">Eliminar</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    // Agregar event listener a los botones de eliminar
    const removeButtons = document.querySelectorAll('.cart-item .remove');
    removeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const id = parseInt(event.target.dataset.id);
            removeFromCart(id);
        });
    });
}

function removeFromCart(id) {
    const productIndex = cart.findIndex(item => item.id === id);
    if (productIndex !== -1) {
        cart.splice(productIndex, 1);
        updateCartUI();
    }
}

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Compra realizada con éxito!');
        cart.length = 0; // Vaciar el carrito
        updateCartUI();
    } else {
        alert('El carrito está vacío.');
    }
});

// Pintar todas las plantas al cargar la página
printPlants(productos, grid);*/
// Simulación de productos

  // Referencias al DOM
  const productsContainer = document.getElementById("products");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalElement = document.getElementById("total");
  
  // Carrito de compras
  let cart = [];
  
  // Crear productos dinámicamente
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
  
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Precio: $${product.price}</p>
      <button data-id="${product.id}">Agregar al carrito</button>
    `;
  
    productsContainer.appendChild(productDiv);
  });
  
  // Agregar eventos a los botones "Agregar al carrito"
  productsContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      const productId = parseInt(event.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });
  
  // Función para agregar un producto al carrito
  function addToCart(product) {
    // Verificar si ya está en el carrito
    const existingProduct = cart.find((item) => item.id === product.id);
  
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    renderCart();
  }
  
  // Función para renderizar el carrito
  function renderCart() {
    // Limpiar la lista actual
    cartItemsContainer.innerHTML = "";
  
    // Calcular total
    let total = 0;
  
    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
      cartItemsContainer.appendChild(li);
  
      total += item.price * item.quantity;
    });
  
    // Actualizar el total
    totalElement.textContent = `Total: $${total}`;
  }
  
  // Evento para simular la compra
  document.getElementById("checkout-btn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("El carrito está vacío.");
      return;
    }
  
    alert("Compra realizada con éxito.");
    cart = []; // Vaciar el carrito después de la compra
    renderCart();
  });
  

