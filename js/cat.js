const url = "https://api.thecatapi.com/v1/images/search"

const botao = document.getElementById("button_main")

async function chamarAPI(){

    const resp = await fetch(url)

    const obj = await resp.json()

    console.log(obj)

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
            let container_photo_main = clone.querySelector("#photo_main")

            let photo = document.createElement("img")
    
            container_photo.appendChild(container_photo_main)
            container_photo_main.appendChild(photo)

            container_photo.classList.add("desfoco")

            const new_photo = await chamarAPI()

            container_photo.style.backgroundImage = `url(${new_photo})`

            photo.src = new_photo  
    
        async function create_peripecias(){
    
            let hours = clone.querySelector("#user_hours")
    
            let horas = document.createElement("p")
            let minutos = document.createElement("p")
    
            horas.innerHTML = Math.floor(Math.random()*23)  + ":"
            minutos.innerHTML = Math.floor(Math.random()*60)
            minutos.classList.add("espacamento_minutos")
    
            hours.appendChild(horas)
            hours.appendChild(minutos)

        }
         create_peripecias()

        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {

                const firstName = data.results[0].name.first;
                const lastName = data.results[0].name.last;

                let name = clone.querySelector("#nome");
                name.innerHTML = `${firstName} ${lastName}`;
            })
            .catch(error => {
                console.error('Erro ao pegar o nome:', error);
            });

    }
     create_container()
}

    for(let i = 0; i < 8; i++){
        await create()

        const curtidas = document.getElementById("curtidas")
        curtidas.innerHTML = Math.floor(Math.random()*9999)

        if(curtidas.innerHTML == 0 || curtidas.innerHTML == null){
            curtidas.innerHTML = 3453
        }

        let contador = Math.floor(Math.random()*11)
        const photo_user = document.getElementById("photo_user");

        switch (contador){
            case 1:
                photo_user.src = "img/user-chef.png"
            break;
            
            case 2:
                photo_user.src = "img/user-coach.png"
            break;
                
            case 3:
                photo_user.src = "img/user-cowboy.png"
            break;
                    
            case 4:
                photo_user.src = "img/user-crown.png"
            break;
        
            case 5:
                photo_user.src = "img/user-driver-man.png"
            break;
            
            case 6:
                photo_user.src = "img/user-helmet-safety.png"
            break;
                
            case 7:
                photo_user.src = "img/user-md.png"
            break;
                
            case 8:
                photo_user.src = "img/user-nurse.png"
            break;

            case 9:
                photo_user.src = "img/user-pizza-delivery.png"
            break;

            case 10:
                photo_user.src = "img/user-scientist.png"
            break;

            case 11:
                photo_user.src = "img/user-visor.png"
            break;
        }
    }

    botao.classList.remove("button_main")
    botao.classList.add("button_main_2")

    const teste = document.getElementById("conjunto_main")
    teste.firstElementChild.classList.add("esconder")
    
})

//Colocar perfil randowm
//Colocar o botao para mudar de cor nos emotes