

let dibujos=document.querySelectorAll(".imagenRompe");

const funciondragstart=(event)=>{
    event.dataTransfer.setData("Text", event.target.src);
    
}

const funcionDragover=(event)=>{
    
    event.preventDefault();
}
const funcionDrop=(event)=>{

    let srcImagen=event.dataTransfer.getData("Text");
    let nuevaImagen=event.target.innerHTML=`<img src="${srcImagen}" />`;
    
   
    
    for (const dibujo of dibujos) {
        if (dibujo.src == srcImagen){
        dibujo.style.visibility="hidden";
        
        }
    
    }
}

let contenedorImagen=document.querySelectorAll(".tarjetaRompe");
const reinicio=()=>{

   for (const tarjeta of contenedorImagen) {
    tarjeta.innerHTML=" ";
    tarjeta.innerHTML="<p>Arrastre y suelte la imagen aquí</p>"
    
   }
    for (const dibujo of dibujos) {
       
        dibujo.style.visibility="visible";
        
        }
    
 }

