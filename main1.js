
let ProduitData = JSON.parse(localStorage.getItem("AllProducts")) || [];


document.addEventListener('DOMContentLoaded',function(){


  console.log(ProduitData);
   

      const ProductContainer = document.getElementById('ProductContainer');
      

    /*Afficher tous les produits */
    function ShowItems(ProduitData) {
      let AllProducts = "";
      ProduitData.forEach(Produit => {
        AllProducts += `
          <div class="item" data-category="${Produit["category"]}">
            <img src="${Produit["image"]}" class="product-image" alt="${Produit["description"]}" data-details='${JSON.stringify(Produit)}'>
            <p class="description">${Produit["nom"]}</p>
            <p class="description">${Produit["description"]}</p>
            <div class="price">${Produit["Price"]} MAD</div>
            <p class="description">Stock: ${Produit["Stock"]}</p>
            <button type="submit" class="add-to-cart" data-name="${Produit["description"]}" data-price="${Produit["Price"]}">
              <i class="fa-solid fa-bag-shopping fa-2xl"></i>
            </button>
          </div>`;
      });
      return AllProducts;
    }

    ProductContainer.innerHTML = ShowItems(ProduitData);

    // Récupérer la modale et ses éléments
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeButton = document.querySelector(".close-button");
    const modalDescription = document.getElementById("modalDescription");
    const modalPrice = document.getElementById("modalPrice");
    const modalAdvantages = document.getElementById("modalAdvantages");

    // Ajouter un écouteur d'événements à chaque image après qu'elles aient été chargées
    const productImages = ProductContainer.querySelectorAll(".product-image");
    productImages.forEach(img => {
      img.addEventListener('click', function() {
        const productDetails = JSON.parse(this.dataset.details);
        modal.style.display = "block";
        modalImage.src = this.src;
        modalImage.alt = this.alt;
        modalDescription.textContent = productDetails.description;
        modalPrice.textContent = productDetails.Price;
        modalAdvantages.innerHTML = productDetails.avantages; // Utiliser innerHTML pour interpréter le HTML

        // Empêcher le défilement du corps pendant que la modale est ouverte (facultatif)
        document.body.style.overflow = 'hidden';
      });
    });

    // Ajouter un écouteur d'événements pour fermer la modale en cliquant sur le bouton "x"
    closeButton.addEventListener('click', function() {
      modal.style.display = "none";
      document.body.style.overflow = 'auto'; // Réactiver le défilement du corps
    });

    // Fermer la modale en cliquant en dehors de l'image
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto'; // Réactiver le défilement du corps
      }
    });

    /*creer categories filtres */
        const CategoriesContainer = document.getElementById('categorie');
        let categories = [];
        let optionsHtml =`<option value="all">Toutes les catégories</option>`
        ProduitData.forEach(produit=>{
            if(!categories.includes(produit['category'])){
                categories.push(produit['category']);
                optionsHtml += `<option value="${produit['category']}">${produit['category']}</option>`;
            }
        })
        CategoriesContainer.innerHTML=optionsHtml

/*Filtrage par Categorie de filtre*/ 
    
        const categorySelected = document.getElementById('categorie');
        const items = ProductContainer.querySelectorAll('.item');

        categorySelected.addEventListener('change', function() {
        const category = this.value;

        items.forEach(item => {
            const itemCategory = item.dataset.category;

            if (category === "all") {
            item.classList.remove('hidden');
            } else if(category === itemCategory){
              item.classList.remove('hidden');
            }
            else {
            item.classList.add('hidden');
            }
        });
        });
/*serch liee au categorie*/
        function SearchItem(SearchValue){
          let ItemSearched = [];
          let UserINPUT= SearchValue.toLowerCase().trim();
          ProduitData.forEach(Produit=>{
            let ProduitSearched = Produit['description'].toLowerCase().trim();
            if(ProduitSearched.includes(UserINPUT)){
              ItemSearched.push(Produit);
            }  
          });
          return ItemSearched;
        }

      const Search = document.getElementById("search");

      Search.addEventListener('input',function(){
        let SearchValue = this.value;
        let ItemSearched = SearchItem(SearchValue);
        ProductContainer.innerHTML=ShowItems(ItemSearched);
      })
  
  /* Button vers panier */
      const ButtonPanier = document.getElementById('panier');
      ButtonPanier.addEventListener('click',function(){
        window.location.href = "payment.html";
      })
  /*button ajouter au panier */
  const ButtonAjoutPanier = document.querySelectorAll(".add-to-cart");
  ButtonAjoutPanier.forEach(button => {
    button.addEventListener('click', function() {
      const item = this.closest(".item");
      const itemName = item.querySelector(".description").textContent;
      const itemPrice = parseFloat(item.querySelector(".price").textContent.replace('$', '')); // Convertir le prix en nombre
      const itemImageSrc = item.querySelector(".product-image").src;
      const itemImageAlt = item.querySelector(".product-image").alt;
  
      const cartItemToAdd = {
        name: itemName,
        Price: itemPrice,
        imageSrc: itemImageSrc,
        imageAlt: itemImageAlt,
        quantity: 1 
      };
  
      const cart = localStorage.getItem('cart');
      let cartItems = cart ? JSON.parse(cart) : [];
  
      
      const existingItemIndex = cartItems.findIndex(item => item.name === cartItemToAdd.name);
  
      if (existingItemIndex > -1) {
        
        cartItems[existingItemIndex].quantity++;
        cartItems[existingItemIndex].Price += cartItemToAdd.Price; // Ajouter le prix de l unite
      } else {
        // Si l article n existe pas  ajouter au panier
        cartItems.push(cartItemToAdd);
      }
  
      localStorage.setItem('cart', JSON.stringify(cartItems));
  
      alert(`"${itemName}" a été ajouté au panier (quantité mise à jour si nécessaire).`);
    });
  });




    

          
});
    



    


      
