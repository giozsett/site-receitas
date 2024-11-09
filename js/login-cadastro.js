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

/* Função para exibir as mensagens de erro ou sucesso do cadastro de usuários.*/
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
        const mensagemSucesso = document.getElementById("mensagemSucesso");
        
        if (data.erro) {
            mensagemErro.textContent = data.erro;
            mensagemSucesso.textContent = ""; // Limpa a mensagem de sucesso
        } else {
            mensagemErro.textContent = ""; // Limpa a mensagem de erro
            mensagemSucesso.textContent = data.sucesso; // Exibe a mensagem de sucesso
            
            // Opcional: Limpa os campos do formulário após o cadastro
            form.reset();

            // Opcional: Redireciona para a página de login após alguns segundos
            setTimeout(() => {
                login(); // Mostra a seção de login
                mensagemSucesso.textContent = ""; // Limpa a mensagem de sucesso
            }, 3000);
        }
    })
    .catch(error => {
        console.error("Erro ao registrar o usuário:", error);
    });
}

function loginUser() {
    const email = document.getElementById("emailLogin").value;
    const senha = document.getElementById("senhaLogin").value;
    const mensagemErroLogin = document.getElementById("mensagemErroLogin");

    // Cria um FormData com as credenciais de login
    const formData = new FormData();
    formData.append("email", email);
    formData.append("senha", senha);

    // Faz a requisição AJAX para o login.php
    fetch('php/login.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.erro) {
            mensagemErroLogin.textContent = data.erro; // Exibe a mensagem de erro
        } else if (data.sucesso) {
            window.location.href = 'home.php'; // Redireciona para a página inicial
        }
    })
    .catch(error => {
        console.error("Erro ao realizar o login:", error);
        mensagemErroLogin.textContent = "Erro ao realizar o login. Tente novamente mais tarde.";
    });
}


