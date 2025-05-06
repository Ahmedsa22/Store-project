

document.addEventListener('DOMContentLoaded', function () {
    let ListProdProm = JSON.parse(localStorage.getItem("ListProdProm")) || [];

    // Gestion des tabs
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

    // Gestion de l'ajout de produits
    const buttonEnrgs = document.getElementById('Enregistrer');
    const ProduitImage = document.getElementById('product-image');
    let imagePath = "";

    // Charger les anciens produits depuis le localStorage
    let AllProducts = JSON.parse(localStorage.getItem("AllProducts")) || [];

    ProduitImage.addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            imagePath = `images/${file.name}`;
        }
    });

    buttonEnrgs.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

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
        localStorage.setItem("AllProducts", JSON.stringify(AllProducts));

        console.log("Tous les produits :", AllProducts);

        // Réinitialiser les champs du formulaire
        document.getElementById('product-name').value = '';
        document.getElementById('product-category').value = '';                       
        document.getElementById('product-price').value = '';
        document.getElementById('product-stock').value = '';
        document.getElementById('product-description').value = '';
        document.getElementById('product-benefits').value = '';
        document.getElementById('product-image').value = '';
        imagePath = ''; 
    });



//partie gestion des 
    //ajout des produits dans la liste a gerer
   
       
    function AfficherProduit(AllProducts){
    const ListeContent = document.getElementById('ProduitsExistants');
    let ListeDesProduits = "";
    AllProducts.forEach((Produit, index) => {
        ListeDesProduits += `
            <tr class="produit">
                <td><img src="${Produit.image}" alt="Produit" width="50"></td>
                <td>${Produit.nom}</td>
                <td>${Produit.price} MAD</td>
                <td>${Produit.category}</td>
                <td>${Produit.Stock}</td>
                <td>
                    <div class="action-buttons">
                        <button class="edit-btn"><i class="fas fa-edit"></i></button>
                        <button class="delete-btn" data-index="${index}"><i class="fas fa-trash"></i></button>
                    </div>
                </td>
            </tr>`;
    });
        ListeContent.innerHTML = ListeDesProduits;
    }

    AfficherProduit(AllProducts);

    


    //gerer button supprimer produit

    const ButtonDelete = document.querySelectorAll(".delete-btn");
    ButtonDelete.forEach(button=>{
        button.addEventListener('click',function(){
            const PrdtDelet = this.getAttribute("data-index");
            AllProducts.splice(PrdtDelet,1);
            localStorage.setItem("AllProducts",JSON.stringify(AllProducts));
            AfficherProduit(AllProducts);
           
        });
    });

    //produits en promo 
    const PromoProductConteiner = document.getElementById('promotion-products');
    function AfficherProdProm (){
        let Htmlcontent = "";
        AllProducts.forEach((product,index)=>{
            Htmlcontent += `<option value="${index}">${product.nom}</option>`
        });
        return Htmlcontent
    };

    PromoProductConteiner.innerHTML = AfficherProdProm();


    //gerer la tab d ajout de promotion
   
 
    const ButtonPromo = document.getElementById('Ajout-Promo');

    ButtonPromo.addEventListener('click',function(event){
        event.preventDefault();
        let Prodpromo ={
            Nom : document.getElementById('promotion-name').value,
            Percent : document.getElementById('discount-percent').value,
            start : document.getElementById('start-date').value,
            end : document.getElementById('end-date').value,
            PrpduitIndex : document.getElementById('promotion-products').value
        }
        ListProdProm.push(Prodpromo)
        
        localStorage.setItem("ListProdProm",JSON.stringify(ListProdProm));

        console.log(ListProdProm)
        
    });

    

    //Afficher les promo
    const PromoConteiner = document.getElementById('ListPromo');
    function AfficherLesProms(){
        let Htmlcontent1 = "";
        ListProdProm.forEach(Promo=>{

            Htmlcontent1+=` 
            <div class="promotion-card">
            <div class="promotion-details">
                    <div class="promotion-title">${Promo.Nom}: -${Promo.Percent}%</div>
                    <div>Du ${Promo.start} au ${Promo.end}</div>
                </div>
                <div class="action-buttons">
                    <button class="edit-btn"><i class="fas fa-edit"></i></button>
                    <button class="delete-btn"><i class="fas fa-trash"></i></button>
                </div>
               </div> `

        });
        return Htmlcontent1;
    }

    PromoConteiner.innerHTML = AfficherLesProms();

});
