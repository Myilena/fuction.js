function suma(){
    let n1 = 4;
    let n2 = 3;
    let sum = n1 + n2;
    return sum;
}

function resta (n1,n2){
    let rest = n1 -n2;
    return rest;
}

console.log(suma());
console.log(resta(90,10));

/*
console.log(suma());
console.log(resta(90,10));
*/

const fun  =  (mensa) =>{
    let n1 =  3;
    let n2 =  2;
    let su =  n1+n2;
    return su+mensa;
}
console.log( fun("hola"));
let  d
d =  50;
d => d+3;
const nota= d => d+3;

const getNombre =()=>"maria";
console.log(getNombre());

let apellido;
apellido =   "Becerra";
apellido => console.log(apellido)
 params => {foo:"a"}

 function multiplicacion(n1,n2=30){
     return n1*n2;
 }
console.log(multiplicacion(2,6));

let multi = (n1,n2=40)=>{
     let res = n1*n2;
     let mensaje = `el resultado de la multiplicacion es:${res};`
     return mensaje;
}
console.log(multi(10));


let contador= document.getElementById("caja");
let tota =0;
setInterval(()=>{
    tota+=1;
    console.log(tota)
    contador.innerHTML="tota";
},100)

