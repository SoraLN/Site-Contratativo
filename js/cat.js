const url = "https://api.thecatapi.com/v1/images/search"



const botao = document.getElementById("botao")

async function chamarAPI(){

    const resp = await fetch(url)

    const obj = await resp.json()

    return obj[0].url

}

botao.addEventListener("click", async ()=>{

    let novaImagem = document.createElement("img");
    novaImagem.setAttribute("class", "teste")


    const imagemUrl = await chamarAPI();    
    novaImagem.src = imagemUrl
    
    document.body.appendChild(novaImagem); 

})