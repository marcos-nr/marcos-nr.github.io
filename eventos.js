function mostrar(elemento, boton){
    document.getElementById(elemento).style.display = 'block';
    document.getElementById(boton).style.display = 'none';
}

function ocultar(elemento, boton){
    document.getElementById(elemento).style.display = 'none';
    document.getElementById(boton).style.display = 'inline';
}