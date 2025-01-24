document.addEventListener("DOMContentLoaded", () => {
  // Referencias a los elementos del DOM
  const productosContainer = document.querySelector("#plantas .grid"); // Contenedor de productos
  const cartItemsContainer = document.querySelector(".cart-items"); // Contenedor del carrito
  const tipoPlantaSelect = document.getElementById("tipoPlanta"); // Selector de categoría de plantas
  const vaciarCarritoBtn = document.querySelector("#vaciarCarrito"); // Botón para vaciar el carrito
  const anteriorBtn = document.querySelector(".Anterior"); // Botón para página anterior
  const posteriorBtn = document.querySelector(".posterior"); // Botón para página siguiente
  const comprarBtn = document.querySelector("#checkout"); // Botón para procesar compra
  const totalArticulos = document.querySelector("#totalArticulos"); // Total de artículos en el carrito
  const totalPrecio = document.querySelector("#totalPrecio"); // Precio total del carrito
  const cartBadge = document.querySelector("#cartBadge"); // Badge del carrito (cantidad de productos)
  const shoppingIcon = document.querySelector("#shoppingIcon"); // Ícono del carrito
  const cartSection = document.querySelector("#cart"); // Sección del carrito
  const carrito = []; // Arreglo para almacenar los productos en el carrito

  // Configuración inicial
  let paginaActual = 1; // Número de la página actual
  const productosPorPagina = 12; // Cantidad de productos por página

  // Función para mostrar productos en la página
  const mostrarProductos = (categoria = "Todas") => {
    productosContainer.innerHTML = ""; // Limpia el contenedor de productos

    // Filtra los productos según la categoría seleccionada
    const productosFiltrados = categoria === "Todas"
      ? productos // Si no hay filtro, muestra todos los productos
      : productos.filter(producto =>
          producto.categoria.toLowerCase().includes(categoria.toLowerCase())
        );

    // Ordena los productos de forma aleatoria
    const productosRandom = [...productosFiltrados].sort(() => Math.random() - 0.5);

    // Paginación: calcula qué productos se deben mostrar en la página actual
    const inicio = (paginaActual - 1) * productosPorPagina;
    const fin = inicio + productosPorPagina;
    const productosPaginados = productosRandom.slice(inicio, fin);

    // Renderiza los productos en el DOM
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

  // Función para actualizar el contenido del carrito
  const actualizarCarrito = () => {
    cartItemsContainer.innerHTML = ""; // Limpia el contenido actual del carrito
    let totalCantidad = 0; // Total de unidades
    let totalCosto = 0; // Precio total

    if (carrito.length === 0) {
      // Muestra un mensaje si el carrito está vacío
      cartItemsContainer.innerHTML = "<p>El carrito está vacío.</p>";
      totalArticulos.textContent = "Artículos: 0";
      totalPrecio.textContent = "Total: €0.00";
      actualizarCartBadge(); // Actualiza el ícono del carrito
      return;
    }

    // Renderiza cada producto dentro del carrito
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

    // Actualiza los totales de artículos y precio
    totalArticulos.textContent = `Artículos: ${totalCantidad}`;
    totalPrecio.textContent = `Total: €${totalCosto.toFixed(2)}`;
    actualizarCartBadge(); // Actualiza el ícono del carrito
  };

  // Función para actualizar el badge del carrito
  const actualizarCartBadge = () => {
    const totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0);
    cartBadge.textContent = totalCantidad; // Muestra la cantidad de productos en el carrito

    // Oculta el badge si no hay productos
    cartBadge.style.display = totalCantidad === 0 ? "none" : "flex";
  };

  // Función para agregar un producto al carrito
  const agregarAlCarrito = (id) => {
    const producto = productos.find(p => p.id === id); // Busca el producto por ID
    const itemEnCarrito = carrito.find(item => item.id === id); // Verifica si ya está en el carrito

    if (itemEnCarrito) {
      // Incrementa la cantidad si ya está en el carrito
      if (itemEnCarrito.cantidad >= producto.stock) {
        alert(`No puedes agregar más unidades de ${producto.nombre}, no hay suficiente stock disponible.`);
        return;
      }
      itemEnCarrito.cantidad++;
    } else {
      // Agrega un nuevo producto al carrito
      if (producto.stock <= 0) {
        alert(`No hay unidades disponibles de ${producto.nombre}.`);
        return;
      }
      carrito.push({ ...producto, cantidad: 1 });
    }

    actualizarCarrito(); // Actualiza el carrito
  };

  // Función para eliminar un producto del carrito
  const eliminarDelCarrito = (id) => {
    const itemEnCarrito = carrito.find(item => item.id === id);

    if (itemEnCarrito) {
      itemEnCarrito.cantidad--;
      if (itemEnCarrito.cantidad === 0) {
        const index = carrito.findIndex(item => item.id === id);
        carrito.splice(index, 1); // Elimina el producto del carrito si su cantidad llega a 0
      }
    }
    actualizarCarrito();
  };

  // Función para cambiar entre páginas de productos
  const cambiarPagina = (direccion) => {
    const totalPaginas = Math.ceil(productos.length / productosPorPagina); // Calcula el total de páginas

    // Cambia la página según la dirección
    if (direccion === "anterior" && paginaActual > 1) {
      paginaActual--;
    } else if (direccion === "posterior" && paginaActual < totalPaginas) {
      paginaActual++;
    }

    mostrarProductos(tipoPlantaSelect.value); // Muestra los productos de la nueva página
  };

  // Función para procesar la compra
  const procesarCompra = () => {
    if (carrito.length === 0) {
      alert("El carrito está vacío. Agrega productos antes de comprar.");
      return;
    }
    alert("Gracias por su compra, el pedido está siendo preparado para el envío.");
    carrito.length = 0; // Vacía el carrito después de la compra
    actualizarCarrito();
  };

  // Mostrar/ocultar el carrito al presionar el ícono
  shoppingIcon.addEventListener("click", () => {
    cartSection.classList.toggle("active");
  });

  // Eventos para manejar clics en el carrito y productos
  productosContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const id = parseInt(e.target.getAttribute("data-id"), 10);
      agregarAlCarrito(id);
    }
  });

  cartItemsContainer.addEventListener("click", (e) => {
    const id = parseInt(e.target.getAttribute("data-id"), 10);
    if (e.target.classList.contains("add-btn")) {
      agregarAlCarrito(id);
    }
    if (e.target.classList.contains("remove-btn")) {
      eliminarDelCarrito(id);
    }
  });

  tipoPlantaSelect.addEventListener("change", (e) => {
    paginaActual = 1; // Reinicia a la primera página
    mostrarProductos(e.target.value); // Muestra los productos de la categoría seleccionada
  });

  anteriorBtn.addEventListener("click", () => cambiarPagina("anterior")); // Ir a la página anterior
  posteriorBtn.addEventListener("click", () => cambiarPagina("posterior")); // Ir a la página siguiente

  vaciarCarritoBtn.addEventListener("click", () => {
    carrito.length = 0; // Vacía el carrito
    actualizarCarrito();
  });

  comprarBtn.addEventListener("click", procesarCompra); // Procesa la compra

  // Inicializa la aplicación
  mostrarProductos(); // Muestra los productos al cargar la página
  actualizarCartBadge(); // Actualiza el badge del carrito
});
