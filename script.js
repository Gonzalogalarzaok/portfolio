let menuVisible = false;
/* FUNCION QUE OCULTA O MUESTRA EL MENU */
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible= false;
    }else{
        document.getElementById("nav").classList="responsive";/* CLASE DE LA SECCION RESPONSIVE */
        menuVisible= true;
    }
}

function seleccionar(){
    //OCULTO EL MENU UNA VEZ QUE SELECCIONO UNA OPCION
    document.getElementById("nav").classList="";
    menuVisible = false;
}