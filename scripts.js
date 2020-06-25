const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.curso')

for(let curso of cards){
    curso.addEventListener('click', function(){
        const embed = curso.getAttribute('id')

        modalOverlay.classList.add('active')
        modal.classList.remove('maximize')

        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${embed}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modal.classList.remove('maximize')
    modalOverlay.querySelector('iframe').src = ""
})

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