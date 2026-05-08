document.addEventListener('DOMContentLoaded', () => {
    const cartItemsBody = document.getElementById('cart-items-body');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartDiscount = document.getElementById('cart-discount');
    const cartTotal = document.getElementById('cart-total');
    const promoCodeInput = document.getElementById('promo-code');
    const applyPromoBtn = document.getElementById('apply-promo-btn');
    const promoMessage = document.getElementById('promo-message');
    const proceedToCheckoutBtn = document.getElementById('proceed-to-checkout-btn');
    const cartContentDiv = document.getElementById('cart-content');
    const emptyCartDiv = document.getElementById('empty-cart-message');

    let currentDiscount = 0;
    const DISCOUNT_RATE = 0.10;
    const VALID_PROMO_CODE = 'SAVE10';

    const loadCart = () => getCart();
    const persistCart = cart => saveCart(cart);

    const renderCartItems = () => {
        const cart = loadCart();

        if (!cart.length) {
            if (cartContentDiv) cartContentDiv.style.display = 'none';
            if (emptyCartDiv) emptyCartDiv.style.display = 'block';
            updateOrderSummary(0);
            updateCartCount();
            return;
        }

        if (cartContentDiv) cartContentDiv.style.display = 'flex';
        if (emptyCartDiv) emptyCartDiv.style.display = 'none';
        cartItemsBody.innerHTML = '';

        let subtotal = 0;
        cart.forEach(item => {
            const itemSubtotal = Number(item.price || 0) * Number(item.quantity || 1);
            subtotal += itemSubtotal;

            const row = document.createElement('tr');
            row.className = 'cart-item-row';
            row.dataset.itemId = item.id;
            row.dataset.edition = item.edition || 'Paperback';
            row.innerHTML = `
                <td class="product-info">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="product-details">
                        <a href="${item.link || `productdetails.html?id=${encodeURIComponent(item.id)}`}">${item.name}</a>
                        <p>${item.author || 'Unknown Author'}</p>
                        <span>${item.edition || 'Paperback'}</span>
                    </div>
                </td>
                <td class="price">₹${Number(item.price || 0).toFixed(2)}</td>
                <td class="quantity">
                    <div class="quantity-controls">
                        <button class="qty-btn minus-btn" type="button">-</button>
                        <input type="number" value="${item.quantity}" min="1" class="qty-input" data-item-id="${item.id}" data-edition="${item.edition || 'Paperback'}">
                        <button class="qty-btn plus-btn" type="button">+</button>
                    </div>
                </td>
                <td class="item-subtotal">₹${itemSubtotal.toFixed(2)}</td>
                <td class="remove-item">
                    <button class="remove-btn" type="button" aria-label="Remove item" data-item-id="${item.id}" data-edition="${item.edition || 'Paperback'}">×</button>
                </td>
            `;
            cartItemsBody.appendChild(row);
        });

        updateOrderSummary(subtotal);
        updateCartCount();
    };

    const updateOrderSummary = subtotal => {
        const discountAmount = subtotal * currentDiscount;
        const total = subtotal - discountAmount;
        if (cartSubtotal) cartSubtotal.textContent = `₹${subtotal.toFixed(2)}`;
        if (cartDiscount) cartDiscount.textContent = `₹${discountAmount.toFixed(2)}`;
        if (cartTotal) cartTotal.textContent = `₹${total.toFixed(2)}`;
    };

    const updateQuantity = (itemId, edition, quantity) => {
        const cart = loadCart();
        const item = cart.find(product => product.id === itemId && (product.edition || 'Paperback') === edition);
        if (!item) return;
        item.quantity = Math.max(1, quantity);
        persistCart(cart);
        renderCartItems();
    };

    const removeItem = (itemId, edition) => {
        const cart = loadCart().filter(product => !(product.id === itemId && (product.edition || 'Paperback') === edition));
        persistCart(cart);
        renderCartItems();
    };

    cartItemsBody?.addEventListener('click', event => {
        const button = event.target.closest('button');
        if (!button) return;

        if (button.classList.contains('qty-btn')) {
            const input = button.closest('.quantity-controls').querySelector('.qty-input');
            const current = Number.parseInt(input.value, 10) || 1;
            const next = button.classList.contains('plus-btn') ? current + 1 : Math.max(1, current - 1);
            updateQuantity(input.dataset.itemId, input.dataset.edition, next);
        }

        if (button.classList.contains('remove-btn')) {
            removeItem(button.dataset.itemId, button.dataset.edition);
        }
    });

    cartItemsBody?.addEventListener('change', event => {
        if (!event.target.classList.contains('qty-input')) return;
        const quantity = Number.parseInt(event.target.value, 10) || 1;
        updateQuantity(event.target.dataset.itemId, event.target.dataset.edition, quantity);
    });

    applyPromoBtn?.addEventListener('click', () => {
        const code = promoCodeInput.value.trim().toUpperCase();
        if (!code) {
            promoMessage.textContent = 'Please enter a promo code.';
            promoMessage.className = 'promo-message error';
            currentDiscount = 0;
        } else if (code === VALID_PROMO_CODE) {
            promoMessage.textContent = `Success! ${VALID_PROMO_CODE} applied.`;
            promoMessage.className = 'promo-message success';
            currentDiscount = DISCOUNT_RATE;
        } else {
            promoMessage.textContent = 'Invalid promo code.';
            promoMessage.className = 'promo-message error';
            currentDiscount = 0;
        }
        const subtotal = loadCart().reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0);
        updateOrderSummary(subtotal);
    });

    proceedToCheckoutBtn?.addEventListener('click', () => {
        if (!loadCart().length) {
            alert('Your cart is empty. Please add items before checking out.');
            return;
        }
        alert('Proceeding to checkout!');
    });

    renderCartItems();
});


