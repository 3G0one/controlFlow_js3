
function getDayNumber(janFirstDayNumber, yearDayNumber) {

    var janFirstDayNumber = parseInt(prompt("Seleccione primer día del año entre 0 y 6"));
    var yearDayNumber = parseInt(prompt("Ingrese un valor entre 0 y 365:")); //día del año
    var d = yearDayNumber % 7;
    
    
        if (janFirstDayNumber == 0) { //elegir Dom como día 1
           
               if (d == 0) {
                console.log("Domingo");
            }
            else if (d == 1) {
                console.log("Lunes");
            }
            else if (d == 2) {
                console.log("Martes");
            }
            else if (d == 3) {
                console.log("Miercoles");
            }
            else if (d == 4) {
                console.log("Jueves");
            }
            else if (d == 5) {
                console.log("Viernes");
            }
            else if (d == 6) {
                console.log("Sábado");
            }

        }
        else if(janFirstDayNumber== 1){ //elegir Lun como día 1
            
            if (d == 0) {
                console.log("Lunes");
            }
            else if (d == 1) {
                console.log("Martes");
            }
            else if (d == 2) {
                console.log("Miércoles");
            }
            else if (d == 3) {
                console.log("Jueves");
            }
            else if (d == 4) {
                console.log("Viernes");
            }
            else if (d == 5) {
                console.log("Sabado");
            }
            else if (d == 6) {
                console.log("Domingo");
            }
            

        }
        else if(janFirstDayNumber== 2){//elegir Mar como día 1
                       
               if (d == 0) {
                console.log("Martes");
            }
            else if (d == 1) {
                console.log("Miércoles");
            }
            else if (d == 2) {
                console.log("Jueves");
            }
            else if (d == 3) {
                console.log("Viernes");
            }
            else if (d == 4) {
                console.log("Sábado");
            }
            else if (d == 5) {
                console.log("Domingo");
            }
            else if (d == 6) {
                console.log("Lunes");
            }
        }
        else if(janFirstDayNumber== 3){//elegir Mier como día 1
                       
               if (d == 0) {
                console.log("Miércoles");
            }
            else if (d == 1) {
                console.log("Jueves");
            }
            else if (d == 2) {
                console.log("Viernes");
            }
            else if (d == 3) {
                console.log("Sábado");
            }
            else if (d == 4) {
                console.log("Domingo");
            }
            else if (d == 5) {
                console.log("Lunes");
            }
            else if (d == 6) {
                console.log("Martes");
            }
        }
        else if(janFirstDayNumber== 4){//elegir Juev como día 1
                          if (d == 0) {
                console.log("Jueves");
            }
            else if (d == 1) {
                console.log("Viernes");
            }
            else if (d == 2) {
                console.log("Sábado");
            }
            else if (d == 3) {
                console.log("Domingo");
            }
            else if (d == 4) {
                console.log("Lunes");
            }
            else if (d == 5) {
                console.log("Martes");
            }
            else if (d == 6) {
                console.log("Miércoles");
            }
        }
        else if (janFirstDayNumber == 5) {//elegir Vie como día 1
                      
               if (d == 0) {
                console.log("Viernes");
            }
            else if (d == 1) {
                console.log("Sábado");
            }
            else if (d == 2) {
                console.log("Domingo");
            }
            else if (d == 3) {
                console.log("Lunes");
            }
            else if (d == 4) {
                console.log("Martes");
            }
            else if (d == 5) {
                console.log("Miércoles");
            }
            else if (d == 6) {
                console.log("Jueves");
            }
        }
        else if(janFirstDayNumber== 6){//elegir Sab como día 1
           
               if (d == 0) {
                console.log("Sábado");
            }
            else if (d == 1) {
                console.log("Domingo");
            }
            else if (d == 2) {
                console.log("Lunes");
            }
            else if (d == 3) {
                console.log("Martes");
            }
            else if (d == 4) {
                console.log("Miércoles");
            }
            else if (d == 5) {
                console.log("Juev es");
            }
            else if (d == 6) {
                console.log("Viernes");
            }
        }
        else {
            document.write("Valor de día no aceptado");
        }
};
getDayNumber();



