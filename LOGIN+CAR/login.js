Login.js
const cuenta = {
    email: "milo@gmail.com",
    password: "123456"
}

const form = document.querySelector("form");
const hola = (evento) => {
    evento.preventDefault()
        if (cuenta.email === form.elements.email.value && cuenta.password === form.elements.password.value) {
                localStorage.setItem("email", form.elements.email.value);
                localStorage.setItem("contrasena", form.elements.password.value);
                window.location.href = "./index.html";
        }else{
            alert("incorrecto");
        }
}
console.log(hoo)
form.addEventListener("submit", hola);