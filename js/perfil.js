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

    My key: X9B4-H4N7-SZ5N-R0UH

*/

console.error("!!! TESTE !!!")


fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => console.log(data.results[0]));