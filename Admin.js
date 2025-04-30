// Tab functionality
function openTab(evt, tabName) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabButtons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
};

// Liste pour stocker tous les produits ajoutés


// Déclarez allProducts en dehors de la fonction click pour qu'elle persiste
let allProducts = [];

const ButtonAjoutTab = document.getElementById("ButtonAjoutTab");
const ButtonEnrgs = document.getElementById("Enregistrer"); // Assurez-vous que l'ID est correct

// Attachez l'écouteur d'événements inconditionnellement (ou gérez l'état actif ailleurs)
ButtonEnrgs.addEventListener('click', function() {
    const Price = document.getElementById('product-price');
    const image = document.getElementById('product-image');
    const description = document.getElementById('product-description');
    const avantage = document.getElementById('product-benefits');
    const categorie = document.getElementById('product-category').value;

    let productAdded = {
        image: "",
        prix: "",
        categorie: "",
        description: "",
        avantage: ""
    };

    // Récupère l'image
    if (image.files ?. image.files[0]) {
        productAdded.image = "images/" + image.files[0].name;
    } else {
        productAdded.image = "images/default-product.jpg";
    }

    // Récupère le prix
    productAdded.prix = Price.value;

    // Récupère la description
    productAdded.description = description.value;

    // Récupère l'avantage
    productAdded.avantage = avantage.value;

    // Récupère la catégorie
    productAdded.categorie = categorie;

    // Ajoute le produit à la liste globale
    allProducts.push(productAdded);
    console.log("Tous les produits :", allProducts);
});