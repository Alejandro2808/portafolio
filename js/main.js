var menuHamburguesa = document.getElementById('menuHamburguesa');
var clajaMenuHamburguesa = document.getElementById('clajaMenuHamburguesa');
var interruptor = 1;

menuHamburguesa.onclick = function(){

    switch (interruptor) {
        case 0:
            clajaMenuHamburguesa.style.left= '-350px';
            interruptor = 1;
        break;

        case 1:
            clajaMenuHamburguesa.style.left= '0px';
            interruptor = 0;
        break;
    }
}