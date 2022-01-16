function ex(yearDayNumber, hourNumber) {
    
    var yearDayNumber = parseInt(prompt("Ingrese un valor entre 0 y 365:")); //día del año
    var hourNumber = parseInt(prompt("Ingresa hora de trabajo entre 0 y 23:"));//hora del día
    
    yearDayNumber = yearDayNumber % 7;

    if (hourNumber < 0 || hourNumber > 23) { //solo acepta un rango correcto entre 0 y 23 horas
        alert("Hora incorrecta");
    };

    if (yearDayNumber == 0 || yearDayNumber == 6) { //0 y 6 es sábado y domingo
        alert("No es hora de negocios");
    };

    if (yearDayNumber >= 1 && yearDayNumber <= 5) { //del 1 al 5 es de lunes a viernes
        if (hourNumber >= 9 && hourNumber <=18 ) {
            alert("Es hora de negocios");
        }
        else {
            alert("No es hora de negocios");
        }
    };
};
ex();