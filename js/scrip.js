/* creo las distintas constantes para cada funcion */
const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("cart-icon");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");



let carrito = JSON.parse(localStorage.getItem("carritooo")) || [];

productos.forEach((product)=> {
    let content = document.createElement("div");
    content.className = "cardd";
    content.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p class="price">${product.precio} $</p>
    `;

    
    shopContent.append(content);

    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";

    content.append(comprar);


    comprar.addEventListener("click", () =>{
    
    const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
    if (repeat){
        carrito.map((prod) => {
            if(prod.id === product.id){
                prod.cantidad++;
            }
        });
    }else {
    

        carrito.push({
            id : product.id,
            img : product.img,
            nombre: product.nombre,
            precio: product.precio,
            cantidad: product.cantidad,
        });
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
        }
    });
});


/* Utilizo local storage */
const saveLocal = () => {
    localStorage.setItem("carritooo", JSON.stringify(carrito));
};

/* Fetch */
const pedirProductos = () => {
    return new Promise((resolve,reject) =>{
    });
};

let productosCarrito = []

    let lista = document.getElementById("contenedor")


    function mostrarProductos(array){

        array.forEach(item => {
            const span = document.createElement('span')

            span.textContent = `${item.id} y ${item.nombre} `

            lista.append(span)

        });

    }

    pedirProductos()
        .then((res)=>{
            productosCarrito = res
            mostrarProductos(productosCarrito)
        })





        console.log( fetch('../data.json') )