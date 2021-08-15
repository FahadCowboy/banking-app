document.querySelector('#submit-btn').addEventListener('click', function(){
    const userEmail = document.querySelector('#email-field').value
    const userPassword = document.querySelector('#password-field').value
    
    if(userEmail === 'olivierafahad' && userPassword === '.oliviera.'){
        window.location.href = 'index.html'
    }
})

