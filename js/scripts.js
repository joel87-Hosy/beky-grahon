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

  document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeButton = document.getElementById("toggleTheme");
    const body = document.body;

    // Vérifiez si un thème est déjà enregistré dans localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        toggleThemeButton.textContent = "Mode Clair";
    }

    // Ajouter un événement pour basculer entre les thèmes
    toggleThemeButton.addEventListener("click", () => {
        body.classList.toggle("dark-theme");
        const isDarkTheme = body.classList.contains("dark-theme");

        // Mettre à jour le texte du bouton
        toggleThemeButton.textContent = isDarkTheme ? "Mode Clair" : "Mode Sombre";

        // Enregistrer le thème dans localStorage
        localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
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

    document.addEventListener('DOMContentLoaded', () => {
        const categoryPanel = document.getElementById('category-panel');
        const closeCategoryPanel = document.getElementById('close-category-panel');

        // Fermer le panneau lorsque le bouton de fermeture est cliqué
        closeCategoryPanel.addEventListener('click', () => {
            categoryPanel.style.display = 'none';
        });

        // Fermer le panneau lorsque l'utilisateur clique en dehors de celui-ci
        document.addEventListener('click', (event) => {
            if (!categoryPanel.contains(event.target) && !event.target.classList.contains('category-link')) {
                categoryPanel.style.display = 'none';
            }
        });

        // Afficher le panneau lorsque l'utilisateur clique sur une catégorie
        const categoryLinks = document.querySelectorAll('.category-link');
        categoryLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                categoryPanel.style.display = 'block';
            });
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const cart = []; // Tableau pour stocker les produits ajoutés au panier
        const cartItemsContainer = document.getElementById('cart-items'); // Conteneur pour afficher les produits dans le panier
        const checkoutButton = document.getElementById('checkout-button'); // Bouton pour passer la commande
    
        // Gestion des boutons "+" pour augmenter la quantité
        document.querySelectorAll('.btn-plus').forEach(button => {
            button.addEventListener('click', () => {
                const quantityElement = button.previousElementSibling;
                let quantity = parseInt(quantityElement.textContent, 10) || 0;
                quantityElement.textContent = quantity + 1; // Augmente la quantité
            });
        });
    
        // Gestion des boutons "-" pour diminuer la quantité
        document.querySelectorAll('.btn-minus').forEach(button => {
            button.addEventListener('click', () => {
                const quantityElement = button.nextElementSibling;
                let quantity = parseInt(quantityElement.textContent, 10) || 0;
                if (quantity > 1) {
                    quantityElement.textContent = quantity - 1; // Diminue la quantité
                }
            });
        });
    
        // Gestion des boutons "Ajouter au panier"
        document.querySelectorAll('.btn-add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.card'); // Trouve la carte du produit
                const title = card.querySelector('.card-title').textContent; // Nom du produit
                const price = card.querySelector('.card-text').textContent; // Prix du produit
                const quantityElement = card.querySelector('.quantity'); // Élément de quantité
                const quantity = parseInt(quantityElement.textContent, 10) || 1; // Quantité actuelle
    
                // Vérifie si le produit existe déjà dans le panier
                const existingItem = cart.find(item => item.title === title);
                if (existingItem) {
                    existingItem.quantity += quantity; // Ajoute la quantité
                } else {
                    cart.push({ title, price, quantity }); // Ajoute un nouveau produit au panier
                }
    
                alert(`${title} a été ajouté au panier avec une quantité de ${quantity}.`);
                updateCartDisplay(); // Met à jour l'affichage du panier
            });
        });
    
        // Fonction pour mettre à jour l'affichage du panier
        function updateCartDisplay() {
            cartItemsContainer.innerHTML = ''; // Vide le conteneur du panier
            cart.forEach(item => {
                const li = document.createElement('li');
                li.className = 'list-group-item d-flex justify-content-between align-items-center';
                li.textContent = `${item.title} - ${item.price} x ${item.quantity}`;
                cartItemsContainer.appendChild(li);
            });
        }
    
        // Gestion du bouton "Passer la commande"
        checkoutButton.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Votre panier est vide.');
                return;
            }
    
            // Simule l'envoi de la commande
            alert('Votre commande a été passée avec succès !');
            cart.length = 0; // Vide le panier
            updateCartDisplay(); // Met à jour l'affichage du panier
        });
    });

    

