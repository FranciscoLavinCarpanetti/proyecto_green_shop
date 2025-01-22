document.addEventListener("DOMContentLoaded", () => {
  const productosContainer = document.querySelector("#plantas .grid");
  const cartItemsContainer = document.querySelector(".cart-items");
  const tipoPlantaSelect = document.getElementById("tipoPlanta");
  const vaciarCarritoBtn = document.querySelector("#vaciarCarrito");
  const anteriorBtn = document.querySelector(".Anterior");
  const posteriorBtn = document.querySelector(".posterior");
  const comprarBtn = document.querySelector("#checkout"); // Botón comprar
  const totalArticulos = document.querySelector("#totalArticulos"); // Contador de artículos
  const totalPrecio = document.querySelector("#totalPrecio"); // Total acumulado
  const cartBadge = document.querySelector("#cartBadge"); // Contador en el ícono del carrito
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
    let totalCantidad = 0;
    let totalCosto = 0;

    if (carrito.length === 0) {
      cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
      totalArticulos.textContent = "Artículos: 0";
      totalPrecio.textContent = "Total: €0.00";
      actualizarCartBadge(); // Actualizar contador en el ícono
      return;
    }

    carrito.forEach(item => {
      totalCantidad += item.cantidad;
      totalCosto += item.precio * item.cantidad;

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <p>${item.nombre} - €${item.precio.toFixed(2)} x ${item.cantidad}</p>
        <button class="btn btn-sm btn-danger" data-id="${item.id}">Eliminar</button>
      `;
      cartItemsContainer.appendChild(div);
    });

    // Actualizar el resumen
    totalArticulos.textContent = `Artículos: ${totalCantidad}`;
    totalPrecio.textContent = `Total: €${totalCosto.toFixed(2)}`;
    actualizarCartBadge(); // Actualizar contador en el ícono
  };

  // Función para actualizar el contador en el ícono del carrito
  const actualizarCartBadge = () => {
    const totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0);
    cartBadge.textContent = totalCantidad;

    // Ocultar el círculo si no hay artículos
    if (totalCantidad === 0) {
      cartBadge.style.display = "none";
    } else {
      cartBadge.style.display = "flex";
    }
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

  // Función para eliminar una unidad de un producto del carrito
  const eliminarDelCarrito = (id) => {
    const itemEnCarrito = carrito.find(item => item.id === id); 

    if (itemEnCarrito) {
      itemEnCarrito.cantidad--; 
      if (itemEnCarrito.cantidad === 0) {
        const index = carrito.findIndex(item => item.id === id);
        carrito.splice(index, 1);
      }
    }
    actualizarCarrito(); // Actualizar la vista del carrito
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

  // Inicializar productos y contador del carrito
  mostrarProductos();
  actualizarCartBadge();
});
