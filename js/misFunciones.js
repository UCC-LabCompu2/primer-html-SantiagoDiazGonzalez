/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */
function convertirunidades(txt) {
    var contenido;
    var metro, pie, yarda, pulgada;
    contenido = document.getElementById(txt).value;
    //alert(contenido);

    if (isNaN(contenido)) {
        alert("El valor ingresado en " + txt + " no es valido")
        document.getElementById('metro').value = "";
        document.getElementById('pie').value = "";
        document.getElementById('yarda').value = "";
        document.getElementById('pulgada').value = "";
    }

    switch (txt) {
        case "metro":
            document.getElementById('pie').value = contenido * 3.28084;
            document.getElementById('yarda').value = contenido * 1.09361;
            document.getElementById('pulgada').value = contenido * 39.3701;
            break;

        case "pie":
            document.getElementById('metro').value = contenido * 0.03048;
            document.getElementById('yarda').value = contenido * 0.33333;
            document.getElementById('pulgada').value = contenido * 12;
            break;

        case "yarda":
            document.getElementById('metro').value = contenido * 0.9144;
            document.getElementById('pie').value = contenido * 3;
            document.getElementById('pulgada').value = contenido * 36;
            break;

        case "pulgada":
            document.getElementById('metro').value = contenido * 0.0254;
            document.getElementById('yarda').value = contenido * 0.083333;
            document.getElementById('pie').value = contenido * 0.02778;
            break;
    }
}