    const cuenta = {
        email: "",
        password: ""
        }

function login(){
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
if (cuenta.email === email && cuenta.password === password) {
    localStorage.setItem("email", email);
    window.location.href = "../index.html";
}
};
