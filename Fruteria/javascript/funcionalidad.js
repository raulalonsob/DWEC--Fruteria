/**
 * Lugar donde se manejaran los listener 
 */
window.onload = () => {

    //listener para la suma de los kg de fruta
    document.getElementById("melonImg").addEventListener("click", sumarFruta.bind("melon"), false);
    document.getElementById("manzanaImg").addEventListener("click", sumarFruta.bind("manzana"), false);
    document.getElementById("peraImg").addEventListener("click", sumarFruta.bind("pera"), false);
    document.getElementById("frambuesaImg").addEventListener("click", sumarFruta.bind("frambuesa"), false);
    document.getElementById("pitayaImg").addEventListener("click", sumarFruta.bind("pitaya"), false);
    document.getElementById("arandanoImg").addEventListener("click", sumarFruta.bind("arandano"), false);
    document.getElementById("platanoImg").addEventListener("click", sumarFruta.bind("platano"), false);
    document.getElementById("papayaImg").addEventListener("click", sumarFruta.bind("papaya"), false);
    document.getElementById("fresaImg").addEventListener("click", sumarFruta.bind("fresa"), false);
    document.getElementById("melocotonImg").addEventListener("click", sumarFruta.bind("melocoton"), false);

    //listener para el manejo del div Tarjeta de cliente
    mostrarTarjeta();

}

/**
 * funciones para el manejo del código del cliente
 */

    function mostrarTarjeta(){
        var div=document.getElementById("form3");
        var imput= document.getElementById("codCliente");
        var label = document.getElementById("codigoCliente");

        form3.hidden=true;
        imput.disabled=true;
        document.getElementById("siTarjeta").addEventListener("change",function(){
            form3.hidden=false;
            imput.disabled=false;
        },false);
        document.getElementById("noTarjeta").addEventListener("change",function(){
            form3.hidden=true;
            imput.disabled=true;
        },false);
       
    }




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
    getFruta(){
        return this.nombre+ " es fruta de verano, "+this.proximidad+" y están recogidas en "+this.region;
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
    getFruta(){
        return this.nombre+" es fruta de invierno y "+this.conservar+" conservar en nevera";
    }

}
function tooltip(fruta){
    //let fruta = this.toString();
    switch(fruta){
        case "melon":
            name=frutas[0].nombre;
            texto= name.getFruta();
            break;
        case "manzana":
            frutas[1].kg= frutas[1].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "pera":
            frutas[2].kg= frutas[2].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "frambuesa":
            frutas[3].kg= frutas[3].kg + kg;
            anadeLateral((fruta),kg);

        break;
        case "pitaya":
            frutas[4].kg= frutas[4].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "arandano":
            frutas[5].kg= frutas[5].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "platano":
            frutas[6].kg= frutas[6].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "papaya":
            frutas[7].kg= frutas[7].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "fresa":
            frutas[8].kg= frutas[8].kg + kg;
            anadeLateral((fruta),kg);

            break;      
            
        case "melocoton":
            frutas[9].kg= frutas[9].kg + kg;
            anadeLateral((fruta),kg);

             break;   
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
 * Suma de los kg y llamada a la funcion de añadir al lateral
 */
function sumarFruta(){
    let fruta = this.toString();
    let recogido = document.getElementById(fruta).value;
    let kg = Number(recogido);
    
    switch(fruta){
        case "melon":
            frutas[0].kg= frutas[0].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "manzana":
            frutas[1].kg= frutas[1].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "pera":
            frutas[2].kg= frutas[2].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "frambuesa":
            frutas[3].kg= frutas[3].kg + kg;
            anadeLateral((fruta),kg);

        break;
        case "pitaya":
            frutas[4].kg= frutas[4].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "arandano":
            frutas[5].kg= frutas[5].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "platano":
            frutas[6].kg= frutas[6].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "papaya":
            frutas[7].kg= frutas[7].kg + kg;
            anadeLateral((fruta),kg);

            break;
        case "fresa":
            frutas[8].kg= frutas[8].kg + kg;
            anadeLateral((fruta),kg);

            break;      
            
        case "melocoton":
            frutas[9].kg= frutas[9].kg + kg;
            anadeLateral((fruta),kg);

             break;   
    }

}


/**
 * Funcion que irá añadiendo los kg y la fruta al lateral
 */

function anadeLateral (i,kgs) {
    if (kgs>0){
        let divLateral = document.getElementById("lateral");
        let linea = document.createElement("p");
        linea.innerHTML =  i+" ---- "+ kgs+"kg"
        divLateral.appendChild(linea);

    }
    else{
      alert("tienes introducir un numero de kg");
    }
}


//Creo el siguiente array donde se recogeran todas las frutas para operar con el más tarde

var frutas = [melon, manzana, pera, frambuesa, pitaya, arandano, platano, papaya, fresa, melocoton];


//Ordeno el array de frutas de forma alfabetica inversa para mas tarde mostrar las frutas en este orden

var frutasInverso= frutas.sort(((a, b) => b.nombre > a.nombre));


/**
 * Función que recogera todos los precios para calcular el precio total
 */
 

 function total(){
     let precioTotal=0;
     for(i=0; i<frutas.length; i++){
         precioTotal= precioTotal+((frutas[i].kg)*(frutas[i].precio))
     }

     return precioTotal;
 }

/**
 * Funcion que calcula el precio medio
 */

 function precioMedio(){ 
    let pesoTotal=0;
    for (i=0; i<frutas.length; i++){
        pesoTotal= pesoTotal+(frutas[i].kg);
    }
    let medio = 0;
    console.log(pesoTotal);
    console.log (total());
    medio = (total()/pesoTotal);

    return medio;
}


/***
 * Funcion que mostrara las ventanas emergentes y el resultado final
 */



function terminarPedido(){
    window.open("ventanaTicket.html","ventana","width=500,height=300,scrollbars=NO");
   
}

 
