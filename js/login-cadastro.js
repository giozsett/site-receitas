function myMenuFunction(){
    let i = document.getElementById("navMenu");

    if(i.className === "nav-menu"){
        i.className += "responsive";
    } else {
        i.className = "nav-menu";
    }
}

let a = document.getElementById("loginBtn");
let b = document.getElementById("registerBtn");
let x = document.getElementById("login");
let y = document.getElementById("register");

function login(){
x.style.left  = "4px";
y.style.right = "-520px";
a.className  += " white-btn";
b.className   = "btn";
x.style.opacity  = "1";
y.style.opacity = "0";
}

function register(){
x.style.left  = "-510px";
y.style.right = "5px";
a.className   = "btn";
b.className  += " white-btn";
x.style.opacity  = "0";
y.style.opacity = "1";
}

/* Função referente ao cadastro de usuários.*/
function registerUser(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
    const form = document.getElementById("registerForm");
    const formData = new FormData(form);

    fetch('php/create.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const mensagemErro = document.getElementById("mensagemErro");
        const mensagemSucesso = document.getElementById("mensagemSucesso");
        
        if (data.erro) {
            mensagemErro.textContent = data.erro;
            mensagemSucesso.textContent = "";
        } else {
            mensagemErro.textContent = "";
            mensagemSucesso.textContent = data.sucesso;
            form.reset();

            setTimeout(() => {
                login();
                mensagemSucesso.textContent = "";
            }, 3000);
        }
    })
    .catch(error => {
        console.error("Erro ao registrar o usuário:", error);
    });
}





