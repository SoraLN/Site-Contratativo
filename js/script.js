const xis = document.getElementById("xis_section")
const mensagem = document.getElementById("mensagem_id")
const section = document.getElementById("section_id")

xis.addEventListener("click", ()=>{
    section.style.display = "none"
})

mensagem.addEventListener("click", ()=>{
    section.style.removeProperty("display")
})

const funcionario = document.getElementById("funcionario_id")
const iframe = document.getElementById("my_employee")

funcionario.addEventListener("click", ()=>{

    const section = window.parent.document.getElementById("section_id")
    const nav = window.parent.document.getElementById("nav_id")
    const main = window.parent.document.getElementById("main_id")
    let conjunto_tag = [section, nav, main]

    conjunto_tag.map((x)=>{
        x.classList.add("iframe_background")
    })


    iframe.style.display = ""

})