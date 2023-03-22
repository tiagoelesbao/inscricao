window.addEventListener("DOMContentLoaded", () => {
    AOS.init()  
})

// Captura de video
var largura = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

const enviarIcon = `<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.4293 11.5H5.16504" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.02169 3.47557L19.0116 10.4687C19.4023 10.664 19.6491 11.0632 19.6491 11.5C19.6491 11.9368 19.4023 12.3361 19.0116 12.5313L5.02169 19.5245C4.6163 19.7272 4.12973 19.6737 3.77811 19.3877C3.42649 19.1017 3.27501 18.6362 3.39096 18.198L5.16507 11.5L3.39096 4.80204C3.27501 4.36386 3.42649 3.89839 3.77811 3.61237C4.12973 3.32635 4.6163 3.27283 5.02169 3.47557Z" stroke="#F7F7F7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`

//CAPT-V4
const emailV4 = document.querySelector(".email-v4")
const submitV4 = document.querySelector(".btn-submit-v4")

if (emailV4) {
    emailV4.addEventListener("focus", function(){
        submitV4.innerHTML = enviarIcon
        submitV4.classList.add("svg-ativo");
    })      
}

var modalConfirmacao = new bootstrap.Modal(document.getElementById('modalConfirmacao'))

//CAPT-V4
if(submitV4){
    submitV4.addEventListener("click", function(event){
        event.preventDefault()
        if(!submitV4.classList.contains("disabled")){
            let email = document.querySelector(".email-prepopulado")
            email.value = emailV4.value
            modalConfirmacao.show()
        } else {
            //nada
        }
    })
}

/* ----------------------- */

//CAPT-V5
const emailV5 = document.querySelector(".email-v5")
const submitV5 = document.querySelector(".btn-submit-v5")

if (emailV5) {
    emailV5.addEventListener("focus", function(){
        submitV5.innerHTML = enviarIcon
        submitV5.classList.add("svg-ativo");
    })      
}

var modalConfirmacao = new bootstrap.Modal(document.getElementById('modalConfirmacao'))

//CAPT-V5
if(submitV5){
    submitV5.addEventListener("click", function(event){
        event.preventDefault()
        if(!submitV5.classList.contains("disabled")){
            let email = document.querySelector(".email-prepopulado")
            email.value = emailV5.value
            modalConfirmacao.show()
        } else {
            //nada
        }
    })
}

/* ----------------------- */

//CAPT-V6
const emailV6 = document.querySelector(".email-v6")
const submitV6 = document.querySelector(".btn-submit-v6")

if (emailV6) {
    emailV6.addEventListener("focus", function(){
        submitV6.innerHTML = enviarIcon
        submitV6.classList.add("svg-ativo");
    })      
}

var modalConfirmacao = new bootstrap.Modal(document.getElementById('modalConfirmacao'))

//CAPT-V6
if(submitV6){
    submitV6.addEventListener("click", function(event){
        event.preventDefault()
        if(!submitV6.classList.contains("disabled")){
            let email = document.querySelector(".email-prepopulado")
            email.value = emailV6.value
            modalConfirmacao.show()
        } else {
            //nada
        }
    })
}

/* ----------------------- */

//CAPT-V11
const emailV11 = document.querySelector(".email-v11")
const submitV11 = document.querySelector(".btn-submit-v11")

if (emailV11) {
    emailV11.addEventListener("focus", function(){
        submitV11.innerHTML = enviarIcon
        submitV11.classList.add("svg-ativo");
    })      
}

var modalConfirmacao = new bootstrap.Modal(document.getElementById('modalConfirmacao'))

//CAPT-V11
if(submitV11){
    submitV11.addEventListener("click", function(event){
        event.preventDefault()
        if(!submitV11.classList.contains("disabled")){
            let email = document.querySelector(".email-prepopulado")
            email.value = emailV11.value
            modalConfirmacao.show()
        } else {
            //nada
        }
    })
}

