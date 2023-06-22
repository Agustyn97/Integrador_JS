const registrerForm = document.querySelector("#registration-container");
const nameInput = document.querySelector("#nombre");
const lastNameInput = document.querySelector("#apellido");
const phoneInput = document.querySelector("#number")
const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");

console.log(passInput.type);

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToLocalStorage = () => {
	localStorage.setItem("users", JSON.stringify(users));
};


/*Funciones Auxiliares*/

const isEmpty = (input) => {
	return !input.value.trim().length;
};

const isBetween = (input, min, max) => {
	return input.value.length >= min && input.value.length <= max;
};

const isEmailValid = (input) => {
	const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	return re.test(input.value.trim());
};

const isExistingEmail = (input) => {
	return users.some((user) => user.email === input.value.trim());
};

const isPassSecure = (input) => {
	const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
	return re.test(input.value.trim());
};

const isPhoneValid = (input) => {
	const re = /^[0-9]{10}$/;
	return re.test(input.value.trim());
};

const showError = (input, message) => {
	const formfield = input.parentElement;
	formfield.classList.remove("success");
	formfield.classList.add("error");
	const error = formfield.querySelector("small");
	error.style.display = "block";
	error.innerText = message;
}

const showSuccess = (input) => {
	const formField = input.parentElement;
	formField.classList.remove("error");
	formField.classList.add("success");
	const error = formField.querySelector("small");
	error.style.display = "none";
	error.textContent = "";
};

console.log({document})

/* Funciones de Validacion de Inputs */


const checkTextInput = (input) => {
	let valid = false;
	const minCharacters = 3;
	const maxCharacters = 24;

	if (isEmpty(input)) {
		showError(input, "Este campo es obligatorio")
		return;
	};
	if (!isBetween(input, minCharacters, maxCharacters)) {
		showError(
			input,
			`Este campo debe tener entre ${minCharacters} y ${maxCharacters} caracteres`
		);
		return;
	}

	showSuccess(input);
	valid = true;
	return valid;
};


const checkEmail = (input) => {
	let valid = false;

	if (isEmpty(input)) {
		showError(input, "El email es obligatorio");
		return;
	}

	if (!isEmailValid(input)) {
		showError(input, "El mail no es válido");
		return;
	}
	if (isExistingEmail(input)) {
		showError(input, "El mail ya se encuentra registrado");
		return;
	}
	showSuccess(input);
	valid = true;
	return valid;
};

const checkPassword = (input) => {
	let valid = false;
	if (isEmpty(input)) {
		showError(input, "La contraseña es obligatoria");
		return;
	}

	if (!isPassSecure(input)) {
		showError(
			input,
			"La contraseña debe tener al menos 8 caracteres, una mayuscula, una minuscula, un numero y un simbolo"
		);
		return;
	}

	showSuccess(input);
	valid = true;
	return valid;
};

const checkPhone = (input) => {
	let valid = false;

	if (isEmpty(input)) {
		showError(input, "El teléfono es obligatorio");
		return;
	}
	if (!isPhoneValid(input)) {
		showError(input, "El telefono no es válido");
		return;
	}

	showSuccess(input);
	valid = true;
	return valid;
};




/* Validacion General y Almacenamiento de datos */

const submitHandler = (e) => {
	console.log(e);
	alert("holaa si esta funcionando el registro")
	e.preventDefault();
	let isNameValid = checkTextInput(nameInput);
	let isLastNameValid = checkTextInput(lastNameInput);
	let isEmailValid = checkEmail(emailInput);
	let isPasswordValid = checkPassword(passInput);
	let isPhoneValid = checkPhone(phoneInput);

	console.log(isNameValid);

	let isValidForm =
		isNameValid &&
		isLastNameValid &&
		isEmailValid &&
		isPasswordValid &&
		isPhoneValid;

	if (isValidForm) {
		users.push({
			name: nameInput.value,
			lastName: lastNameInput.value,
			email: emailInput.value,
			password: passInput.value,
			phone: phoneInput.value,
		});

		saveToLocalStorage();
		alert("Te registraste con exito!!!!");
		window.location.href = "login.html";
	}
};


const init = () => {
	registrerForm.addEventListener("submit", submitHandler);
	nameInput.addEventListener("input", () => checkTextInput(nameInput));
	lastNameInput.addEventListener("input", () => checkTextInput(lastNameInput));
	emailInput.addEventListener("input", () => checkEmail(emailInput));
	passInput.addEventListener("input", () => checkPassword(passInput));
	phoneInput.addEventListener("input", () => checkPhone(phoneInput));
}

init(); 