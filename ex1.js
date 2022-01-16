function businessHours(dayNumber, hourNumber) {

    var dayNumber = parseInt(prompt("Ingresa número de día de 0 a 6 :")); //selecciona día 
    var hourNumber = parseInt(prompt("Ingresa hora de trabajo:")); //selecciona hora

    //checamos que el rango sea correcto de 0 a 6 en días
    if (dayNumber >= 0 && dayNumber <= 6) {
        if(dayNumber == 0){
            document.write("Domingo no se trabaja sin immportar que hora sea.")
        }
        if(dayNumber == 1){
            document.write("Lunes. ")
            
            if (hourNumber < 18 && hourNumber >= 9) {
                document.write("Hora de trabajar");
            }
            else {
                document.write("No se tabaja a esta hora ");
            }
        }
        if(dayNumber == 2){
            document.write("Martes. ")
           
            if (hourNumber < 18 && hourNumber >= 9) {
                document.write("Hora de trabajar");
            }
            else {
                document.write("No se tabaja a esta hora ");
            }
        }
        if(dayNumber == 3){
            document.write("Miércoles. ")

            if (hourNumber < 18 && hourNumber >= 9) {
                document.write("Hora de trabajar");
            }
            else {
                document.write("No se tabaja a esta hora ");
            }
        }
        if(dayNumber == 4){
            document.write("Jueves. ")

            if (hourNumber < 18 && hourNumber >= 9) {
                document.write("Hora de trabajar");
            }
            else {
                document.write("No se tabaja a esta hora ");
            }
        }
        if(dayNumber == 5){
            document.write("Viernes. ")

            if (hourNumber < 18 && hourNumber >= 9) {
                document.write("Hora de trabajar");
            }
            else {
                document.write("No se tabaja a esta hora ");
            }
        }
        if(dayNumber == 6){
            document.write("Sábado no se trabaja sin impotar que hora sea. ")
        }
    }
    else {
        document.write("Número de día inválido.");
    }
};
businessHours();
