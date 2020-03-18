

function welcomeMessage () {

    const nombre = document.getElementById('myname').value;
    document.getElementById('message').innerHTML = "Hola " + nombre;
    console.log("Hola " + nombre);
}
