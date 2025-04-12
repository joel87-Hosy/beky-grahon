/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-plus').forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent, 10);
            quantityElement.textContent = quantity + 1;
        });
    });

    document.querySelectorAll('.btn-minus').forEach(button => {
        button.addEventListener('click', () => {
            const quantityElement = button.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent, 10);
            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
            }
        });
    });

    document.querySelectorAll('.btn-like').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });
});

const cart = [];
         
             document.addEventListener('DOMContentLoaded', () => {
                 document.querySelectorAll('.btn-add-to-cart').forEach(button => {
                     button.addEventListener('click', () => {
                         const card = button.closest('.card');
                         const title = card.querySelector('.card-title').textContent;
                         const price = card.querySelector('.card-text').textContent;
                         const quantity = card.querySelector('.quantity').textContent;
         
                         const existingItem = cart.find(item => item.title === title);
                         if (existingItem) {
                             existingItem.quantity = parseInt(existingItem.quantity) + parseInt(quantity);
                         } else {
                             cart.push({ title, price, quantity });
                         }
         
                         alert(`${title} a été ajouté au panier.`);
                     });
                 });
         
                 document.getElementById('cart-link').addEventListener('click', () => {
                     const cartItemsContainer = document.getElementById('cart-items');
                     cartItemsContainer.innerHTML = '';
                     cart.forEach(item => {
                         const li = document.createElement('li');
                         li.className = 'list-group-item d-flex justify-content-between align-items-center';
                         li.textContent = `${item.title} - ${item.price} x ${item.quantity}`;
                         cartItemsContainer.appendChild(li);
                     });
                 });
         
                 document.getElementById('checkout-button').addEventListener('click', () => {
                     fetch('/checkout', {
                         method: 'POST',
                         headers: { 'Content-Type': 'application/json' },
                         body: JSON.stringify(cart),
                     })
                     .then(response => response.json())
                     .then(data => {
                         alert('Commande envoyée avec succès!');
                         cart.length = 0; // Clear the cart
                         document.getElementById('cart-items').innerHTML = '';
                     })
                     .catch(error => {
                         console.error('Erreur:', error);
                         alert('Une erreur est survenue lors de l\'envoi de la commande.');
                     });
                 });
             });
             
             document.addEventListener("DOMContentLoaded", () => {
                const categoryPanel = document.getElementById("category-panel");
                const closeCategoryPanelButton = document.getElementById("close-category-panel");
                const categoryLinks = document.querySelectorAll(".category-link");
                const categoryPanelContent = document.getElementById("category-panel-content");
            
                // Liste des produits par catégorie
                const productsByCategory = {
                    pommades: [
                        { name: "Pommade A", price: "10€", image: "assets/img/portfolio/1.jpg" },
                        { name: "Pommade B", price: "12€", image: "assets/img/pommade-b.jpg" },
                        { name: "Pommade C", price: "15€", image: "assets/img/pommade-c.jpg" },
                        { name: "Pommade D", price: "8€", image: "assets/img/pommade-d.jpg" },
                        { name: "Pommade E", price: "20€", image: "assets/img/pommade-e.jpg" },
                    ],
                    "gel-douche": [
                        { name: "Gel Douche A", price: "5€", image: "assets/img/gel-douche-a.jpg" },
                        { name: "Gel Douche B", price: "7€", image: "assets/img/gel-douche-b.jpg" },
                        { name: "Gel Douche C", price: "6€", image: "assets/img/gel-douche-c.jpg" },
                        { name: "Gel Douche D", price: "9€", image: "assets/img/gel-douche-d.jpg" },
                        { name: "Gel Douche E", price: "11€", image: "assets/img/gel-douche-e.jpg" },
                    ],
                    lotion: [
                        { name: "Lotion A", price: "15€", image: "assets/img/lotion-a.jpg" },
                        { name: "Lotion B", price: "18€", image: "assets/img/lotion-b.jpg" },
                        { name: "Lotion C", price: "20€", image: "assets/img/lotion-c.jpg" },
                        { name: "Lotion D", price: "22€", image: "assets/img/lotion-d.jpg" },
                        { name: "Lotion E", price: "25€", image: "assets/img/lotion-e.jpg" },
                    ],
                    savon: [
                        { name: "Savon A", price: "3€", image: "assets/img/savon-a.jpg" },
                        { name: "Savon B", price: "4€", image: "assets/img/savon-b.jpg" },
                        { name: "Savon C", price: "5€", image: "assets/img/savon-c.jpg" },
                        { name: "Savon D", price: "6€", image: "assets/img/savon-d.jpg" },
                        { name: "Savon E", price: "7€", image: "assets/img/savon-e.jpg" },
                    ],
                    creme: [
                        { name: "Crème A", price: "12€", image: "assets/img/creme-a.jpg" },
                        { name: "Crème B", price: "14€", image: "assets/img/creme-b.jpg" },
                        { name: "Crème C", price: "16€", image: "assets/img/creme-c.jpg" },
                        { name: "Crème D", price: "18€", image: "assets/img/creme-d.jpg" },
                        { name: "Crème E", price: "20€", image: "assets/img/creme-e.jpg" },
                    ],
                };
            
                // Ouvrir le panneau avec les produits liés à la catégorie
                categoryLinks.forEach(link => {
                    link.addEventListener("click", (e) => {
                        e.preventDefault();
                        const category = e.target.dataset.category;
                        const products = productsByCategory[category] || [];
                        const productList = products.map(product => `
                            <div class="product-item">
                                <img src="${product.image}" alt="${product.name}" class="product-image" />
                                <h3>${product.name}</h3>
                                <p>Prix: ${product.price}</p>
                            </div>
                        `).join("");
            
                        categoryPanelContent.innerHTML = `
                            <h2>Produits pour ${category}</h2>
                            <div class="product-grid">
                                ${productList}
                            </div>
                        `;
                        categoryPanel.classList.add("open");
            
                        // Ajouter les événements pour les boutons "+" et "-"
                        document.querySelectorAll(".btn-plus").forEach(button => {
                            button.addEventListener("click", () => {
                                const quantityElement = button.previousElementSibling;
                                let quantity = parseInt(quantityElement.textContent, 10);
                                quantityElement.textContent = quantity + 1;
                            });
                        });
            
                        document.querySelectorAll(".btn-minus").forEach(button => {
                            button.addEventListener("click", () => {
                                const quantityElement = button.nextElementSibling;
                                let quantity = parseInt(quantityElement.textContent, 10);
                                if (quantity > 1) {
                                    quantityElement.textContent = quantity - 1;
                                }
                            });
                        });
            
                        // Ajouter les événements pour le bouton "J'aime"
                        document.querySelectorAll(".btn-like").forEach(button => {
                            button.addEventListener("click", () => {
                                button.classList.toggle("liked");
                            });
                        });
                    });
                });
            
                // Fermer le panneau
                closeCategoryPanelButton.addEventListener("click", () => {
                    categoryPanel.classList.remove("open");
                });
            });
