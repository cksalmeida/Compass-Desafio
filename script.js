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
    document.getElementById('modal-form2').close();
})