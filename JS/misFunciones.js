/**
 * Convierte de una unidad a otra el valor ingresado por el usuario.
 * Ej. Si el usuario ingresa metro, el valor se convierte a pulgada, pie y yarda.
 * @method convertirunidades
 * @param txt (string de la unidad ingresada)
 */

function convertirunidades(txt) {
    var contenido;
    var metro, pulgada, pie, yarda;

    contenido = document.getElementById(txt).value;

    if(isNaN(contenido)){
        alert("El valor ingresado en " + txt + " no es válido")
        document.getElementById('metro').value = "IDIOTA";
        document.getElementById('pulgada').value = "IDIOTA";
        document.getElementById('pie').value = "IDIOTA";
        document.getElementById('yarda').value = "IDIOTA";

    }

    else {

        switch (txt) {
            case "metro":
                document.getElementById('pulgada').value = "";
                document.getElementById('pie').value = "";
                document.getElementById('yarda').value = "";
                document.getElementById('outpulgada').value = " = " + Math.round(contenido * 39.370079999998800702 * 100) / 100;
                document.getElementById('outpie').value = " = " + Math.round(contenido * 3.28084 * 100) / 100;
                document.getElementById('outyarda').value = " = " + Math.round(contenido * 1.0936133333333 * 100) / 100;
                document.getElementById('outmetro').value = "";
                break;

            case "pulgada":
                document.getElementById('metro').value = "";
                document.getElementById('pie').value = "";
                document.getElementById('yarda').value = "";
                document.getElementById('outmetro').value = " = " + Math.round(contenido * 0.0254 * 100) / 100;
                document.getElementById('outpie').value = " = " + Math.round(contenido * 0.0833333 * 100) / 100;
                document.getElementById('outyarda').value = " = " + Math.round(contenido * 0.0277778 * 100) / 100;
                document.getElementById('outpulgada').value = "";
                break;

            case "pie":
                document.getElementById('metro').value = "";
                document.getElementById('pulgada').value = "";
                document.getElementById('yarda').value = "";
                document.getElementById('outmetro').value = " = " + Math.round(contenido * 0.3048 * 100) / 100;
                document.getElementById('outpulgada').value = " = " + Math.round(contenido * 12 * 100) / 100;
                document.getElementById('outyarda').value = " = " + Math.round(contenido * 0.333333 * 100) / 100;
                document.getElementById('outpie').value = "";
                break;

            case "yarda":
                document.getElementById('metro').value = "";
                document.getElementById('pulgada').value = "";
                document.getElementById('pie').value = "";
                document.getElementById('outmetro').value = " = " + Math.round(contenido * 0.9144 * 100) / 100;
                document.getElementById('outpulgada').value = " = " + Math.round(contenido * 36 * 100) / 100;
                document.getElementById('outpie').value = " = " +  Math.round(contenido * 3 * 100) / 100;
                document.getElementById('outyarda').value = "";
                break;
        }
    }
}

/**
 * Convierte de grados a radianes y de radianes a grados
 * @method conversorGradosRadianes
 * @param unidad (grados | radianes)
 * @param valor
 */

function conversorGradosRadianes(unidad, valor) {
    var valor_radianes, valor_grados;

    valor = valor.replace(',','.');
    valor = valor.replace('°','');

    if(isNaN(valor)) {
        alert("El valor ingresado en " + unidad + " es invalido")
        valor_grados = "";
        valor_radianes = "";
    }
    else if(unidad == "grados") {
        valor_grados = valor;
        valor_radianes = valor * Math.PI / 180;
    }

    else if(unidad == "radianes") {
        valor_grados = valor * 180 / Math.PI;
        valor_radianes = valor;
    }

    document.conver_RadGrad.unid_grados.value = valor_grados;
    document.conver_RadGrad.unid_radianes.value = valor_radianes;
}

/**
 * Muestra u oculta un div segun se seleccione
 * @method mostrarOcultar
 * @param accion (mostrarDiv | ocultarDiv)
 */

function mostrarOcultar(accion) {

    if(accion == "mostrarDiv") {
        document.getElementById("elDiv").style.display = 'block';
    }
    else if(accion == "ocultarDiv") {
        document.getElementById("elDiv").style.display = 'none';
    }
}

function dibujarImagen() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var coorX = Number(document.getElementById("posicionX").value);
    var coorY = Number(document.getElementById("posicionY").value);

    var img = new Image();
    img.src = 'auto.png';

    canvas.width = canvas.width;

    ctx.beginPath();
    ctx.drawImage(img, coorX, coorY, 30, 30);
    ctx.closePath();
}


function animar(){
    var cant = 0;
    var X = Number(document.getElementById("posicionX".value));
    setInterval(function () {
        dibujarImagen();
        document.getElementById("posicionX").value = X;
        X += 5;
        console.log("Me llamaron " + cant++ + " veces");
    }, 100)
}

function Suma() {
    var s1, s2;

    if (s1 == 'NULL')
        s1 = 0;
    else
        s1 = Number(document.getElementById("nums1").value);

    if (s2 == 'NULL')
        s2 = 0;
    else
        s2 = Number(document.getElementById("nums2").value);

    document.getElementById("totalS").innerHTML = s1 + s2;
}

function Resta() {
    var r1, r2;

    if (r1 == 'NULL')
        r1 = 0;
    else
        r1 = Number(document.getElementById("numr1").value);

    if (r2 == 'NULL')
        r2 = 0;
    else
        r2 = Number(document.getElementById("numr2").value);

    document.getElementById("totalR").innerHTML = r1 - r2;
}

function Prod() {
    var m1, m2;

    if (m1 == 'NULL')
        m1 = 1;
    else
        m1 = Number(document.getElementById("numm1").value);

    if (m2 == 'NULL')
        m2 = 1;
    else
        m2 = Number(document.getElementById("numm2").value);

    document.getElementById("totalM").innerHTML = m1 * m2;
}

function Div() {
    var num, den;

    if (num == 'NULL')
        num = 0;
    else
        num = Number(document.getElementById("numd1").value);

    if (den == 'NULL')
        den = 1;
    else {
        den = Number(document.getElementById("numd2").value);
        if (den === 0) {
            alert("El denominador no puede ser cero");
            den = 1;
        }
    }
    document.getElementById("totalD").innerHTML = num / den;
}

function pasardistancia() {
    var numero = document.getElementById("distancia").value;
    var dimension = document.getElementById("unidades").value;

    var link = 'segunda.html#' + numero + "#" + dimension;

    window.location.replace(link);
}

function recibirdistancia() {
    var cadena, numero, unidad;
    cadena = window.location.hash.split("#");
    numero = cadena[1];
    unidad = cadena[2];

    document.getElementById("dist").value = numero + " " + unidad;
}

function dibujarcirculocuadrado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var ancho = canvas.width;
    var alto = canvas.height;

    //Dibuar Cuadrado
    ctx.beginPath();

    ctx.strokeStyle = "#008744";
    ctx.fillStyle = "#0057e7";

    ctx.rect(10, alto - 40, 30, 30);
    ctx.stroke();
    ctx.fill();

    ctx.closePath();

    //Dibujar Circulo
    ctx.beginPath();

    ctx.strokeStyle = "#00C5CD";
    ctx.fillStyle = "#9C8914";

    ctx.arc(ancho / 2, alto / 2, 30, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fill();

    ctx.closePath()
}

function dibujarcuadriculado() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var ancho = canvas.width;
    var alto = canvas.height;

    //lineas verticales
    ctx.beginPath();
    for (var i = 10; i < ancho;) {
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alto);
        i += 10;
    }

    ctx.strokeStyle = "#1898A3";
    ctx.stroke();
    ctx.closePath();

    //lineas horizontales
    ctx.beginPath();
    for (var i = 10; i < alto;) {
        ctx.moveTo(0, i);
        ctx.lineTo(ancho, i);
        i += 10;
    }

    ctx.strokeStyle = "#22333B";
    ctx.stroke();
    ctx.closePath();
}