document.addEventListener('DOMContentLoaded',function(){
    const ProduitData = [
        {
          description: "Manette sans fil ergonomique pour console X.",
          image: "images/manettex.jpg",
          price: "$49.99",
          category: "manettes",
          avantages: `<p style="color:rgb(85, 233, 238); font-weight: bold;"><span style="font-size: 1.5em;">🎮</span> Prise en main divine, vos mains vous remercieront après des heures de jeu ! Transmission de pensée intégrée pour une réactivité instantanée. ✨</p>`,
        },
        {
          description: "Jeu CD : Aventure épique dans un monde fantastique.",
          image: "images/images (15).jpeg",
          price: "$59.99",
          category: "CD",
          avantages: `<p style="color: #FFA07A; font-style: italic;"><span style="font-size: 1.5em;">🌍</span> Plongez dans un univers si réel que vous sentirez le vent sur votre visage et le sol sous vos pieds. Les dragons parlent avec votre voix ! 🗣️</p>`,
        },
        {
          image: "images/pexels-sound-on-3394654.jpg",
          description: "Casque gaming avec microphone antibruit et son surround.",
          price: "$79.99",
          category: "accessoires",
          avantages: `<p style="color: #87CEFA;"><span style="font-size: 1.5em;">🎧</span> Un son si pur que vous entendrez les battements de cœur de vos ennemis à 10 kilomètres ! Microphone télépathique : vos coéquipiers entendront vos pensées les plus stratégiques. 🧠</p>`,
        },
        {
          image: "images/ChatGPT Image 19 avr. 2025, 19_44_58.png",
          description: "Console portable rétro avec 500 jeux intégrés.",
          price: "$89.99",
          category: "Console",
          avantages: `<p style="color: #FF69B4; font-weight: bold;"><span style="font-size: 1.5em;">🕹️</span> Revivez la gloire du passé avec une puissance du futur ! Les pixels ont une odeur de nostalgie et les boutons sont faits de larmes de joie de votre enfance. 😂</p>`,
        },
        {
          image: "images/manettecharger.jpg",
          description: "Double chargeur rapide pour manettes de console Y.",
          price: "$29.99",
          category: "manettes",
          avantages: `<p style="color: #F0E68C;"><span style="font-size: 1.5em;">⚡</span> Recharge vos manettes plus vite que la lumière ! Vos batteries seront toujours pleines, même après un trou noir de jeu intensif. 🌌</p>`,
        },
        {
          image: "images/ChatGPT Image 19 avr. 2025, 19_41_38.png",
          description: "Jeu CD : Course automobile ultra réaliste.",
          price: "$49.99",
          category: "CD",
          avantages: `<p style="color: #00CED1; font-style: italic;"><span style="font-size: 1.5em;">🏎️</span> Des graphismes si réels que vous sentirez l'odeur de l'asphalte brûlant et le goût de la victoire ! Votre voiture aura une âme et vous parlera de ses performances. 🚗💬</p>`,
        },
        {
          image: "images/tapisSouris.jpg",
          description: "Tapis de souris gaming XXL avec surface antidérapante.",
          price: "$24.99",
          category: "accessoires",
          avantages: `<p style="color:rgb(23, 223, 223);"><span style="font-size: 1.5em;">🖱️</span> Une surface si lisse que votre souris glissera comme sur un nuage ! Anti-gravité intégré : votre souris ne tombera jamais, même en cas de tremblement de terre. 🌠</p>`,
        },
        {
          image: "images/Abonnement annuel.jpeg",
          description: "Abonnement annuel à un service de jeux en ligne.",
          price: "$59.99",
          category: "Console",
          avantages: `<p style="color: #DA70D6; font-weight: bold;"><span style="font-size: 1.5em;">✨</span> Un portail magique vers des milliers de mondes ! Vos amis deviendront vos alliés dans des aventures sans fin. L'abonnement inclut un café virtuel illimité. ☕</p>`,
        },
        {
          image: "images/SupportZ.png",
          description: "Support vertical pour console Z avec ventilateur intégré.",
          price: "$39.99",
          category: "Support",
          avantages: `<p style="color: #FFD700;"><span style="font-size: 1.5em;">⚙️</span> Maintient votre console à une température idéale, même au cœur d'une supernova de puissance ! Champ de force anti-poussière intégré. 🛡️</p>`,
        },
        {
          image: "images/jeurealite.jpeg",
          description: "Jeu CD : Stratégie en temps réel dans un univers médiéval.",
          price: "$64.99",
          category: "CD",
          avantages: `<p style="color: #4682B4; font-style: italic;"><span style="font-size: 1.5em;">🏰</span> Commandez des armées légendaires avec une précision divine ! Vos ordres se murmureront à l'oreille de vos unités à travers le temps et l'espace. ⏳</p>`,
        },
        {
          image: "images/adapter.png",
          description: "Adaptateur Bluetooth pour connecter des manettes tierces.",
          price: "$19.99",
          category: "manettes",
          avantages: `<p style="color: #3CB371;"><span style="font-size: 1.5em;">🔗</span> Connecte tout et n'importe quoi avec une facilité déconcertante ! Crée des ponts interdimensionnels entre vos périphériques. 🌉</p>`,
        },
        {
          image: "images/Nettoyant.png",
          description: "Nettoyant pour écran de console et chiffon en microfibre.",
          price: "$9.99",
          category: "accessoires",
          avantages: `<p style="color: #E0FFFF;"><span style="font-size: 1.5em;">🧼</span> Rend votre écran plus pur que les larmes d'une licorne ! Le chiffon a le pouvoir d'effacer les regrets de vos défaites passées. ✨</p>`,
        },
        {
          image: "images/CarteSD.jpg",
          description: "Carte mémoire haute capacité pour console portable.",
          price: "$34.99",
          category: "Console",
          avantages: `<p style="color: #BA55D3; font-weight: bold;"><span style="font-size: 1.5em;">💾</span> Un espace de stockage infini dans une carte minuscule ! Vous pourrez télécharger l'intégralité d'internet et il restera encore de la place pour vos sauvegardes. 🤯</p>`,
        },
        {
          image: "images/supportCasque.jpg",
          description: "Support mural pour ranger vos casques gaming.",
          price: "$14.99",
          category: "Support",
          avantages: `<p style="color: #CD853F;"><span style="font-size: 1.5em;"><0xF0><0x9F><0x93><0x82></span> Un trône majestueux pour votre précieux casque ! Il lévitera légèrement, bercé par une douce mélodie de victoire. 🎶</p>`,
        },
        {
          image: "images/automobile.jpg",
          description: "Jeu CD : Simulation de sport automobile.",
          price: "$54.99",
          category: "CD",
          avantages: `<p style="color: #DC143C; font-style: italic;"><span style="font-size: 1.5em;">🏁</span> Des sensations de vitesse si intenses que vous sentirez le vent décoiffer votre avatar ! Votre voiture aura des ailerons qui se déploient par la pensée. 🧠💨</p>`,
        },
        {
          image: "images/Protection.jpeg",
          description: "Protection en silicone antidérapante pour manette.",
          price: "$12.99",
          category: "manettes",
          avantages: `<p style="color: #8FBC8F;"><span style="font-size: 1.5em;">🛡️</span> Une armure indestructible pour votre manette ! Elle résistera à une chute du Mont Everest et aux morsures d'un chien enragé. 🐕⛰️</p>`,
        },
        {
          image: "images/Hub.jpg",
          description: "Hub USB 3.0 avec ports supplémentaires pour votre console.",
          price: "$27.99",
          category: "accessoires",
          avantages: `<p style="color: #483D8B;"><span style="font-size: 1.5em;">🔌</span> Multipliez vos connexions à l'infini ! Chaque port a sa propre dimension parallèle pour brancher encore plus de périphériques. ♾️</p>`,
        },
        {
          image: "images/Manette .jpg",
          description: "Manette filaire économique pour joueur occasionnel.",
          price: "$29.99",
          category: "Console",
          avantages: `<p style="color: #2F4F4F;"><span style="font-size: 1.5em;">🕹️</span> Une simplicité efficace avec une fiabilité à toute épreuve ! Elle fonctionnera même après avoir traversé un voyage dans le temps. ⏳</p>`,
        },
        {
          image: "images/Meuble .jpg",
          description: "Meuble de rangement multimédia pour consoles et jeux.",
          price: "$129.99",
          category: "Support",
          avantages: `<p style="color: #A0522D;"><span style="font-size: 1.5em;"><0xF0><0x9F><0x97><0x84>️</span> Un sanctuaire élégant pour votre royaume du jeu ! Il s'agrandit magiquement pour accueillir toutes vos nouvelles acquisitions. ✨</p>`,
        },
        {
          image: "images/RPG.jpg",
          description: "Jeu CD : RPG en monde ouvert avec des quêtes épiques.",
          price: "$69.99",
          category: "CD",
          avantages: `<p style="color: #B8860B; font-style: italic;"><span style="font-size: 1.5em;">⚔️</span> Des aventures si vastes que vous y perdrez la notion du temps et de l'espace ! Les PNJ vous offriront des quêtes basées sur vos rêves les plus secrets. 🤫</p>`,
        },
        {
          image: "images/clavier.jpg",
          description:
            "Clavier ergonomique avec rétroéclairage LED pour une meilleure expérience de frappe.",
          price: "$19.99",
          category: "accessoires",
          avantages: `<p style="color: #6B8E23;"><span style="font-size: 1.5em;">⌨️</span> Des touches si douces que vos doigts danseront comme des fées ! Le rétroéclairage s'adapte à votre humeur et projette des constellations sur votre bureau. 🌠</p>`,
        },
        {
          image: "images/moniteur.jpg",
          description:
            "Écran Full HD 24 pouces avec technologie anti-reflets et taux de rafraîchissement 75Hz.",
          price: "$200",
          category: "accessoires",
          avantages: `<p style="color: #008080;"><span style="font-size: 1.5em;">🖥️</span> Une clarté d'image à couper le souffle, vous verrez les atomes de vos ennemis ! Le taux de rafraîchissement plie le temps pour une fluidité absolue. ⏳</p>`,
        },
        {
          image: "images/Pcgaming.jpg",
          description:
            "PC Gamer haut de gamme avec processeur i9, RTX 4080, et 32 Go de RAM.",
          price: "$3000",
          category: "Console",
          avantages: `<p style="color: #4169E1; font-weight: bold;"><span style="font-size: 1.5em;">🚀</span> Une puissance de calcul digne d'un superordinateur de la NASA ! Il voyagera dans le temps pour vous apporter les futurs patchs de vos jeux préférés. 🌠</p>`,
        },
        {
          image: "images/Ps5.jpg",
          description:
            "Console PlayStation 5 avec lecteur de disque et manette DualSense incluse.",
          price: "$699.99",
          category: "Console",
          avantages: `<p style="color: #FF4500;"><span style="font-size: 1.5em;">🔥</span> Une immersion sensorielle inégalée, vous sentirez la chaleur des explosions et le rugissement des moteurs ! La manette lit vos émotions et les retranscrit en vibrations. 🤯</p>`,
        },
        {
          image: "images/souris.jpg",
          description:
            "Souris optique sans fil, idéale pour le bureau ou le gaming occasionnel.",
          price: "$12.75",
          category: "accessoires",
          avantages: `<p style="color: #778899;"><span style="font-size: 1.5em;">🖱️</span> Une précision chirurgicale pour des headshots millimétriques ! Elle se téléporte derrière vos ennemis pour les surprendre. 💨</p>`,
        },
        {
          image: "images/usb.jpg",
          description: "Clé USB 64 Go à haute vitesse, compatible USB 3.0.",
          price: "$7.75",
          category: "accessoires",
          avantages: `<p style="color: #B0E0E6;"><span style="font-size: 1.5em;">💾</span> Transfère des téraoctets de données en un clin d'œil ! Elle a une capacité de stockage extensible à l'infini grâce à la magie quantique. ✨</p>`,
        },
        {
          image: "images/ventilateur.jpg",
          description:
            "Ventilateur portable silencieux avec 3 vitesses et oscillation automatique.",
          price: "$49.75",
          category: "accessoires",
          avantages: `<p style="color: #FAF0E6;"><span style="font-size: 1.5em;">🌬️</span> Crée une brise fraîche venue d'un paradis tropical, même au milieu d'une canicule ! Il murmure des compliments à vos oreilles pendant que vous jouez. 🌴</p>`,
        },
      ];

      const ProductContainer = document.getElementById('ProductContainer');
      

    /*Afficher tous les produits */
    function ShowItems(ProduitData) {
      let AllProducts = "";
      ProduitData.forEach(Produit => {
        AllProducts += `
          <div class="item" data-category="${Produit["category"]}">
            <img src="${Produit["image"]}" class="product-image" alt="${Produit["description"]}" data-details='${JSON.stringify(Produit)}'>
            <p class="description">${Produit["description"]}</p>
            <div class="price">${Produit["price"]}</div>
            <button type="submit" class="add-to-cart" data-name="${Produit["description"]}" data-price="${Produit["price"].replace('$', '')}">
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
        modalPrice.textContent = productDetails.price;
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
        price: itemPrice,
        imageSrc: itemImageSrc,
        imageAlt: itemImageAlt,
        quantity: 1 
      };
  
      const cart = localStorage.getItem('cart');
      let cartItems = cart ? JSON.parse(cart) : [];
  
      
      const existingItemIndex = cartItems.findIndex(item => item.name === cartItemToAdd.name);
  
      if (existingItemIndex > -1) {
        
        cartItems[existingItemIndex].quantity++;
        cartItems[existingItemIndex].price += cartItemToAdd.price; // Ajouter le prix de l'unité
      } else {
        // Si l'article n'existe pas, l'ajouter au panier
        cartItems.push(cartItemToAdd);
      }
  
      localStorage.setItem('cart', JSON.stringify(cartItems));
  
      alert(`"${itemName}" a été ajouté au panier (quantité mise à jour si nécessaire).`);
    });
  });


  /**Afficher les details du produits */
  

    

          
});
    



    


      
