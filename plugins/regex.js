/* 
    Inicio = /^ 
    interno = Regla
    Final = $/
    + = El mas es para que valida uno despues de otro caracter
*/

const Regex = {};

/* Solo numeros */
Regex.onlyNumber = /^[0-9]+$/;

/* Solo letras y espacios */
Regex.onlyLetters = /^[a-zñA-ZÑ ]+$/;

/* Solo letras y no espacios */
// Regex.lettersAndNotSpaces = /^[a-z A-Z]+$/;

/* Solo letras y no espacios */
Regex.onlylettersAndNumbers = /^[0-9a-zñA-ZÑ]+$/;

/* Solo letras, numeros y espacios */
Regex.onlylettersNumbersAndSpaces = /^[0-9a-zñA-ZÑ ]+$/;

/* Solo textarea */
Regex.onlyTextarea = /^[;.,0-9a-zñA-ZÑ ]+$/;

/* Email */
Regex.onlyEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

export default Regex;
