document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los elementos del DOM
  const productosContainer = document.querySelector("#plantas .grid");
  const cartItemsContainer = document.querySelector(".cart-items");
  const tipoPlantaSelect = document.getElementById("tipoPlanta");
  const vaciarCarritoBtn = document.querySelector("#vaciarCarrito");
  const anteriorBtn = document.querySelector(".Anterior");
  const posteriorBtn = document.querySelector(".posterior");
  const comprarBtn = document.querySelector("#checkout");
  const totalArticulos = document.querySelector("#totalArticulos");
  const totalPrecio = document.querySelector("#totalPrecio");
  const cartBadge = document.querySelector("#cartBadge");
  const shoppingIcon = document.querySelector("#shoppingIcon");
  const cartSection = document.querySelector("#cart");
  const carrito = [];

  // Configuración inicial
  let paginaActual = 1;
  const productosPorPagina = 12;

  // Mostrar productos
  const mostrarProductos = (categoria = "Todas") => {
    productosContainer.innerHTML = "";

    // Filtrar y ordenar productos
    const productosFiltrados = categoria === "Todas"
      ? productos
      : productos.filter(producto =>
          producto.categoria.toLowerCase().includes(categoria.toLowerCase())
        );

    const productosRandom = [...productosFiltrados].sort(() => Math.random() - 0.5);

    // Paginar productos
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
          <li>Stock disponible: ${producto.stock}</li>
        </ul>
        <button class="btn btn-outline-primary" data-id="${producto.id}">Agregar al carrito</button>
      `;
      productosContainer.appendChild(articulo);
    });
  };

  // Actualizar carrito
  const actualizarCarrito = () => {
    cartItemsContainer.innerHTML = "";
    let totalCantidad = 0;
    let totalCosto = 0;

    if (carrito.length === 0) {
      cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
      totalArticulos.textContent = "Artículos: 0";
      totalPrecio.textContent = "Total: €0.00";
      actualizarCartBadge();
      return;
    }

    // Renderizar cada producto en el carrito
    carrito.forEach(item => {
      totalCantidad += item.cantidad;
      totalCosto += item.precio * item.cantidad;

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <p>${item.nombre} - €${item.precio.toFixed(2)} x ${item.cantidad}</p>
        <div>
          <button class="btn btn-sm btn-success add-btn" data-id="${item.id}">+</button>
          <button class="btn btn-sm btn-danger remove-btn" data-id="${item.id}">-</button>
        </div>
      `;
      cartItemsContainer.appendChild(div);
    });

    // Actualizar el resumen del carrito
    totalArticulos.textContent = `Artículos: ${totalCantidad}`;
    totalPrecio.textContent = `Total: €${totalCosto.toFixed(2)}`;
    actualizarCartBadge();
  };

  // Actualizar el ícono del carrito
  const actualizarCartBadge = () => {
    const totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0);
    cartBadge.textContent = totalCantidad;

    cartBadge.style.display = totalCantidad === 0 ? "none" : "flex";
  };

  // Agregar producto al carrito
  const agregarAlCarrito = (id) => {
    const producto = productos.find(p => p.id === id);
    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
      if (itemEnCarrito.cantidad >= producto.stock) {
        alert(`No puedes agregar más unidades de ${producto.nombre}, no hay suficiente stock disponible.`);
        return;
      }
      itemEnCarrito.cantidad++;
    } else {
      if (producto.stock <= 0) {
        alert(`No hay unidades disponibles de ${producto.nombre}.`);
        return;
      }
      carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito();
  };

  // Eliminar producto del carrito
  const eliminarDelCarrito = (id) => {
    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
      itemEnCarrito.cantidad--;
      if (itemEnCarrito.cantidad === 0) {
        const index = carrito.findIndex(item => item.id === id);
        carrito.splice(index, 1);
      }
    }
    actualizarCarrito();
  };

  // Incrementar la cantidad de un producto en el carrito
  const incrementarCantidad = (id) => {
    const producto = productos.find(p => p.id === id);
    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
      if (itemEnCarrito.cantidad >= producto.stock) {
        alert(`No puedes agregar más unidades de ${producto.nombre}, no hay suficiente stock disponible.`);
        return;
      }
      itemEnCarrito.cantidad++;
      actualizarCarrito();
    }
  };

  // Cambiar de página
  const cambiarPagina = (direccion) => {
    const totalPaginas = Math.ceil(productos.length / productosPorPagina);

    if (direccion === "anterior" && paginaActual > 1) {
      paginaActual--;
    } else if (direccion === "posterior" && paginaActual < totalPaginas) {
      paginaActual++;
    }

    mostrarProductos(tipoPlantaSelect.value);
  };

  // Procesar la compra
  const procesarCompra = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de comprar.");
      return;
    }
    alert("Gracias por su compra, el pedido está siendo preparado para el envío.");
    carrito.length = 0;
    actualizarCarrito();
  };

  // Mostrar/ocultar el carrito al presionar el ícono
  shoppingIcon.addEventListener("click", () => {
    cartSection.classList.toggle("active");
  });

  // Eventos
  productosContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.getAttribute("data-id"), 10);
      agregarAlCarrito(id);
    }
  });

  cartItemsContainer.addEventListener("click", (e) => {
    const id = parseInt(e.target.getAttribute("data-id"), 10);
    if (e.target.classList.contains("add-btn")) {
      incrementarCantidad(id);
    }
    if (e.target.classList.contains("remove-btn")) {
      eliminarDelCarrito(id);
    }
  });

  tipoPlantaSelect.addEventListener("change", (e) => {
    paginaActual = 1;
    mostrarProductos(e.target.value);
  });

  anteriorBtn.addEventListener("click", () => cambiarPagina("anterior"));
  posteriorBtn.addEventListener("click", () => cambiarPagina("posterior"));

  vaciarCarritoBtn.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
  });

  comprarBtn.addEventListener("click", procesarCompra);

  // Inicializar
  mostrarProductos();
  actualizarCartBadge();
});
