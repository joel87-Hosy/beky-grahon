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
