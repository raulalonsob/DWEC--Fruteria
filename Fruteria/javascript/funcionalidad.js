/**Arrays donde se guardaran los datos*/

var frutas=["melon","manzana","pera","frambuesa","pitaya","arandano","platano","papaya","fresa","melocoton"];
var precios=[0.74, 1.69, 1.59, 12.74, 7.54,7.15, 2.15,5.35,5.74,1.40];
var kilos=[0,0,0,0,0,0,0,0,0,0];


/**
 * Cálculo del precio total, kilos totales y precio medio
 */

function total(){
    let precioTotal=0;

    

    precios.forEach((precio, i, arrayPrecio) => {
        precioTotal = precioTotal + (precio * kilos[i]);
    });

    console.log(precioTotal);

    return precioTotal;

}

function pesoTotal(){
    let total=0
    
    kilos.forEach((peso, i, kilos) => {
        total = total + peso;
    });
    return total;
}
function precioMedio(){ 
    let medio=0;
    medio= (total()/pesoTotal());

    return medio;
}

/**
 * Suma de los kg 
 */

 function sumarMelones(){
     kilos[0]=kilos[0]+1;
     console.log(kilos);
 }

 function sumarManzanas(){
    kilos[1]=kilos[1]+1;
    console.log(kilos);
}

function sumarPeras(){
    kilos[2]=kilos[2]+1;
    console.log(kilos);
}

function sumarFrambuesas(){
    kilos[3]=kilos[3]+1;
    console.log(kilos);
}

function sumarPitayas(){
    kilos[4]=kilos[4]+1;
    console.log(kilos);
}

function sumarArandanos(){
    kilos[5]=kilos[5]+1;
    console.log(kilos);
}

function sumarPlatanos(){
    kilos[6]=kilos[6]+1;
    console.log(kilos);
}

function sumarPapayas(){
    kilos[7]=kilos[7]+1;
    console.log(kilos);
}

function sumarFresas(){
    kilos[8]=kilos[8]+1;
    console.log(kilos);
}

function sumarMelocotones(){
    kilos[9]=kilos[9]+1;
    console.log(kilos);
}

function finalizarPedido(){
    console.log("precio total:" +total());
    console.log("peso total:" +pesoTotal());
    console.log("precio medio:"+precioMedio());
}