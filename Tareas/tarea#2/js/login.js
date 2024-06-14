document.getElementById("btn-login").addEventListener("click", login);

/*funcion que valida el login*/
function validation_alert(ptext) {
    swal.fire({
        /* icon: "error",*/
        title: "Verificar la entrada de datos",
        text: ptext,
        confirmButtonText: "Intentar de nuevo",
        confirmButtonColor: "#0063be",
        html: '<iframe src="https://lottie.host/embed/fec0015d-d182-4308-ae2e-06734c6af92f/Je1WQO7ZBE.json"></iframe> <br><p>' + ptext + " </p>",
    });
}

//funcion login
function login() {
    let user_input = document.getElementById("username").value;
    let password_input = document.getElementById("password").value;
    //declaracion de los datos usuario y password respectivamente
    let username = "cenfo";
    let password = "123";
    //identificadores de los campos username y password
    let input = [user_input, password_input];
    let input_id = ["username", "password"];
    let error_count = 0;
    let text = "";
    //ciclo FOR que hace un recorrido con la clase llamada error que permite poner la franja roja del error
    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            //este es el texto que lleva el parametro de la funcion validación_alert
            text = "Uno de los campos está vacío, favor ingresar credenciales correctamente";
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    //validacion si los campos username y password son iguales
    if (error_count == 0) {
        if (user_input == username && password_input == password) {
            Swal.fire({
                //icon: "success",
                title: "Credenciales correctas",
                showConfirmButton: false,
                timer: 3000,
                html: '<iframe src="https://lottie.host/embed/fbd4c71b-96dd-4e72-a242-7b91d47a95b6/RknQKoC4jX.json"></iframe>  <br><br><p>BIENVENIDO!</p>',

            }).then(() => {
                window.location.href = "landing.html", "blank";
            });
        } else {
            text = "Usuario o contraseña incorrecta.";
            //carga la funcion de arriba
            validation_alert(text);
        }
    }
}