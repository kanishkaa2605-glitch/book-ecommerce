const BOOK_HAVEN_CART_KEY = 'bookHavenCart';

function getCart() {
    try {
        return JSON.parse(localStorage.getItem(BOOK_HAVEN_CART_KEY)) || [];
    } catch (error) {
        return [];
    }
}

function saveCart(cart) {
    localStorage.setItem(BOOK_HAVEN_CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function parsePrice(priceText) {
    const value = String(priceText || '').replace(/[^0-9.]/g, '');
    return Number.parseFloat(value) || 0;
}

function slugify(text) {
    return String(text || '')
        .toLowerCase()
        .trim()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

function readProductFromCard(card) {
    if (!card) {
        return {
            id: 'untitled-book',
            name: 'Untitled Book',
            author: 'Unknown Author',
            price: 0,
            image: '',
            edition: 'Paperback',
            link: 'productdetails.html'
        };
    }

    const image = card.querySelector('img');
    const title = card.querySelector('h3')?.textContent.trim() || 'Untitled Book';
    const author = card.querySelector('p')?.textContent.trim() || 'Unknown Author';
    const priceText = card.querySelector('.price')?.textContent.trim() || '₹0';
    const id = card.dataset.productId || slugify(`${title}-${author}`);

    return {
        id,
        name: title,
        author,
        price: parsePrice(priceText),
        image: image?.getAttribute('src') || '',
        edition: card.dataset.edition || 'Paperback',
        link: `productdetails.html?id=${encodeURIComponent(id)}`
    };
}

function rememberSelectedProduct(product) {
    if (!product) return;
    sessionStorage.setItem('bookHavenSelectedProduct', JSON.stringify(product));
}

function addToCart(product, quantity = 1) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id && item.edition === product.edition);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    saveCart(cart);
    showCartToast(`${product.name} added to cart`);
}

function updateCartCount() {
    const totalItems = getCart().reduce((sum, item) => sum + Number(item.quantity || 0), 0);
    document.querySelectorAll('.cart-count').forEach(count => {
        count.textContent = totalItems;
    });
}

function showCartToast(message) {
    let toast = document.querySelector('.cart-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'cart-toast';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(showCartToast.timer);
    showCartToast.timer = window.setTimeout(() => toast.classList.remove('show'), 1800);
}

function wireProductCards() {
    document.querySelectorAll('.product-card').forEach(card => {
        const product = readProductFromCard(card);
        card.dataset.productId = product.id;
        card.tabIndex = 0;
        card.setAttribute('role', 'link');
        card.setAttribute('aria-label', `View details for ${product.name}`);

        const openProductDetails = () => {
            const currentProduct = readProductFromCard(card);
            rememberSelectedProduct(currentProduct);
            window.location.href = currentProduct.link;
        };

        const image = card.querySelector('img');
        const title = card.querySelector('h3');
        [image, title].forEach(element => {
            if (!element || element.closest('a')) return;
            element.style.cursor = 'pointer';
            element.addEventListener('click', openProductDetails);
        });

        card.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                openProductDetails();
            }
        });
    });
}

function wireCartButtons() {
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        if (button.dataset.cartWired === 'true') return;
        button.dataset.cartWired = 'true';

        button.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();

            const card = button.closest('.product-card, .related-product-card');
            const detailName = document.querySelector('.product-name');

            if (card) {
                addToCart(readProductFromCard(card));
                return;
            }

            if (detailName) {
                const quantity = Math.max(1, Number.parseInt(document.getElementById('quantity')?.value || '1', 10));
                const edition = document.getElementById('product-edition')?.value || 'Paperback';
                addToCart({
                    id: new URLSearchParams(window.location.search).get('id') || slugify(detailName.textContent),
                    name: detailName.textContent.trim(),
                    author: document.querySelector('.product-author')?.textContent.replace(/^by\s+/i, '').trim() || 'Unknown Author',
                    price: parsePrice(document.querySelector('.product-price')?.textContent),
                    image: document.getElementById('main-product-image')?.getAttribute('src') || '',
                    edition,
                    link: window.location.pathname.split('/').pop() + window.location.search
                }, quantity);
            }
        });
    });
}

function wireSearch() {
    const search = document.querySelector('.search-bar');
    if (!search) return;

    search.addEventListener('input', () => {
        const query = search.value.trim().toLowerCase();
        document.querySelectorAll('.product-card').forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? '' : 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    const currentProducts = [...document.querySelectorAll('.product-card')].map(readProductFromCard);
    if (currentProducts.length) {
        sessionStorage.setItem('bookHavenLastProducts', JSON.stringify(currentProducts));
    }
    wireProductCards();
    wireCartButtons();
    wireSearch();
});





