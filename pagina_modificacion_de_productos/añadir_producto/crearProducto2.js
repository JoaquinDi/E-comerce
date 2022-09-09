
export const formValores = () => {
    
    const instrumentos = document.querySelector("[data-form-instrumentos]");
    const pedales = document.querySelector("[data-form-pedales]");
    const accesorios = document.querySelector("[data-form-accesorios]");
    
    const img = document.querySelector("[data-form-url]");
    const nombre = document.querySelector("[data-form-nombre]");
    const precio = document.querySelector("[data-form-precio]");
    
    
    const btn = document.querySelector("[data-form-btn]");


const categoria = () => {
    if (instrumentos.checked == true) {
        return instrumentos.value;
    } else if (pedales.checked == true) {
        return pedales.value;
    } else if (accesorios.checked == true) {
        return accesorios.value;
    }
}

btn.addEventListener("click", () => {
    
    console.log(categoria())
    console.log(img.value)
    console.log(nombre.value)
    console.log( "$" + precio.value)
    
}) 

}

formValores()
// const producto = {   
//     categoria,
//     img,
//     nombre,
//     precio
// }

// para crear un nuevo producto, tendira que crear primeo un "li" en "mas_productos.html"
//(que sea hijo del "ul", como todos los que van a ser creados)
// con la clase "producto"

//un "img" con la clase "img_producto"
//un "h3" con la clase "titulo_producto"
//un "p" con la clase "precio"

 