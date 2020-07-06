const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.curso')

for(let curso of cards){
    curso.addEventListener('click', function(){
        const embed = curso.getAttribute('id')


    //Se quiser buscar as páginas explicativas da rocketseat é só usar o codigo abaixo:
    /* window.location.href = `https://rocketseat.com.br/${embed}` */
    
    //Se quiser buscar as páginas nativas é só usar o codigo abaixo:
    window.location.href = `/${embed}`

    })
}


const maximize = document.querySelector('.max')
const modal = document.querySelector('.modal')

maximize.addEventListener('click', function(){    
    if(modal.classList.contains('maximize')){ 
        modal.classList.remove('maximize')
    } else {
        /* document.getElementById('header').style.visibility = 'hidden'; */   
        modal.classList.add('maximize')
    }
})
