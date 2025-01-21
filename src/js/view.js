
/*const contenedorPlantas = document.querySelector("#plantas .grid");

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

// filtar productos por tipo de planta

/*const selectTipo = document.querySelector("tipoPlanta");

 /*function selectTipo(categoria, list) {
    return list.filter((producto) => producto.categoria.toLowerCase() === categoria.toLowerCase());
 }*/




/*function filtrarProductos(event) {
    let selectorPlanta = event.target.value;
    const listaPlantas = filterByType(selectorPlanta, productos);
    printAllProducts(listaPlantas, contenedorPlantas);
    
}
selectTipo.addEventListener("change", filtrarProductos);*/

/**const productos = [
    // ... tu array de productos ...
];*/












/**const contenedorPlantas = document.querySelector("#plantas .grid");
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
        printPlants(productos, contenedorPlantas);
    } else {
        const filteredProducts = productos.filter(product => product.categoria.toLowerCase().includes(category.toLowerCase()));
        printPlants(filteredProducts, contenedorPlantas);
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
printPlants(productos, contenedorPlantas);*/



























document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.querySelector("#plantas .grid");
    const cartItemsContainer = document.querySelector(".cart-items");
    const tipoPlantaSelect = document.getElementById("tipoPlanta");
    const carrito = [];
  
    // Función para mostrar productos en la página
    const mostrarProductos = (categoria = "Todas") => {
      productosContainer.innerHTML = ""; // Limpiar contenido anterior
      const productosFiltrados = categoria === "Todas" 
        ? productos 
        : productos.filter(producto => producto.categoria.toLowerCase().includes(categoria.toLowerCase()));
  
      productosFiltrados.forEach(producto => {
        const articulo = document.createElement("article");
        articulo.innerHTML = `
          <figure>
            <img src="${producto.imagen}" alt="${producto.nombre}">
          </figure>
          <h3>${producto.nombre}</h3>
          <ul>
            <li>${producto.descripcion}</li>
            <li>Precio: €${producto.precio.toFixed(2)}</li>
          </ul>
          <button class="btn btn-outline-primary" data-id="${producto.id}">Agregar al carrito</button>
        `;
        productosContainer.appendChild(articulo);
      });
    };
  
    // Función para actualizar el carrito
    const actualizarCarrito = () => {
      cartItemsContainer.innerHTML = ""; // Limpiar carrito actual
      if (carrito.length === 0) {
        cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
        return;
      }
  
      carrito.forEach(item => {
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <p>${item.nombre} - €${item.precio.toFixed(2)} x ${item.cantidad}</p>
          <button class="btn btn-sm btn-danger" data-id="${item.id}">Eliminar</button>
        `;
        cartItemsContainer.appendChild(div);
      });
    };
  
    // Función para agregar un producto al carrito
    const agregarAlCarrito = (id) => {
      const producto = productos.find(p => p.id === id);
      const itemEnCarrito = carrito.find(item => item.id === id);
  
      if (itemEnCarrito) {
        itemEnCarrito.cantidad++;
      } else {
        carrito.push({ ...producto, cantidad: 1 });
      }
      actualizarCarrito();
    };
  
    // Función para eliminar un producto del carrito
    const eliminarDelCarrito = (id) => {
      const index = carrito.findIndex(item => item.id === id);
      if (index !== -1) {
        carrito.splice(index, 1);
      }
      actualizarCarrito();
    };
  
    // Event Listeners
    productosContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const id = parseInt(e.target.getAttribute("data-id"), 10);
        agregarAlCarrito(id);
      }
    });
  
    cartItemsContainer.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        const id = parseInt(e.target.getAttribute("data-id"), 10);
        eliminarDelCarrito(id);
      }
    });
  
    tipoPlantaSelect.addEventListener("change", (e) => {
      mostrarProductos(e.target.value);
    });

    // Inicializar productos
    mostrarProductos();
  });
  // Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    const confirmar = confirm(`¿Quieres agregar "${producto.nombre}" al carrito?`);
    if (confirmar) {
        // Lógica para agregar el producto al carrito
        const cartItems = document.querySelector('.cart-items');

        // Crear el elemento para el producto
        const item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="cart-img">
            <span>${producto.nombre} - €${producto.precio.toFixed(2)}</span>
            <button class="btn btn-sm btn-danger eliminar-item">Eliminar</button>
        `;
        cartItems.appendChild(item);

        // Mostrar mensaje de éxito
        alert(`"${producto.nombre}" fue agregado al carrito.`);
    } else {
        // Mostrar mensaje si se cancela
        alert("El producto no fue agregado.");
    }
}



































//   // Referencias al DOM
//   const productsContainer = document.getElementById("products");
//   const cartItemsContainer = document.getElementById("cart-items");
//   const totalElement = document.getElementById("total");
  
//   // Carrito de compras
//   let cart = [];
  
//   // Crear productos dinámicamente
//   products.forEach((product) => {
//     const productDiv = document.createElement("div");
//     productDiv.classList.add("product");
  
//     productDiv.innerHTML = `
//       <h3>${product.name}</h3>
//       <p>Precio: $${product.price}</p>
//       <button data-id="${product.id}">Agregar al carrito</button>
//     `;
  
//     productsContainer.appendChild(productDiv);
//   });
  
//   // Agregar eventos a los botones "Agregar al carrito"
//   productsContainer.addEventListener("click", (event) => {
//     if (event.target.tagName === "BUTTON") {
//       const productId = parseInt(event.target.getAttribute("data-id"));
//       const product = products.find((p) => p.id === productId);
//       addToCart(product);
//     }
//   });
  
//   // Función para agregar un producto al carrito
//   function addToCart(product) {
//     // Verificar si ya está en el carrito
//     const existingProduct = cart.find((item) => item.id === product.id);
  
//     if (existingProduct) {
//       existingProduct.quantity++;
//     } else {
//       cart.push({ ...product, quantity: 1 });
//     }
  
//     renderCart();
//   }
  
//   // Función para renderizar el carrito
//   function renderCart() {
//     // Limpiar la lista actual
//     cartItemsContainer.innerHTML = "";
  
//     // Calcular total
//     let total = 0;
  
//     cart.forEach((item) => {
//       const li = document.createElement("li");
//       li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
//       cartItemsContainer.appendChild(li);
  
//       total += item.price * item.quantity;
//     });
  
//     // Actualizar el total
//     totalElement.textContent = `Total: $${total}`;
//   }
  
//   // Evento para simular la compra
//   document.getElementById("checkout-btn").addEventListener("click", () => {
//     if (cart.length === 0) {
//       alert("El carrito está vacío.");
//       return;
//     }
  
//     alert("Compra realizada con éxito.");
//     cart = []; // Vaciar el carrito después de la compra
//     renderCart();
//   });
  


//   document.getElementById("add-to-cart").addEventListener("click", function () {
//     const cart = document.getElementById("cart");
//     cart.classList.remove("hidden");
//     cart.classList.add("visible");
// });
    
