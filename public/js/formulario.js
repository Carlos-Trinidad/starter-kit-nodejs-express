
function validarForm() {
	var nombre = document.getElementById("nombre");
	var nrodoc = document.getElementById("nrodoc");
	var sueldo = document.getElementById("sueldo");
	var nombre_error = document.getElementById("nombre_error");
	var nrodoc_error = document.getElementById("nrodoc_error");
	var sueldo_error = document.getElementById("sueldo_error");
	var texto = "";
	var error = false;
	if (nombre.value === null || nombre.value === "") {
		nombre.classList.add("error");
		nombre_error.innerHTML = "El campo 'Nombre' es obligatorio. ";
		error = true;
	}
	if (nrodoc.value === null || nrodoc.value === "") {
		nrodoc.classList.add("error");
		nrodoc_error.innerHTML = "El campo 'Nro. documento' es obligatorio. ";
		error = true;
	}
	if (sueldo.value === null || sueldo.value === "") {
		sueldo.classList.add("error");
		sueldo_error.innerHTML = "El campo 'Sueldo' es obligatorio. ";
		error = true;
	}
	
	if(error){
		
	}else{
		texto="Se han ingresado correctamente los datos.";
		contenido_info.innerHTML = texto;
			$("#infoBox").show(1000);
		
	}
}
	
	document.getElementById("uploadBtn").onchange = function () {
	    document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
	};

