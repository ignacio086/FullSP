//codigo para mostrar productos
//constantes para tomar valores de campos
const buscar = document.getElementById('enviar');
const bar = document.getElementById('barsearch');

//funcion para obtener informacion.

buscar.addEventListener('click',(event)=>{
    
    fetch('http://localhost:3000/api')
        .then(res=>res.json())
        .then(lista=>{mostrarProductos(lista.productos)});
    
        function mostrarProductos(productos) {
            console.log(productos);
            event.preventDefault();
            console.log(bar.value);
            const container = document.getElementById('container')
            let listapro = productos.filter(producto =>producto.name == bar.value);
            listapro.forEach(producto => {
                container.innerHTML = `
                ${container.innerHTML}
                <div class="card">
                    <img src="${producto.img}"/>
                    <span>Nombre:${producto.name}</span>
                    <h2>Marca:${producto.marca}</h2>
                </card>
                `;
            });
        }
    
});

