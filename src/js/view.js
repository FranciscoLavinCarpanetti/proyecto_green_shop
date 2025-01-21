/**document.addEventListener("DOMContentLoaded", () => {
    // Obtener los primeros 20 productos
    const primeros20Productos = productos.slice(0, 20);
    const productosContainer = document.querySelector("#plantas .grid");
    const cartItemsContainer = document.querySelector(".cart-items");
    const tipoPlantaSelect = document.getElementById("tipoPlanta");
    const vaciarCarritoBtn = document.querySelector("#vaciarCarrito");
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
    productosContainer.addEventListener("click", (even) => {
      if (e.target.tagName === "BUTTON") {
        const id = parseInt(even.target.getAttribute("data-id"), 10);
        agregarAlCarrito(id);
      }
    });
  
    cartItemsContainer.addEventListener("click", (even) => {
      if (even.target.tagName === "BUTTON") {
        const id = parseInt(e.target.getAttribute("data-id"), 10);
        eliminarDelCarrito(id);
      }
    });
  
    tipoPlantaSelect.addEventListener("change", (even) => {
      mostrarProductos(even.target.value);
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



// Función para vaciar el carrito



function vaciarCarrito() {
    const confirmar = confirm("¿Estás seguro de que deseas vaciar el carrito?");
    if (confirmar) {
        const cartItems = document.querySelector('.cart-items');
        cartItems.innerHTML = '';
        alert("El carrito ha sido vaciado.");
    } else {
        alert("El carrito no se vació.");
    }
}

// Eventos iniciales
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(); // Cargar productos al cargar la página

    // Asignar evento al botón de vaciar carrito
    document.getElementById('vaciarCarrito').addEventListener('click', vaciarCarrito);
});*/


document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.querySelector("#plantas .grid");
    const cartItemsContainer = document.querySelector(".cart-items");
    const tipoPlantaSelect = document.getElementById("tipoPlanta");
    const vaciarCarritoBtn = document.querySelector("#vaciarCarrito");
    const anteriorBtn = document.querySelector(".Anterior");
    const posteriorBtn = document.querySelector(".posterior");
    const comprarBtn = document.querySelector("#checkout"); // Botón comprar
    const carrito = [];
  
    let paginaActual = 1; // Página inicial
    const productosPorPagina = 15; // Número de productos por página
  
    // Función para mostrar productos en la página
    const mostrarProductos = (categoria = "Todas") => {
      productosContainer.innerHTML = ""; // Limpiar contenido anterior
  
      // Filtrar productos por categoría
      const productosFiltrados = categoria === "Todas"
        ? productos
        : productos.filter(producto => producto.categoria.toLowerCase().includes(categoria.toLowerCase()));
  
      // Ordenar productos aleatoriamente
      const productosRandom = [...productosFiltrados].sort(() => Math.random() - 0.5);
  
      // Obtener productos de la página actual
      const inicio = (paginaActual - 1) * productosPorPagina;
      const fin = inicio + productosPorPagina;
      const productosPaginados = productosRandom.slice(inicio, fin);
  
      // Renderizar productos
      productosPaginados.forEach(producto => {
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
  
    // Función para cambiar de página
    const cambiarPagina = (direccion) => {
      const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  
      if (direccion === "anterior" && paginaActual > 1) {
        paginaActual--;
      } else if (direccion === "posterior" && paginaActual < totalPaginas) {
        paginaActual++;
      }
  
      mostrarProductos(tipoPlantaSelect.value);
    };
  
    // Función para procesar la compra
    const procesarCompra = () => {
      if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de comprar.");
        return;
      }
      alert("Gracias por su compra, el pedido está siendo preparado para el envío.");
      carrito.length = 0; // Vaciar carrito
      actualizarCarrito(); // Refrescar la vista del carrito
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
      paginaActual = 1; // Reiniciar a la primera página al cambiar categoría
      mostrarProductos(e.target.value);
    });
  
    anteriorBtn.addEventListener("click", () => cambiarPagina("anterior"));
    posteriorBtn.addEventListener("click", () => cambiarPagina("posterior"));
  
    vaciarCarritoBtn.addEventListener("click", () => {
      carrito.length = 0; // Vaciar array del carrito
      actualizarCarrito();
    });
  
    comprarBtn.addEventListener("click", procesarCompra); // Evento para botón Comprar
  
    // Inicializar productos
    mostrarProductos();
  });
  