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
    
    
    //listener para mostrar tooltip
    document.getElementById("melonImg").addEventListener("mouseover", mostrarTooltip.bind("melon"), false);
    document.getElementById("manzanaImg").addEventListener("mouseover", mostrarTooltip.bind("manzana"), false);
    document.getElementById("peraImg").addEventListener("mouseover", mostrarTooltip.bind("pera"), false);
    document.getElementById("frambuesaImg").addEventListener("mouseover", mostrarTooltip.bind("frambuesa"), false);
    document.getElementById("pitayaImg").addEventListener("mouseover", mostrarTooltip.bind("pitaya"), false);
    document.getElementById("arandanoImg").addEventListener("mouseover", mostrarTooltip.bind("arandano"), false);
    document.getElementById("platanoImg").addEventListener("mouseover", mostrarTooltip.bind("platano"), false);
    document.getElementById("papayaImg").addEventListener("mouseover", mostrarTooltip.bind("papaya"), false);
    document.getElementById("fresaImg").addEventListener("mouseover", mostrarTooltip.bind("fresa"), false);
    document.getElementById("melocotonImg").addEventListener("mouseover", mostrarTooltip.bind("melocoton"), false);

    // Funcion para tramitar pedido

    document.getElementById("form").addEventListener("submit", validar,false);

}

/**
 * funciones para el manejo del código del cliente
 */

    function mostrarTarjeta(){
        var div=document.getElementById("form3");
        var imput= document.getElementById("codCliente");
        var label = document.getElementById("codigoCliente");

        div.hidden=true;
        imput.disabled=true;
        document.getElementById("siTarjeta").addEventListener("change",function(){
            div.hidden=false;
            imput.disabled=false;
        },false);
        document.getElementById("noTarjeta").addEventListener("change",function(){
            div.hidden=true;
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
/**
 * Funcion para mostrar los tooltip
 */
function mostrarTooltip(){
    let fruta = this.toString();
    let i
    switch(fruta){
        case "melon":
            i = 0;           
            document.getElementById("span" + i).innerHTML = frutas[i].getFruta();
   
        case "manzana":
            i = 1;
            document.getElementById("span" + i).innerHTML = frutas[i].getFruta();
            break;
        case "pera":
            i = 2;
            document.getElementById("span" + i).innerHTML = frutas[i].getFruta();

            break;
        case "frambuesa":
            i = 3;
            document.getElementById("span" + i).innerHTML = frutas[i].getFruta();
        break;
        case "pitaya":
            i = 4;
            document.getElementById("span" + i).innerHTML = frutas[i].getFruta();

            break;
        case "arandano":
            i = 5;
            document.getElementById("span" + i).innerHTML = frutas[i].getFruta();

            break;
        case "platano":
            i = 6;
            document.getElementById("span" + i).innerHTML = frutas[i].getFruta();

            break;
        case "papaya":
            i = 7;
            document.getElementById("span" + i).innerHTML = frutas[i].getFruta();

            break;
        case "fresa":
            i = 8;
            document.getElementById("span" + i).innerHTML = frutas[i].getFruta();

            break;      
            
        case "melocoton":
            i = 9;
            document.getElementById("span" + i).innerHTML = frutas[i].getFruta();

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

function validar(event){
    let correcto= true;
    let nombre = document.getElementById("nombre");
    let label1= document.getElementById("nomLabel");
    if (!nombre.validity.valid){
        label1.style.color="red";
        event.preventDefault();
        correcto=false;
    }else{
        label1.style.color="black";
    }

    let apellido = document.getElementById("apellido");
    let label2= document.getElementById("apLabel");
    if (!apellido.validity.valid){
        label2.style.color="red";
        event.preventDefault();
        correcto=false;
    }else{
        label2.style.color="black";
    }

    let direccion= document.getElementById("direccion");
    let label3= document.getElementById("dirLabel");
    if(!direccion.validity.valid){
        label3.style.color="red";
        event.preventDefault();
        correcto=false;
    }else{
        label3.style.color="black";
    }

    let correo= document.getElementById("correo");
    let label4= document.getElementById("corLabel");
    if(!correo.validity.valid){
        label4.style.color="red";
        event.preventDefault();
        correcto=false;
    }else{
        label4.style.color="black";
    }

    let tarjeta = document.getElementById("tarjeta");
    let contrareembolso = document.getElementById("contrareembolso");
    let label5=document.getElementById("formPago")
    if((!tarjeta.checked)&& (!contrareembolso.checked)){
        label5.style.color="red";
        event.preventDefault();
        correcto=false;

    }else {
        label5.style.color="black";
    }


    let si = document.getElementById("siTarjeta");
    let no = document.getElementById("noTarjeta");
    let label6=document.getElementById("afirmacionCliente")
    if((!si.checked)&& (!no.checked)){
        label6.style.color="red";
        event.preventDefault();
        correcto=false;

    }else {
        label6.style.color="black";
    }
    
    let codigo= document.getElementById("codCliente");
    let label7= document.getElementById("codigoCliente")
    if((si.checked)&&(!codigo.validity.valid)){
        label7.style.color="red";
        event.preventDefault();
        correcto=false;
    }else {
        label7.style.color="black";
    }
    


    if (correcto){
            window.open("ventanaTicket.html","ventana","width=500,height=300,scrollbars=NO");
            event.preventDefault();
    }
    
}



 
function reset(){
    location.reload();
}