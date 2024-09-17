
let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');


const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.@*#!\/"

function generar(){

    let NumeroDigitado = parseInt (cantidad.value);
    console.log(NumeroDigitado)

    if (NumeroDigitado <6){
        alert("el minimo de caracter son 6 ");
        return;
    }
    
    let password = '';
    for(let i= 0; i< NumeroDigitado; i++){
        let caracterAleatorio = caracteres[Math.floor((Math.random() * caracteres.length))];
        
       
        password += caracterAleatorio;
    
 
    }  
     if (NumeroDigitado == 6){
        alert("contraseña debil ")
    }else if (NumeroDigitado == 9){
        alert("nivel de contraseña fuerte")
}
 contrasena.value = password

}

function limpiar(){
    document.getElementById('contrasena').value = "";
}


