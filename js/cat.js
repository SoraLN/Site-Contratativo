const url = "https://api.thecatapi.com/v1/images/search"

const botao = document.getElementById("button_main")

async function chamarAPI(){

    const resp = await fetch(url)

    const obj = await resp.json()

    return obj[0].url

}

botao.addEventListener("click", async ()=>{

    async function create() {
        async function create_container(){

            let container = document.getElementById("container_main")
            container.classList.remove("esconder")
            let clone = container.cloneNode(true)
            
            document.getElementById("conjunto_main").appendChild(clone)
    
            let container_photo = clone.querySelector("#photo-main")
            let photo = document.createElement("img")
    
            container_photo.appendChild(photo)
    
            photo.src = await chamarAPI()
    
    
    
        async function create_hours(){
    
            let hours = clone.querySelector("#user_hours")
    
            let horas = document.createElement("p")
            let minutos = document.createElement("p")
    
            horas.innerHTML = Math.floor(Math.random()*23)  + ":"
            minutos.innerHTML = Math.floor(Math.random()*60)
            minutos.classList.add("espacamento_minutos")
    
            hours.appendChild(horas)
            hours.appendChild(minutos)
        }
        create_hours()
    }
    create_container()
}

    for(let i = 0; i < 6; i++){
        await create()
    }

    botao.classList.remove("button_main")
    botao.classList.add("button_main_2")

})

//Excluir o first child quando clicar no botao, para escluir a primeira pagina
//Colocar comentarios e like aleatorios
//Colocar perfil randowm