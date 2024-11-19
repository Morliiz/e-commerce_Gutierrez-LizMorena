const cuenta = {
    email: "milo@guit.com",
    password: "123456"
}

const form = document.querySelector("form");
const hola = (evento) => {
    evento.preventDefault()
        if (cuenta.email === form.elements.email.value && cuenta.password === form.elements.password.value) {
                localStorage.setItem("email", form.elements.email.value);
                localStorage.setItem("password", form.elements.password.value);
                window.location.href = "../index.html";
        }else{
            alert("incorrecto");
        }
}
form.addEventListener("submit", hola);