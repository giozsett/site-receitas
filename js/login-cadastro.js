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

/* Mensagens de erro referentes ao cadastro dos usuários.*/
function registerUser() {
    const form = document.getElementById("registerForm");
    const formData = new FormData(form);

    fetch('create.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        const mensagemErro = document.getElementById("mensagemErro");
        
        if (data.erro) {
            mensagemErro.textContent = data.erro;
        } else {
            mensagemErro.textContent = "";
            alert(data.sucesso); // Exibe mensagem de sucesso
            login(); // Redireciona para a página de login
        }
    })
    .catch(error => {
        console.error("Erro ao registrar o usuário:", error);
    });
}
