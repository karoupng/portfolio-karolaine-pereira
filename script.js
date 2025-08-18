//Para que o formulário tenha uma ação de recebimento de mensagens, fiz uma ligação com uma planilha

// Função para o envio do formulário
function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.querySelector('input[name="data[nome]"]').value;
  const email = document.querySelector('input[name="data[email]"]').value;
  const mensagem = document.querySelector(
    'textarea[name="data[mensagem]"]'
  ).value;

  // Enviando dados para a planilha no SheetDb, que simula o meu servidor
  fetch("https://sheetdb.io/api/v1/g7a5yho002c9p", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Formato padrão de cabeçalho quando enviamos em formato json pelo fetch
    },
    // os dados são enviados dentro de "data" pois as células da planilha solicitam o nome dessa forma
    body: JSON.stringify({
      data: {
        nome: nome,
        email: email,
        mensagem: mensagem,
      },
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Sua mensagem foi enviada com sucesso para Karolaine!");
    })
    .catch((error) => {
      alert("Erro! Sua mensagem não foi enviada, tente novamente.");
    });
}

// Liga o evento submit do formulário à função enviarFormulario
document.querySelector("form").addEventListener("submit", enviarFormulario);
