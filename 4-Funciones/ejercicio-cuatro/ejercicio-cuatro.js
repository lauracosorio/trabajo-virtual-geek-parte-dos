const caja = (Boolean, ancho, padding) =>{
    if (Boolean===true) { //es content-box
        return ancho;
    } 
    else { //es border-box
        return padding
    }
}

caja (false, 24, 45, 10);
