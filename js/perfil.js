/*
    - fetch
    - async 
    - await 
    - try 
    - .then
    - catch 
    - method 
    - Adicionar parâmetros à URL (query params) 
    - Lidando com Headers (autenticação, tokens, etc.) 

    My key: 

*/


fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => console.log(data.results[0]));

  //tem que colocar nome aleatorio nas publicacoes