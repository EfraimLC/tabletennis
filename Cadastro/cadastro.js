let loginValido = [];

const cadastro = (event) => {
  event.preventDefault();

  const usuarioCadastro = document.getElementById("nome");
  const senhaCadastro = document.getElementById("senha");
  const adressCadastro = document.getElementById("endereço");
  const emailCadastro = document.getElementById("email");

  loginValido.push({
    login: usuarioCadastro.value,
    senha: senhaCadastro.value,
    endereço: adressCadastro.value,
    emailCadastro: emailCadastro.value,
  });
  alert("cadastro", loginValido);
};
