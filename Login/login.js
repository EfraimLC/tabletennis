const login = (event) => {
    event.preventDefault();

    const usuario = document.getElementById("nome");
    const senhaUser = document.getElementById("senha");

    const listaLoginsValidos = JSON.parse(localStorage.getItem('usuariosParaLogin'));

    const usuarioValidado = listaLoginsValidos.find((item) =>
        item.nome === usuario.value && item.senha === senhaUser.value
    );
    
    if (usuarioValidado) {
        alert('ele pode entrar!', usuarioValidado);
        window.location.href = 'https://www.google.com/';
    }
    else {
        alert('ele não pode entrar!');
    }
}
