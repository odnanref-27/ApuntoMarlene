
const productos = [
    {
        "id": 1,
        "name": "Chaleco",
        "description": "“Calienta Corazones” es la colección de chalecos para los/as más peques, una prenda súper cómoda para usar en más de una estación.",
        "cost": 700,
        "category": "Botijitas",
        "images": [
            "img/botijitas/chaleco1.jpg",
            "img/botijitas/chaleco2.jpg",
            "img/botijitas/chaleco3.jpg",
        ]
    },
    {
        "id": 2,
        "name": "Mordillo",
        "description": "Pack mordillo y sonajero.",
        "cost": 990,
        "category": "Botijitas",
        "images": [
            "img/botijitas/mordillo.jpg",
            "img/botijitas/mordillo2.jpg",
            "img/botijitas/mordillo3.jpg"
        ]
    },
    {
        "id": 3,
        "name": "Vestido infantil Auguria",
        "description": " Combinacion de tela y crochet, Consultar talle.",
        "cost": 890,
        "category": "Botijitas",
        "images": [
            "img/botijitas/vestiditorojo_1.jpg",
            "img/botijitas/vestiditorojo_2.jpg",
            "img/botijitas/vestiditorojo_3.jpg",
            "img/botijitas/vestiditorojo_4.jpg",
            "img/botijitas/vestidito_5.jpg",
            "img/botijitas/vestidito_6.jpg",
            "img/botijitas/vestidito_7.jpg"
        ]
    },{
        "id": 4,
        "name": "Pelotas Montessori",
        "description": " Tipo 1 en dos tamaños",
        "cost": 550,
        "category": "Botijitas",
        "images": [
            "img/botijitas/pelota2.jpg",
            "img/botijitas/pelota1.jpg",
            "img/botijitas/pelota3.jpg"
        ]
    },{
        "id": 5,
        "name": "Mordillos",
        "description": " Trapillo y Madera",
        "cost": 150,
        "category": "Botijitas",
        "images": [
            "img/botijitas/mordillomadera1.jpg",
            "img/botijitas/mordillomadera2.jpg",
            "img/botijitas/mordillomadera3.jpg"
        ]
    },
    
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


