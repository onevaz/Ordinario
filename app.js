var i=0;
class Articulo{
    constructor(nombre,costo,cantidad){
        this.nombre=nombre;
        this.costo=costo;
        this.cantidad=cantidad;
    }
    Importe(){
        return this.costo*this.cantidad*1.25
    }
    VentaO(){
        return this.costo*this.cantidad;
    }
}
class Venta{
    constructor(VentaO,Importe){
        this.VentaF+=Ventaa;
        this.ImporteF+=Importa;
    }
    VentaFi(){
        return this.VentaF
    }
    ImporteFi(){
        return this.ImporteF
    }
}
vec=new Array(50);
const a=document.getElementById("btnArticulo");a.addEventListener('click',()=>{
let nombre=document.getElementById("nombre").value;
let precio=document.getElementById("precio").value;
let cantidad=document.getElementById("cantidad").value;
nombre=(nombre);
precio=parseInt(precio);
cantidad=parseInt(cantidad);
let a1=new Articulo (nombre,costo,cantidad);
let Venta=document.getElementById("Venta");
let Importe=document.getElementById("Importe");
Venta.innerHTML="<p> Nombre" + nombre + "precio" + precio + "cantidad"+cantidad+"</p>";
Venta.innerHTML+="<p> Costo total" + Venta.VentaFi()+ "</p>";
Importe.innerHTML="<p> Costo total" + Venta.ImporteFi()+ "</p>";
});

const l=document.getElementById("btnLimpiar");l.addEventListener('click',()=>{
let base=document.getElementById("base").value;
for(i=0;i<50;i++){
    vec[i]=null;
        }   
    }
);

const g=document.getElementById("btnGuardar");g.addEventListener('click',()=>{
let base=document.getElementById("base").value;
let nombre=document.getElementById("nombre").value;
let precio=document.getElementById("precio").value;
let cantidad=document.getElementById("cantidad").value;
nombre=(nombre);
precio=parseInt(precio);
cantidad=parseInt(cantidad);
let a1=new Articulo (nombre,costo,cantidad);
let Venta=document.getElementById("Venta");
let Importe=document.getElementById("Importe");
"<p>Se guardo correctamente </p>";
vec[i]=nombre;i++;
vec[i]=precio;i++;
vec[i]=cantidad;i++;
vec[i]=Vental;i++;
vec[i]=Importe;i++;
});

const c=document.getElementById("btnCarrito");c.addEventListener('click',()=>{
    let Carrito=document.getElementById("Carrito");
    while(i<50){
        Carrito.innerHTML="<p> Nombre" +vec[i]+ "</p>";i++;
        Carrito.innerHTML+="<p> Precio" +vec[i]+ "</p>";i++;
        Carrito.innerHTML+="<p> Cantidad" +vec[i]+ "</p>";i++;
        Carrito.innerHTML+="<p> Venta" +vec[i]+ "</p>";i++;
        Carrito.innerHTML+="<p> Importe" +vec[i]+ "</p>";i++;
    }
    });