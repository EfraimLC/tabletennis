let loginValido = [];

const login = (event) => {
    event.preventDefault();


    const usuario = document.getElementById("email");
    const senhaUser = document.getElementById("senha");

    
    let autorizado = false;
    loginValido.forEach((item) => {
        if (item.email == usuario.value && item.senha == senhaUser.value) {
            autorizado = true;
        }
    });

    if (autorizado) {
        alert('login liberado!');
    } else {
        alert('usuário ou senha incorretos.');
    }
}   