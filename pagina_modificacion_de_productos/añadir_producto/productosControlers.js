import {productoServices} from "./crearProducto.js"

const nuevoProducto = (name, price, imgUrl) => {
  const liProducto = document.createElement("li");
  const contenido = `
        <img src="${imgUrl}" alt="" class="img_producto">
        <h3 class="titulo_producto">${name}</h3>
        <p class="precio">${price}</p>
        `;
  liProducto.innerHTML = contenido;
  liProducto.classList.add("producto");
  return liProducto;
};

const productos = document.querySelector("[data-ul-productos]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProducto(elemento.name, elemento.price, elemento.imgUrl)
      );
    });
  } catch (err) {
    console.log(err, " - error pa");
  }
};

render();

