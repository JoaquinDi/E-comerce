import { productoServices } from "./añadir_producto/crearProducto.js";


const form = document.querySelector("[data-form-formulario]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const name = document.querySelector("[data-form-nombre]").value;
  const imgUrl = document.querySelector("[data-form-url]").value;
  const price = document.querySelector("[data-form-precio]").value;

  productoServices.crearProducto(name, imgUrl, price).then(respuesta => {
    window.location.href = "../../index.html";
    console.log(respuesta)
    alert("El producto fue creado con exito ;)")
  }).catch(err => {
    console.log(err, " - error")
  })
});
