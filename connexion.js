const urlApi = 'http://localhost:8888/api_php/';
const connectForm = document.querySelector('.connexion');

connectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let ident = {
        login: document.querySelector('.login').value ,
        password: document.querySelector('.password').value 
    }
    console.log(ident)
    fetch(urlApi + 'auth', {
        method: 'POST',
        headers: {
            'content-Type':'application/json'
        },
        body: JSON.stringify(ident)
    })
    .then(response => {
        response.json()
    })
    .then (response => {
        console.log(response)
    })
    .catch(error => console.error(error))
})