function logar(){
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    if(login == "admin" && password == "admin123"){
        location.href = "acesso.html";
    }
    else{
        alert("Login ou senha incorretos\n Insira novamente" );
    }
}
function telaDeCadastro(){
    location.href = "cadastrar.html";
}

email.addEventListener('focus', () =>{
    email.style.borderColor="#651aa2"
});
email.addEventListener('blur', () =>{
    email.style.borderColor="#ffff"
});

password.addEventListener('focus', () =>{
    password.style.borderColor="#651aa2"
});
password.addEventListener('blur', () =>{
    password.style.borderColor="#ffff"
});
