if (window.location.pathname.endsWith('payment.html')) {
  const cartJSON = localStorage.getItem('cart');
  const paymentContainer = document.querySelector('.payment-container');
  const ButtonRetour = document.getElementById("Retour");
  const totalDisplay = document.getElementById("total");

  console.log("Cart data from localStorage:", cartJSON);

  if (ButtonRetour) {
      ButtonRetour.addEventListener('click', function() {
          window.location.href = "main.html";
      });
  }

  if (cartJSON && paymentContainer && totalDisplay) {
      const cartItems = JSON.parse(cartJSON);
      console.log("Parsed cart items:", cartItems);

      if (cartItems.length > 0) {
          const fragment = document.createDocumentFragment(); // Create a DOM fragment

          cartItems.forEach((item, index) => {
              console.log("Processing item:", item.name);
              const itemDiv = document.createElement('div');
              itemDiv.classList.add('payment-item');

              const image = document.createElement('img');
              image.src = item.imageSrc;
              image.alt = item.imageAlt;
              itemDiv.appendChild(image);

              const nameParagraph = document.createElement('p');
              nameParagraph.textContent = item.name;
              itemDiv.appendChild(nameParagraph);

              const quantityParagraph = document.createElement('p');
              quantityParagraph.textContent = `quantity : X ${item.quantity}`;
              if (item.quantity > 1) {
                  itemDiv.appendChild(quantityParagraph);
              }

              const priceParagraph = document.createElement('h1');
              priceParagraph.textContent = item.price;
              itemDiv.appendChild(priceParagraph);

              const deleteButton = document.createElement('button');
              deleteButton.textContent = 'Delete item';
              deleteButton.classList.add('DeletButton');
              itemDiv.appendChild(deleteButton);

              fragment.appendChild(itemDiv); // Append to the fragment
              deleteButton.addEventListener('click', function() {
                  itemDiv.remove();
                  cartItems.splice(index, 1);
                  localStorage.setItem('cart', JSON.stringify(cartItems));
                  updateTotal(totalDisplay); // Call updateTotal after deletion
                  console.log("Cart after deletion:", JSON.stringify(cartItems));
                  if (cartItems.length === 0) {
                      const emptyMessage = document.createElement('p');
                      emptyMessage.textContent = 'Votre panier est vide.';
                      paymentContainer.appendChild(emptyMessage);
                  }
              });
          });
          paymentContainer.appendChild(fragment); 
          updateTotal(totalDisplay); 

      } else {
          paymentContainer.innerHTML = '<p>Votre panier est vide.</p>';
          updateTotal(totalDisplay); 
      }
  } else if (paymentContainer && totalDisplay) {
      paymentContainer.innerHTML = '<p>Votre panier est vide.</p>';
      updateTotal(totalDisplay); 
  }
}

function updateTotal(totalElement) {
  const cartJSON = localStorage.getItem('cart');
  console.log("Updating total with cart data:", cartJSON);

  if (cartJSON) {
      const cartItems = JSON.parse(cartJSON);
      if (cartItems && cartItems.length > 0) {
          const priceTotal = cartItems.reduce((acc, cartItem) => {
              // Ensure cartItem.price is treated as a string
              const priceString = cartItem.price ? cartItem.price.toString() : '0';
              const price = parseFloat(priceString.replace('$', ''));
              return acc + price;
          }, 0);
          totalElement.textContent = `Your Total is $${priceTotal.toFixed(2)}`;
      } else {
          totalElement.textContent = `Your Total is $0.00`;
      }
  } else {
      totalElement.textContent = `Your Total is $0.00`;
  }
  console.log("Total displayed:", totalElement.textContent);
}