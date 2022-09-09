
import {formValores} from "../pagina_modificacion_de_productos/añadir_producto/crearProducto.js"

const crearProducto = () => {
    const ulInstrumentos = document.getElementById("ul-instrumentos");

    const liInstrumento = document.createElement("li");
    const imgInstrumento = document.createElement("img");
    const h3Instrumento = document.createElement("h3");
    const pPrecio = document.createElement("p");

    liInstrumento.classList.add("producto");
    imgInstrumento.classList.add("img_producto");
    h3Instrumento.classList.add("titulo_producto");
    pPrecio.classList.add("precio");

    imgInstrumento.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeOwp7fcwQAmBZBPzYjj5zaVveuHzyRUOKvg&usqp=CAU"
    h3Instrumento.textContent = "Gibson Les Paul";
    pPrecio.textContent = "1,500.00";

    ulInstrumentos.appendChild(liInstrumento);
    liInstrumento.appendChild(imgInstrumento);
    liInstrumento.appendChild(h3Instrumento);
    liInstrumento.appendChild(pPrecio);

} 

crearProducto()