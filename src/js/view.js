function imprimirProductos(productos) {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos
  
    productos.forEach(producto => {
      const productoElemento = document.createElement('div');
      productoElemento.classList.add('producto');
  
      productoElemento.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio.toFixed(2)}</p>
        <p>Stock: ${producto.stock}</p>
      `;
  
      contenedor.appendChild(productoElemento);
    });
  }
  
  // Ejemplo de uso
  getAllPlantas('').then(data => {
    imprimirProductos(data);
  });