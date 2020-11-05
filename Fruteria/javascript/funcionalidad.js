/**Arrays donde se guardaran los datos*/
/**var frutas=["melon","manzana","pera","frambuesa","pitaya","arandano","platano","papaya","fresa","melocoton"];
var precios=[0.74, 1.69, 1.59, 12.74, 7.54,7.15, 2.15,5.35,5.74,1.40];
var kilos=[0,0,0,0,0,0,0,0,0,0];
 */


 /**
  * Clase principal de Fruta
  */
 class Fruta {
    constructor(nombre, kg, precio) {
        this.nombre = nombre;
        this.kg = kg;
        this.precio = precio;
    }


}
/**
 * Clase hija de la clase Fruta que añade los atributos de verano
 */
class FrutaVerano extends Fruta {
    constructor(nombre, kg, precio, proximidad, region) {
        super(nombre, kg, precio);
        this.proximidad = proximidad;
        this.region = region;
    }
}


/**
 * Clase hija de la clase Fruta que añade los atributos de invierno
 */
class FrutaInvierno extends Fruta {
    constructor(nombre, kg, precio, conservar) {
        super(nombre, kg, precio);
        this.conservar = conservar;
    }

}

/**
 * Objetos donde se almacena la información de cada fruta
 */
var melon =new FrutaVerano("melon",0,0.74,"es de proximidad","Cáceres");
var manzana = new FrutaInvierno("manzana",0,1.69,"se recomienda");
var pera = new FrutaInvierno("pera",0,1.59,"no se recomienda");
var frambuesa = new FrutaVerano("frambuesa",0,1.59,"no es de proximidad","Huelva");
var pitaya = new FrutaInvierno("pitaya",0,7.54,"se recomienda");
var arandano = new FrutaVerano("arandano",0,7.15,"no es de proximidad","Huelva");
var platano = new FrutaInvierno("platano",0,2.15,"no se recomienda");
var papaya = new FrutaVerano("papaya",0,5.35,"no es de proximidad","Islas Canarias");
var fresa = new FrutaVerano("fresa",0,5.74,"no es de proximidad","Malaga");
var melocoton= new FrutaVerano("melocoton",0,1.40,"no es de proximidad","Murcia");



/**
 * Cálculo del precio total, kilos totales y precio medio
 */
/**
 
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

 */


/**
 * Suma de los kg y recogida de peso y kg totales
 */
var pesoTotal = 0;

 function sumarMelones(){
    let kg = prompt("Kilogramos que deseo comprar");
    kg = Number(kilos);
    melon.kg= melon.kg + kg;
    pesoTotal=pesoTotal+kg;
    
 }

 function sumarManzanas(){
    let kg = prompt("Kilogramos que deseo comprar");
    kg = Number(kilos);
    manzana.kg= manzana.kg + kg;
    pesoTotal=pesoTotal+kg;
}

function sumarPeras(){
    let kg = prompt("Kilogramos que deseo comprar");
    kg = Number(kilos);
    manzana.kg= manzana.kg + kg;
    pesoTotal=pesoTotal+kg;
}

function sumarFrambuesas(){
    let kg = prompt("Kilogramos que deseo comprar");
    kg = Number(kilos);
    frambuesa.kg= frambuesa.kg + kg;
    pesoTotal=pesoTotal+kg;
}

function sumarPitayas(){
    let kg = prompt("Kilogramos que deseo comprar");
    kg = Number(kilos);
    pitaya.kg= pitaya.kg + kg;
    pesoTotal=pesoTotal+kg;
}

function sumarArandanos(){
    let kg = prompt("Kilogramos que deseo comprar");
    kg = Number(kilos);
    arandano.kg= arandano.kg + kg;
    pesoTotal=pesoTotal+kg;
}

function sumarPlatanos(){
    let kg = prompt("Kilogramos que deseo comprar");
    kg = Number(kilos);
    platano.kg= platano.kg + kg;
    pesoTotal=pesoTotal+kg;
}

function sumarPapayas(){
    let kg = prompt("Kilogramos que deseo comprar");
    kg = Number(kilos);
    papaya.kg= papaya.kg + kg;
    pesoTotal=pesoTotal+kg;
}

function sumarFresas(){
    let kg = prompt("Kilogramos que deseo comprar");
    kg = Number(kilos);
    melon.kg= melon.kg + kg;
    pesoTotal=pesoTotal+kg;
}

function sumarMelocotones(){
    let kg = prompt("Kilogramos que deseo comprar");
    kg = Number(kilos);
    melon.kg= melon.kg + kg;
    pesoTotal=pesoTotal+kg;
}

function finalizarPedido(){
    console.log("precio total:" +total());
    console.log("peso total:" +pesoTotal());
    console.log("precio medio:"+precioMedio());

}