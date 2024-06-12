function validar() {
    var retorno_usuario = validar_usuario();
    var retorno_contraseña = validarContraseña();
    var retorno_confirmación = validarConfirmacionContraseña();
    var retorno_comuna = validarComuna();
    var retorno_direccion = validarDireccion();
    var retorno_telefono = validarTelefono();
    var retorno_paginaWeb = validar_paginaWeb(); 
    var retorno_hobbies = validarHobbies(); 

    return retorno_usuario && retorno_contraseña && retorno_confirmación && retorno_comuna && retorno_direccion && retorno_telefono && retorno_paginaWeb && retorno_hobbies; // Actualizado
}


function validar_usuario() {
    var inputNombre = document.getElementById("username");
    var divErrorNombre = document.getElementById("error-usuario");
    var nombre = inputNombre.value.trim();
    var letras = /[a-zA-Z]/;
    var digitosAlFinal = /[0-9]+$/;

    if (nombre === "") {
        divErrorNombre.textContent = "El nombre de usuario es obligatorio";
        divErrorNombre.style.color = "red";
        return false;
    } else if (nombre.length < 5 || nombre.length > 10) {
        divErrorNombre.textContent = "El nombre de usuario debe tener entre 5 y 10 caracteres";
        divErrorNombre.style.color = "red";
        return false;
    } else if (!letras.test(nombre.charAt(0))) {
        divErrorNombre.textContent = "El nombre de usuario debe comenzar con una letra";
        divErrorNombre.style.color = "red";
        return false;
    } else if (!digitosAlFinal.test(nombre)) {
        divErrorNombre.textContent = "El nombre de usuario puede tener uno o más dígitos, pero solo al final ,no pude tener simbolos";
        divErrorNombre.style.color = "red";
        return false;
    } else if (!/^[a-zA-Z0-9]*$/.test(nombre)) {
        divErrorNombre.textContent = "El nombre de usuario no puede tener caracteres especiales, símbolos o acentos";
        divErrorNombre.style.color = "red";
        return false;
    } else {
        divErrorNombre.textContent = "";
        return true;
    }
}

function validarContraseña() {
    var inputContraseña = document.getElementById("password");
    var divErrorContraseña = document.getElementById("error-contraseña");
    var contraseña = inputContraseña.value.trim();
    var nombreUsuario = document.getElementById("username").value.trim();

    
    if (contraseña.length < 3 || contraseña.length > 6) {
        divErrorContraseña.textContent = "La contraseña debe tener entre 3 y 6 caracteres";
        divErrorContraseña.style.color = "red";
        return false;
    }

    
    var tieneLetra = false;
    var tieneDigito = false;

    for (var i = 0; i < contraseña.length; i++) {
        if (contraseña[i] >= 'a' && contraseña[i] <= 'z' || contraseña[i] >= 'A' && contraseña[i] <= 'Z') {
            tieneLetra = true;
        } else if (contraseña[i] >= '0' && contraseña[i] <= '9') {
            tieneDigito = true;
        }
    }

    if (!tieneLetra || !tieneDigito) {
        divErrorContraseña.textContent = "La contraseña debe contener al menos una letra y un dígito";
        divErrorContraseña.style.color = "red";
        return false;
    }

    
    if (contraseña.toLowerCase().includes(nombreUsuario.toLowerCase())) {
        divErrorContraseña.textContent = "La contraseña no puede contener el nombre de usuario";
        divErrorContraseña.style.color = "red";
        return false;
    }

    
    divErrorContraseña.textContent = "";
    return true;
}


function validarConfirmacionContraseña() {
    var inputContraseña = document.getElementById("password");
    var inputConfirmarContraseña = document.getElementById("confirmPassword");
    var divErrorConfirmarContraseña = document.getElementById("confirmar-contraseña");
    var contraseña = inputContraseña.value.trim();
    var confirmarContraseña = inputConfirmarContraseña.value.trim();

    
    if (contraseña !== confirmarContraseña) {
        divErrorConfirmarContraseña.textContent = "La confirmación de la contraseña no coincide";
        divErrorConfirmarContraseña.style.color = "red";
        return false;
    } else {
        divErrorConfirmarContraseña.textContent = "";
        return true;
    }
}


function validarComuna() {
    var comunaSelect = document.getElementById("select-ciudad");
    var divErrorComuna = document.getElementById("error-ciudad");
    var comuna = comunaSelect.value;

    if (comuna === "default") {
        divErrorComuna.textContent = "Debes seleccionar una comuna";
        divErrorComuna.style.color = "red";
        return false;
    } else {
        divErrorComuna.textContent = "";
        return true;
    }
}


function validarDireccion() {
    var direccionInput = document.getElementById("input-direccion");
    var divErrorDireccion = document.getElementById("error-direccion");
    var direccion = direccionInput.value.trim();

    if (direccion === "") {
        divErrorDireccion.textContent = "La dirección es obligatoria";
        divErrorDireccion.style.color = "red";
        return false;
    } else {
        divErrorDireccion.textContent = "";
        return true;
    }
}


function validarTelefono() {
    var telefonoInput = document.getElementById("input-telefono");
    var divErrorTelefono = document.getElementById("error-telefono");
    var telefono = telefonoInput.value.trim();

    if (telefono === "") {
        divErrorTelefono.textContent = "El número de teléfono es obligatorio";
        divErrorTelefono.style.color = "red";
        return false;
    } else {
        divErrorTelefono.textContent = "";
        return true;
    }
}

function validar_paginaWeb() {
    var input = document.getElementById('pagina');
    var error = document.getElementById('formato-url'); // Cambiado
    var value = input.value.trim();

    var isValid = false;

    if (value.includes(" ")) {
        error.textContent = "Formato de URL inválido: contiene espacios en blanco"; // Cambiado
        error.style.color = "red"; // Cambiado
        return false;
    }

    if (value.startsWith('https://') || value.startsWith('http://')) {
        var restOfUrl = value.startsWith('https://') ? value.slice(8) : value.slice(7); 
        var pos_punto = restOfUrl.indexOf(".");

        if (pos_punto > 0 && pos_punto < restOfUrl.length - 1) {
            isValid = true;
        }
    } else if (value.startsWith('www.')) {
        var restOfUrl = value.slice(4); 
        var pos_punto = restOfUrl.indexOf(".");

        if (pos_punto > 0 && pos_punto < restOfUrl.length - 1) {
            isValid = true;
        }
    }

    if (isValid) {
        error.textContent = "URL válida"; // Cambiado
        error.style.color = "green"; // Cambiado
        return true;
    } else {
        error.textContent = "Formato de URL inválido"; // Cambiado
        error.style.color = "red"; // Cambiado
        return false;
    }
}

//////



function agregarAficionLista() {
    var hobbyInput = document.getElementById('hobbyInput');
    var hobbiesList = document.getElementById('hobbiesList');
    var divErrorHobbies = document.getElementById('error-hobbies');
    var hobby = hobbyInput.value.trim();

    // Verificar si el hobby contiene comas o puntos
    var regex = /[,.]/;
    if (hobby && !regex.test(hobby)) {
        // Crear nueva fila de la tabla
        var rowCount = hobbiesList.rows.length + 1; // Contar filas para numeración
        var row = hobbiesList.insertRow();
        
        // Insertar número de fila
        var cell1 = row.insertCell(0);
        cell1.textContent = rowCount;

        // Insertar nombre del hobby
        var cell2 = row.insertCell(1);
        var hobbyText = document.createElement('span');
        hobbyText.textContent = hobby;
        cell2.appendChild(hobbyText);

        // Botón de eliminación
        var cell3 = row.insertCell(2);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.style.marginLeft = '10px'; 
        deleteButton.addEventListener('click', function() {
            hobbiesList.deleteRow(row.rowIndex - 1);
            actualizarNumeracionHobbies();
            validarHobbies(); // Revalidar después de eliminar
        });
        cell3.appendChild(deleteButton);

        hobbyInput.value = ''; // Limpiar el campo de entrada

        validarHobbies();
    } else {
        divErrorHobbies.textContent = "Por favor, ingresa una afición válida sin comas ni puntos";
    }
}

// Actualizar numeración de las filas de la tabla
function actualizarNumeracionHobbies() {
    var hobbiesList = document.getElementById('hobbiesList');
    for (var i = 0; i < hobbiesList.rows.length; i++) {
        hobbiesList.rows[i].cells[0].textContent = i + 1;
    }
}

// Validar que haya al menos 2 hobbies en la lista
function validarHobbies() {
    var hobbiesList = document.getElementById('hobbiesList').rows;
    var divErrorHobbies = document.getElementById('error-hobbies');

    if (hobbiesList.length >= 2) {
        divErrorHobbies.textContent = "";
        return true;
    } else {
        divErrorHobbies.textContent = "Debe agregar al menos 2 aficiones";
        return false;
    }
}
