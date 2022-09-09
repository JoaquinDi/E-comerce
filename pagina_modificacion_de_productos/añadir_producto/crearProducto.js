const listaProductos = () => fetch("http://localhost:3000/producto").then(respuesta => respuesta.json());

const crearProducto = (name, imgUrl, price) =>{
    return fetch("http://localhost:3000/producto", {
        method: "POST", 
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({name,imgUrl,price})
    }).then( respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
    })
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto${id}`, {
        method: "DELETE"
    })
}

export const productoServices = {
    listaProductos,
    crearProducto,
    eliminarProducto
} 