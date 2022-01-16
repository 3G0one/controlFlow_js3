function ch() {
    
    const d = new Date();
    let day = d.getDate();
    let hour = d.getHours();

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let dayy = weekday[d.getDay()];
    
    console.log("Hoy es día: " + dayy + " " + day);
    
    console.log("Es la hora: " + hour);
    let chk = day % 7;

    if (chk == 1 || chk == 2) { //1 y 2 es sábado y domingo
        console.log("No es hora de negocios.");
    }

    if ((chk >2  && chk <=6) || chk == 0) { //del 3 al 6 y 0 es de lunes a viernes
        if (hour >= 9 && hour <=18 ) {
            console.log("Es hora de negocios.");
        }
        else {
            console.log("No es hora de negocios.");
        }
    }
};
ch();


/*
sab 1
dom 2
lun 3
mar 4
mierc 5
jue 6
v0
*/


