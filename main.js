const urlApi = 'http://localhost:8888/api_php/';
const catListe = document.querySelector('.categories-list');
const prodListe = document.querySelector('.produits-list');
const catTitle = document.querySelector('.titre-categorie');

//listing des catégories
fetch(urlApi + 'categories')
    .then(response => response.json())
    .then(response => {
        console.log(response)
        let template = ''
        response.data.forEach(category => {
            template += `<li class="cat-item" data-id="${category.id_categorie}">${category.nom}</li>`
        });
        catListe.innerHTML = template
    })
    .catch(error => console.error(error));

const fetchCategory = (id=1) => {
    // Une catégorie + listing des produits
    fetch(urlApi + 'categories/' + id)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            let template = ''
            response.produits.data.forEach(element => {
                template += `<li data-id="${element.id_produit}">${element.nom}</li>`
            });
            prodListe.innerHTML = template
            catTitle.innerText =  `"${response.data[0].nom} (${response.produits.nb_hits} produits)"`
        })
    .catch(error => console.error(error));
}

fetchCategory();

catListe.addEventListener("click", (e) => {
    if (e.target.classList.contains('cat-item')) {
        fetchCategory(e.target.dataset.id)
    }
})