console.log("probando json de productos")


const productos = [

    {
        id: 001,
        nombre: "Joggin 1",
        precio: 2700,
        imagen: "../image/joggings.jpeg",

    },

    {
        id: 002,
        nombre: "Joggin 2",
        precio: 2700,
        imagen: "../image/jogin 1.jpeg",

    },

    {
        id: 003,
        nombre: "Joggin 3",
        precio: 2700,
        imagen: "../image/jogin 2.jpeg",

    },

    {
        id: 004,
        nombre: "Remeron 1",
        precio: 3100,
        imagen: "../image/remerones.jpeg",

    },

    {
        id: 005,
        nombre: "Remeron 2",
        precio: 3120,
        imagen: "../image/remeron 1.jpeg",

    },

    {
        id: 006,
        nombre: "Remereron 3",
        precio: 3110,
        imagen: "../image/remeron 2.jpeg",

    }

]

let carritoCompras = []

console.log(productos)

let contenedorProductos = document.getElementById("contenedorProductos")



console.log(contenedorProductos)

productos.forEach((productoSolo)=>{

    console.log(productoSolo.id)
    console.log(productoSolo.nombre)

    let contenedor = document.createElement("div")

    contenedor.innerHTML = `
    
    <div class="col">
    <div class="card">
      <img src="${productoSolo.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${productoSolo.nombre}</h5>
        <h2>${productoSolo.precio}</h2>
         </div>
         <div class="d-grid gap-2">
    <button id="botonComprar" class="btn btn-primary" type="button">Comprar</button>
  
</div>
        </div>
    </div>
    
    `

    contenedorProductos.append(contenedor)

    





})
