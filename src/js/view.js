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

const grid = document.querySelector('.grid');

function printOnePlant(product, dom) {
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
printAllPlants(productos, grid);

