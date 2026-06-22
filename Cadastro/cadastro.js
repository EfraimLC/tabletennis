const cadastro = (event) => {
  event.preventDefault();

  const loginInputValue = document.getElementById("nome");
  const senhaInputValue = document.getElementById("senha");
  const adressInputValue = document.getElementById("endereço");
  const emailInputValue = document.getElementById("email");

  const usuarioASerSalvo = {
    nome: loginInputValue.value,
    senha: senhaInputValue.value,
    endereço: adressInputValue.value,
    email: emailInputValue.value,
  };

  let valoresJaSalvos = JSON.parse(localStorage.getItem("usuariosParaLogin"));

  if (!valoresJaSalvos) {
    valoresJaSalvos = [];
  }

  valoresJaSalvos.push(usuarioASerSalvo);

  localStorage.setItem("usuariosParaLogin", JSON.stringify(valoresJaSalvos));
};
