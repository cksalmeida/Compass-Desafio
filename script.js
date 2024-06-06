document.getElementById('adopt-button1').addEventListener('click', function() {
    document.getElementById('modal-form1').showModal()
})

document.getElementById('adopt-button2').addEventListener('click', function() {
    document.getElementById('modal-form1').showModal()
})

document.getElementById('cancel-button').addEventListener('click', function() {
    document.getElementById('modal-form1').close();
})

document.getElementById('donate-button1').addEventListener('click', function() {
    document.getElementById('modal-form2').showModal()
})

document.getElementById('donate-button2').addEventListener('click', function() {
    document.getElementById('modal-form2').showModal()
})

document.getElementById('cancel-button2').addEventListener('click', function() {
    document.getElementById('modal-form2').close()
})

const carrosel = document.querySelector('.carrosel-imagens')
const arrowButton = document.querySelectorAll('.carrosel-container .botao-carrosel')
const images = document.querySelectorAll('.imagem-carrosel')

const imagesToShow = 3
const totalImages = images.length
const imageWidth = carrosel.clientWidth / imagesToShow

for (let i = 0; i < imagesToShow; i++) {
    carrosel.appendChild(images[i].cloneNode(true))
    carrosel.insertBefore(images[totalImages - 1 - i].cloneNode(true), images[0])
}

let index = imagesToShow

const updateCarrosel = (instant = false) => {
    carrosel.scrollTo({
        left: index * imageWidth,
        behavior: instant ? 'auto' : 'smooth'
    })
}

updateCarrosel(true)

arrowButton.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.id === 'botao-anterior') {
            index--
            if (index < 0) {
                index = totalImages
                updateCarrosel(true)
                index--
            }
        } else {
            index++
            if (index >= totalImages + imagesToShow) {
                index = imagesToShow
                updateCarrosel(true)
                index++;
            }
        }
        updateCarrosel();
    })
})

carrosel.addEventListener('scroll', () => {
    if (carrosel.scrollLeft <= 0) {
        index = totalImages
        updateCarrosel(true)
    } else if (carrosel.scrollLeft >= (totalImages + imagesToShow) * imageWidth) {
        index = imagesToShow
        updateCarrosel(true)
    }
})

document.getElementById('donate-form').addEventListener('submit', function(event) {
    event.preventDefault()
    
    window.location.href = 'success.html'
})