alert("Si a contuniacion pones una edad menor a 9 se cierra esta pagina y lo que mandes en el login no se le enviara a nadie")
let edad = prompt('Cual es tu Edad')
if (edad < 9 ) {
    window.close()
}
if (edad > 9) {
    alert("Puedes entrar")
}
