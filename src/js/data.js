const productos = [
    { id: 1, nombre: "Lirio blanco", imagen: "https://images.pexels.com/photos/8789648/pexels-photo-8789648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor en forma de campana de color blanco, con un gran aroma y detalles delicados. Ideal para bodas y eventos especiales.", precio: 10.00, stock: 20, 
      categoria: "flor blanca."
    },
    { id: 2, nombre: "Rosa roja", imagen: "https://images.pexels.com/photos/2300713/pexels-photo-2300713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Rosa clásica de pétalos aterciopelados de color rojo intenso. Símbolo del amor y la pasión.", precio: 12.50, stock: 30, categoria: "flor color." },
    { id: 3, nombre: "Tulipán amarillo", imagen: "https://images.pexels.com/photos/3834461/pexels-photo-3834461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor de tallo largo y pétalos amarillos vibrantes, perfecta para alegrar cualquier espacio.", precio: 8.00, stock: 25, categoria: "flor color." },
    { id: 4, nombre: "Margarita blanca", imagen: "https://images.pexels.com/photos/122957/pexels-photo-122957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor sencilla y alegre de pétalos blancos y centro amarillo, símbolo de pureza.", precio: 6.00, stock: 50, categoria: "flor blanca." },
    { id: 5, nombre: "Orquídea morada", imagen: "https://images.pexels.com/photos/20233861/pexels-photo-20233861/free-photo-of-naturaleza-flores-purpura-morado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor exótica con pétalos de color morado vibrante y detalles delicados, ideal para decoración.", precio: 18.00, stock: 15, categoria: "flor color." },
    { id: 6, nombre: "Girasol", imagen: "https://images.pexels.com/photos/1427855/pexels-photo-1427855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor grande de pétalos amarillos que sigue la luz del sol. Perfecta para ambientes cálidos y alegres.", precio: 14.00, stock: 10, categoria: "planta." },
    { id: 7, nombre: "Clavel rosa", imagen: "https://images.pexels.com/photos/6798400/pexels-photo-6798400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor tradicional con pétalos rizados y color rosa suave. Ideal para regalos y arreglos florales.", precio: 7.50, stock: 40, categoria: "flor color." },
    { id: 8, nombre: "Peonía blanca", imagen: "https://images.pexels.com/photos/8532765/pexels-photo-8532765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor grande y fragante con pétalos blancos delicados. Ideal para centros de mesa elegantes.", precio: 20.00, stock: 12, categoria: "flor blanca." },
    { id: 9, nombre: "Azucena roja", imagen: "https://images.pexels.com/photos/18021745/pexels-photo-18021745/free-photo-of-naturaleza-planta-flor-crecimiento.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor de pétalos rojos vibrantes y un aroma embriagador, perfecta para regalar.", precio: 16.00, stock: 18, categoria: "flor color." },
    { id: 10, nombre: "Jazmín", imagen: "https://images.pexels.com/photos/7999920/pexels-photo-7999920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Pequeña flor blanca con un aroma dulce y delicado, ideal para infusiones o decoración.", precio: 5.00, stock: 60, categoria: "arbusto." },
    { id: 11, nombre: "Rosa amarilla", imagen: "https://images.pexels.com/photos/30271922/pexels-photo-30271922/free-photo-of-rosas-amarillas-romanticas-con-ambiente-de-velas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Rosa de pétalos amarillos brillantes, símbolo de amistad y alegría. Ideal para regalar.", precio: 12.00, stock: 25, categoria: "flor color." },
  { id: 12, nombre: "Clavel blanco", imagen: "https://images.pexels.com/photos/6806944/pexels-photo-6806944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor tradicional con pétalos blancos puros, perfecta para eventos elegantes y arreglos florales.", precio: 7.00, stock: 35, categoria: "flor blanca." },
  { id: 13, nombre: "Dalia roja", imagen: "https://images.pexels.com/photos/6281179/pexels-photo-6281179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor exuberante de pétalos rojos profundos, ideal para decoraciones sofisticadas.", precio: 15.00, stock: 20, categoria: "flor color." },
  { id: 14, nombre: "Lavanda", imagen: "https://images.pexels.com/photos/2746155/pexels-photo-2746155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor aromática de color púrpura, conocida por sus propiedades relajantes y decorativas.", precio: 8.00, stock: 40, categoria: "arbusto." },
  { id: 15, nombre: "Hortensia azul", imagen: "https://images.pexels.com/photos/28889079/pexels-photo-28889079/free-photo-of-ramo-de-hortensias-azules-sobre-libro-antiguo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor de gran tamaño con pétalos azul pastel, ideal para bodas y eventos formales.", precio: 18.00, stock: 12, categoria: "flor color." },
  { id: 16, nombre: "Magnolia blanca", imagen: "https://images.pexels.com/photos/4210811/pexels-photo-4210811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor elegante con pétalos blancos y un aroma suave, símbolo de pureza.", precio: 22.00, stock: 15, categoria: "flor blanca." },
  { id: 17, nombre: "Crisantemo amarillo", imagen: "https://images.pexels.com/photos/30231827/pexels-photo-30231827/free-photo-of-elegante-arreglo-floral-en-jarron-de-cristal.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor vibrante con pétalos amarillos en capas, perfecta para alegrar cualquier espacio.", precio: 10.00, stock: 30, categoria: "flor color." },
  { id: 18, nombre: "Amapola roja", imagen: "https://images.pexels.com/photos/17298922/pexels-photo-17298922/free-photo-of-naturaleza-campo-verano-flor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor delicada de pétalos rojos intensos, símbolo de pasión y fuerza.", precio: 9.50, stock: 45, categoria: "flor color." },
  { id: 19, nombre: "Gerbera rosa", imagen: "https://images.pexels.com/photos/17376247/pexels-photo-17376247/free-photo-of-mujer-mano-petalos-flor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor alegre y colorida con pétalos rosa intenso, perfecta para decorar cualquier ocasión.", precio: 11.00, stock: 25, categoria: "flor color." },
  { id: 20, nombre: "Flor de loto", imagen: "https://images.pexels.com/photos/424134/pexels-photo-424134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor mística y elegante de pétalos suaves en tonos pastel, símbolo de pureza y espiritualidad.", precio: 25.00, stock: 10, categoria: "flor blanca." },
  { id: 21, nombre: "Anémona púrpura", imagen: "https://images.pexels.com/photos/5501095/pexels-photo-5501095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor delicada de color púrpura con un centro oscuro, ideal para arreglos románticos.", precio: 14.00, stock: 20, categoria: "flor color." },
  { id: 22, nombre: "Fresia blanca", imagen: "https://images.pexels.com/photos/19752287/pexels-photo-19752287/free-photo-of-petalos-planta-blanco-flor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor pequeña y fragante con pétalos blancos, ideal para ramos de novia y decoraciones.", precio: 12.50, stock: 35, categoria: "flor blanca." },
  { id: 23, nombre: "Zinnia naranja", imagen: "https://images.pexels.com/photos/1546617/pexels-photo-1546617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor vibrante con pétalos de color naranja, perfecta para decoraciones alegres.", precio: 9.00, stock: 30, categoria: "flor color." },
  { id: 24, nombre: "Caléndula", imagen: "https://images.pexels.com/photos/2849599/pexels-photo-2849599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor medicinal con pétalos de color naranja brillante, conocida por sus propiedades curativas.", precio: 8.00, stock: 50, categoria: "flor color." },
  { id: 25, nombre: "Campanilla azul", imagen: "https://images.pexels.com/photos/19599852/pexels-photo-19599852/free-photo-of-flores-azules-en-la-pradera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor pequeña y delicada con pétalos azul claro, ideal para jardines y arreglos florales.", precio: 7.50, stock: 40, categoria: "flor color." },
  { id: 26, nombre: "Gladiolo rojo", imagen: "https://images.pexels.com/photos/12595057/pexels-photo-12595057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor alta y majestuosa con pétalos rojos vibrantes, ideal para eventos formales.", precio: 15.00, stock: 18, categoria: "flor color." },
  { id: 27, nombre: "Flor de cerezo", imagen: "https://images.pexels.com/photos/2115371/pexels-photo-2115371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor delicada de color rosa suave, símbolo de la primavera y la renovación.", precio: 10.00, stock: 25, categoria: "flor color." },
  { id: 28, nombre: "Narciso amarillo", imagen: "https://images.pexels.com/photos/3834461/pexels-photo-3834461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor de pétalos amarillos brillantes, símbolo de esperanza y nuevos comienzos.", precio: 8.50, stock: 30, categoria: "flor color." },
  { id: 29, nombre: "Alegría del hogar", imagen: "https://images.pexels.com/photos/8500495/pexels-photo-8500495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor pequeña y colorida, perfecta para alegrar interiores con su vibrante belleza.", precio: 6.00, stock: 45, categoria: "flor color." },
  { id: 30, nombre: "Verbena morada", imagen: "https://images.pexels.com/photos/30259490/pexels-photo-30259490/free-photo-of-primer-plano-de-una-margarita-africana-morada-en-flor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", descripcion: "Flor pequeña y aromática con pétalos morados, ideal para jardines y decoraciones exteriores.", precio: 7.00, stock: 50, categoria: "flor color." },
  ];


  const productsPerPage = 20; // Número de productos por página
  let currentPage = 1;
  
  // Referencias al DOM
  const productGrid = document.getElementById(".flex");
  const prevPageBtn = document.getElementById("btn btn-outline-success Anterior");
  const nextPageBtn = document.getElementById("btn btn-outline-success posterior");
  
  // Función para renderizar los productos en la página actual
  function renderProducts(page) {
      // Calcular índices
      const startIndex = (page - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
  
      // Obtener productos para la página actual
      const currentProducts = productos.slice(startIndex, endIndex);
  
      // Limpiar el grid y renderizar productos
      productGrid.innerHTML = "";
      currentProducts.forEach(product => {
          productGrid.innerHTML += `
              <article>
                  <figure>
                      <img src="${product.imagen}" alt="${product.nombre}">
                  </figure>
                  <h3>${product.nombre}</h3>
                  <ul>
                      <li>${product.descripcion}</li>
                      <li>Precio: €${product.precio.toFixed(2)}</li>
                  </ul>
                  <button>Agregar al carrito</button>
              </article>
          `;
      });
  
      // Desactivar/activar botones según la página actual
      prevPageBtn.disabled = page === 1;
      nextPageBtn.disabled = endIndex >= productos.length;
  }
  
  // Event Listeners para botones de paginación
  prevPageBtn.addEventListener("click", () => {
      if (currentPage > 1) {
          currentPage--;
          renderProducts(currentPage);
      }
  });
  
  nextPageBtn.addEventListener("click", () => {
      if (currentPage * productsPerPage < productos.length) {
          currentPage++;
          renderProducts(currentPage);
      }
  });
  
  // Renderizar la primera página al cargar
  renderProducts(currentPage);
  