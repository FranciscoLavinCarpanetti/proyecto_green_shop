
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
    
