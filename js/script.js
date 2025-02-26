
const productos = [
    {
        "id": 1,
        "name": "Musculosa Crochet",
        "description": "Largo: 40cm - Contorno : Regulable",
        "cost": 1200,
        "category": "Prenda",
        "images": [
            "img/prendas/topverde_1.jpg",
            "img/prendas/topverde_2.jpg",
            "img/prendas/topverde_3.jpg",
            "img/prendas/topverde_4.jpg"
        ]
    },
    {
        "id": 2,
        "name": "Musculosa Crochet",
        "description": "Largo: 38cm - Contorno : 100cm",
        "cost": 1200,
        "category": "Prenda",
        "images": [
            "img/prendas/topmulticolor_1.jpg",
            "img/prendas/topmulticolor_2.jpg",
            "img/prendas/topmulticolor_3.jpg",
            "img/prendas/topmulticolor_4.jpg",
            "img/prendas/topmulticolor_5.jpg"
        ]
    },
    {
        "id": 3,
        "name": "Top Crochet Multicolor",
        "description": "Largo: 35cm - Contorno : Regulable",
        "cost": 890,
        "category": "Prenda",
        "images": [
            "img/prendas/topcorto_1.jpg",
            "img/prendas/topcorto_2.jpg",
            "img/prendas/topcorto_3.jpg",
            "img/prendas/topcorto_4.jpg",
            "img/prendas/topcorto_5.jpg"
        ]
    },
    {
        "id": 4,
        "name": "Top Crochet Dela",
        "description": "Largo: 35cm - Contorno : Regulable",
        "cost": 1200,
        "category": "Prenda",
        "images": [
            "img/prendas/topverdeagua_1.jpg",
            "img/prendas/topverdeagua_2.jpg",
            "img/prendas/topverdeagua_3.jpg",
            "img/prendas/topverdeagua_4.jpg",
            "img/prendas/topverdeagua_5.jpg"
        ]
    },
    {
        "id": 5,
        "name": "Top Crochet",
        "description": "Largo: 35cm - Contorno : Regulable",
        "cost": 890,
        "category": "Prenda",
        "images": [
            "img/prendas/topmaya_1.jpg",
            "img/prendas/topmaya_2.jpg",
            "img/prendas/topmaya_3.jpg",
            "img/prendas/topmaya_4.jpg"
        ]
    },
    {
        "id": 6,
        "name": "Vestido infantil Auguria",
        "description": " Combinacion de tela crochet, Consulta talle.",
        "color": "Granate, Rosa",
        "cost": 890,
        "category": "Prenda",
        "images": [
            "img/prendas/vestiditorojo_1.jpg",
            "img/prendas/vestiditorojo_2.jpg",
            "img/prendas/vestiditorojo_3.jpg",
            "img/prendas/vestiditorojo_4.jpg",
            "img/prendas/vestidito_5.jpg",
            "img/prendas/vestidito_6.jpg",
            "img/prendas/vestidito_7.jpg"
        ]
    },
    {
        "id": 7,
        "name": "Top Verano",
        "description": "Hecho a mano en crochet, disponible en varios tamaños.",
        "cost": 500,
        "category": "Prenda",
        "images": [
            "img/prendas/maya_1.jpg",
            "img/prendas/maya_2.jpg",
            "img/prendas/maya_3.jpg",
            "img/prendas/maya_4.jpg",
            "img/prendas/maya_5.jpg"
        ]
    },
    {
        "id": 8,
        "name": "Top Granny",
        "description": "Largo: 55cm - Contorno : Regulable",
        "color": "Crudo",
        "cost": 1400,
        "category": "Prenda",
        "images": [
            "img/prendas/topbluza_1.jpg",
            "img/prendas/topbluza_2.jpg",
            "img/prendas/topbluza_3.jpg",
            "img/prendas/topbluza_4.jpg"
        ]
    },
    {
        "id": 9,
        "name": "Top en crochet",
        "description": "Top coraza - Top verano",
        "cost": 700,
        "category": "Prenda",
        "images": [
            "img/prendas/mayaamarilla_1.jpg",
            "img/prendas/mayaamarilla_2.jpg",
            "img/prendas/mayaamarilla_3.jpg",
            "img/prendas/mayaamarilla_4.jpg"
        ]
    },
    {
        "id": 10,
        "name": "Top Granny",
        "description": "Largo: 50cm - Contorno : Regulable",
        "cost": 1200,
        "category": "Prenda",
        "images": [
            "img/prendas/topinclinado_1.jpg",
            "img/prendas/topinclinado_2.jpg",
            "img/prendas/topinclinado_3.jpg",
            "img/prendas/topinclinado_4.jpg"
        ]
    },
     {      
    //erro  GET https://odnanref-27.github.io/ApuntoMarlene/img/prendas/toparcoiris_1.jpg 404
    
         "id": 11,
         "name": "Musculosa Raibow",
         "description": "Largo: 40cm - Contorno : 80cm",
         "cost": 1200,
         "category": "Prenda",
         "images": [
             "img/prendas/toparcoiris_1.jpg",
             "img/prendas/toparcoiris_2.jpg",
             "img/prendas/toparcoiris_3.jpg"
        ]
    },
    {
        "id": 12,
        "name": "Top crop",
        "description": "Largo: 30cm -  Contorno : Regulable",
        "cost": 950,
        "category": "Prenda",
        "images": [
            "img/prendas/topcrop_1.jpg",
            "img/prendas/topcrop_2.jpg",
            "img/prendas/topcrop_3.jpg",
            "img/prendas/topcrop_4.jpg"
        ]
    }
];
const productsInfo = [];

const contenedorProducts = document.getElementById('contenedorProducts');

productos.forEach((product) => {

    const valueImage = Array.isArray(product.images) && product.images.length > 0 ? product.images[0]
        : "imagen_default.jpg";

    const productCard = document.createElement("div");
    productCard.className = "container col-md-4 col-sm-4 col-12";
    productCard.classList.add("col-md-4", "col-sm-4", "col-12");

    productCard.innerHTML = `
        <div class="card1">
            <img src="${valueImage}" alt="${product.name}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p>${product.description}</p>
                <p>${product.category}</p>
                <h3 class="cash">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor"
                        color="#15c196" class="bi bi-currency-dollar" viewBox="0 0 5 20">
                        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3
                        0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748
                        -3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031
                        c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641
                        1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2
                        1.939V8.73z"/>
                    </svg>
                    ${product.cost}
                </h3>
            </div>
        </div>
    `;

    // Agregar la tarjeta al contenedor
    contenedorProducts.appendChild(productCard);
});

const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-content img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentImages = [];
let currentIndex = 0;

// Función para abrir el modal y mostrar la imagen
function openModal(images, index) {
    currentImages = images;
    currentIndex = index;
    modal.style.display = 'flex';
    modalImg.src = currentImages[currentIndex];
}

// Cerrar el modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Navegar a la imagen anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
});

// Navegar a la siguiente imagen
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
});

// Cerrar el modal si se hace clic fuera de la imagen
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Recorrer las tarjetas de productos y añadir evento para abrir el modal
productos.forEach((product, productIndex) => {
    const productCards = document.querySelectorAll('.card1');
    productCards[productIndex].addEventListener('click', () => {
        openModal(product.images, 0);
    });
});

