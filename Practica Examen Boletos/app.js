let servicio = new Servicio();

function main(){
    let btnGenerar = document.getElementById('btnGenerar');
    btnGenerar.addEventListener('click', generarBoleto);

    let btnMostrar = document.getElementById('btnMostrar');
    btnMostrar.addEventListener('click',mostrarBoletos);

    let btnMostrarPares = document.getElementById('btnMostrarPares');
    btnMostrarPares.addEventListener('click',mostrarBoletosPares);

    let btnMostrarImpares = document.getElementById('btnMostrarImpares');
    btnMostrarImpares.addEventListener('click',mostrarBoletosImpares);
}

function generarBoleto(){
    servicio.generarBoleto(generarIdRnd(0,100000), Date.now);
}

function generarIdRnd(min, max){
    return random = Math.round(Math.random() * (max - min) + min);
}

function mostrarBoletos(){
    servicio.boletos.forEach(element => {
        console.log(element.id);
    });
}

function mostrarBoletosPares(){
    servicio.boletos.forEach(element => {
        if(element.id%2==0)
            console.log(element.id);
    });
}

function mostrarBoletosImpares(){
    servicio.boletos.forEach(element => {
        if(element.id%2!=0)
            console.log(element.id);
    });
}

window.addEventListener('load', main);