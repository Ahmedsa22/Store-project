document.addEventListener('DOMContentLoaded', function () {
    
    //gestion des tabs
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          
            tabButtons.forEach(btn => btn.classList.remove('active'));
          
            tabContents.forEach(content => content.classList.remove('active'));

            
            button.classList.add('active');

           
            const tabId = button.getAttribute('data-tab');
            const targetTab = document.getElementById(tabId);
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });


    //gestion de ajout products


    const buttonEnrgs = document.getElementById('Enregistrer');
    const ProduitImage = document.getElementById('product-image');
    let AllProducts = [];
    let imagePath = "";
    
    ProduitImage.addEventListener('change', function () {
      const file = this.files[0];
      if (file) {
        imagePath = `images/${file.name}`;
        console.log("Chemin de l'image :", imagePath);
      }
    });
    
    buttonEnrgs.addEventListener('click', function (event) {
      event.preventDefault(); // ⛔ empêche le rechargement de la page
    
      const Produit = {
        nom: document.getElementById('product-name').value.trim(),
        category: document.getElementById('product-category').value.trim(),
        price: document.getElementById('product-price').value.trim(),
        Stock: document.getElementById('product-stock').value.trim(),
        description: document.getElementById('product-description').value.trim(),
        avantages: document.getElementById('product-benefits').value.trim(),
        image: imagePath
      };
    
      AllProducts.push(Produit);
      //stocker AllProducts dans le localstorage

    localStorage.setItem("AllProducts",JSON.stringify(AllProducts));
    

    console.log("Tous les produits :", AllProducts);
    });

    





});
