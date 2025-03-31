const pizarra = document.querySelector(".pizarra");
let colores = ['ffffff', '000000', 'afafaf']

function pintar(event) {
    console.log(event.pageX)
    let x = event.pageX;
    let y = event.pageY;
    console.log(x+"_posX | posY_"+y);

    addColor(event);
}

function addColor(event) {
    const nuevoElemento = document.createElement("div");
    nuevoElemento.className = "color";
    const color = colores[2];
    nuevoElemento.setAttribute("style", "top:"+event.pageY+"px; left:"+event.pageX+"px;background-color:#"+color+";");
    pizarra.appendChild(nuevoElemento);
}

function ratonPresionado() {
    pizarra.addEventListener("mousemove", pintar, false);
}
function ratonLiberado() {
    pizarra.removeEventListener("mousemove", pintar, false);
}

// pizarra.onmousemove = () => { pintar(MouseEvent) };
// pizarra.addEventListener("mousemove", pintar, false);
pizarra.addEventListener("mousedown", ratonPresionado, false);
pizarra.addEventListener("mouseup", ratonLiberado, false);