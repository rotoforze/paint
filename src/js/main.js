const pizarra = document.querySelector(".pizarra");
let colores = ['#ffffff', '#ffd4d4', '#ffaaaa', '#ff8080', '#ff5555', '#ff2a2a', '#ff0000', '#ff1500', '#ff2a00', '#ff4000', '#ff5500', '#ff6a00', '#ff7f00', '#ff9400', '#ffaa00', '#ffbf00', '#ffd400', '#ffea00', '#ffff00', '#d4ff00', '#aaff00', '#80ff00', '#55ff00', '#2aff00', '#00ff00', '#00d42a', '#00aa55', '#008080', '#0055aa', '#002ad4', '#0000ff', '#0c00ea', '#1900d5', '#2600c0', '#3200ac', '#3f0097', '#4b0082', '#560097', '#6000ac', '#6b00c0', '#7600d5', '#8000ea', '#8b00ff', '#7400d4', '#5d00aa', '#460080', '#2e0055', '#17002a', '#4a4a4a','#000000']
let colorActual = '#000000';

function pintar(event) {
    console.log(event.pageX)
    let x = event.pageX;
    let y = event.pageY;
    console.log(x+"_posX | posY_"+y);

    addColor(event);
}

function addColor(event) {
    const elemTamPincel = document.querySelector(".valorTamPincel");

    let tamanioPincel = 15;
    if (elemTamPincel.value) {
        tamanioPincel = elemTamPincel.value;
    }

    if (tamanioPincel > 100 | tamanioPincel < 1) {
        tamanioPincel = 10;
    }

    let ejeX = event.clientX;
    // if (ejeX > pizarra.offsetWidth) {
    //     ejeX = pizarra.offsetWidth;
    // }
    // if (ejeX < 0) {
    //     ejeX = 0;
    // }

    let ejeY = event.clientY;
    // if (ejeY > pizarra.offsetHeight) {
    //     ejeY = pizarra.offsetHeight;
    // }
    // if (ejeY < 0) {
    //     ejeY = 0;
    // }
    const nuevoElemento = document.createElement("div");
    nuevoElemento.className = "color";
    
    nuevoElemento.setAttribute("style", "top:"+ejeY+"px; left:"+ejeX+"px;background-color:"+colorActual+";height:"+tamanioPincel+"px;width:"+tamanioPincel+"px;");
    pizarra.appendChild(nuevoElemento);
}

function ratonPresionado() {
    pizarra.addEventListener("mousemove", pintar, false);
}
function ratonLiberado() {
    pizarra.removeEventListener("mousemove", pintar, false);
}

function cambiarColor(color) {
    colorActual = color;
    document.body.setAttribute("style", "background-color:"+color+";");
}

function colocarColores() {
    for (let i in colores) {
        document.querySelector(".color"+i).setAttribute("style", "background-color:"+colores[i]+";")
        document.querySelector(".color"+i).addEventListener("click", () => { cambiarColor(colores[i]) });
    }
}
colocarColores();
// pizarra.onmousemove = () => { pintar(MouseEvent) };
// pizarra.addEventListener("mousemove", pintar, false);
pizarra.addEventListener("mousedown", ratonPresionado, false);
pizarra.addEventListener("mouseleave", ratonLiberado, false);
pizarra.addEventListener("mouseup", ratonLiberado, false);