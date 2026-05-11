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

const BOOK_SEARCH_INDEX = [
    ['The Silent Patient', 'Alex Michaelides', 499, 'silentpatient.jpeg'],
    ['Atomic Habits', 'James Clear', 349, 'atomichabits.jpeg'],
    ['The Midnight Library', 'Matt Haig', 449, 'midnightlibraries.jpeg'],
    ['Dune', 'Frank Herbert', 599, 'dune.jpg'],
    ['Project Hail Mary', 'Andy Weir', 549, 'projecthailmary.jpg'],
    ['Where the Crawdads Sing', 'Delia Owens', 479, 'wherethecrowdadssing.jpg'],
    ['Verity', 'Colleen Hoover', 499, 'Verity.jpg'],
    ['Ikigai', 'Hector Garcia and Francesc Miralles', 699, 'ikigai.jpeg'],
    ['The Diary of a Young Girl', 'Anne Frank', 799, 'diaryofayounggirl.jpg'],
    ['Truly Devious', 'Maureen Johnson', 649, 'trulydevious.jpg'],
    ['Deathly Fates', 'Tesia Tsai', 699, 'deathlyfates.jpg'],
    ['Pride and Prejudice', 'Jane Austen', 1890, 'prideandprejudice.jpg'],
    ['The Spanish Love Deception', 'Elena Armes', 699, 'spanishlovedeciption.jpg'],
    ['The Seven Husbands of Evelyn Hugo', 'Taylor Jenkins Reid', 690, 'thesevenhusbandsofevelynhugo.jpg'],
    ['Gone Girl', 'Gillian Flynn', 899, 'gonegirl.jpg'],
    ['The Way of Kings', 'Brandon Sanderson', 799, 'wayofkings.jpg'],
    ['Vampire Diaries', 'L.J. Smith', 1649, 'vampirediaries.jpeg'],
    ['The Name of the Wind', 'Patrick Rothfuss', 699, 'nameofthewind.jpg'],
    ['A Game of Thrones', 'George R.R. Martin', 549, 'gameofthrones.jpg'],
    ['The Priory of the Orange Tree', 'Samantha Shannon', 849, 'priorityoforangetree.jpg'],
    ['Circe', 'Madeline Miller', 599, 'circle.jpg'],
    ['Wings of Fire', 'Dr. A.P.J. Abdul Kalam', 499, 'wingsoffire.jpg'],
    ['Who Will Cry When You Die', 'Robin Sharma', 549, 'whowillcrywhenyoudie.jpg'],
    ['Lionel Messi and the Art of Living', 'Andy West', 699, 'lionelmessiandtheartofliving.jpg'],
    ['Stop Letting Everything Affect You', 'Daniel Chidiac', 599, 'stoplettingeverythingaffectyou.jpg'],
    ['The Girl in the House', 'Harshawardhan Rao', 599, 'thegirlinthehouse.jpg'],
    ['That Night, Four Friends, Twenty Years', 'Nidhi Upadhyay', 499, 'thatnightfourfriendstwentyyears.jpg'],
    ['The Turn of the Screw', 'Henry James', 399, 'theturnofthescrew.jpg'],
    ['The Crime at Black Dudley', 'Margery Allingham', 499, 'thecrimeatblackdudley.jpg'],
    ['The Patient in Room 18', 'Mignon G. Eberhart', 449, 'patientinroom18.jpg'],
    ['Steve Jobs', 'Walter Isaacson', 799, 'stevejobs.jpg'],
    ['Queen Elisabeth II', 'Hugo Vickers', 699, 'queenelizabethII.jpg'],
    ['Korean Messiah', 'Jonathan Cheng', 899, 'koreanmessiah.jpg'],
    ['The Madness Pill', 'Justin Garson', 799, 'madnesspill.jpg'],
    ['True Color', 'Kory Stamper', 699, 'truecolor.jpg'],
    ['The Escape Room', 'Marissa Meyer', 599, 'escaperoom.jpg'],
    ['Flirting with Murder', 'Amanda Sellet', 499, 'flirtingwithmurder.jpg'],
    ['Summer Official', 'Rebekah Weatherspoon', 449, 'summerofficial.jpg'],
    ['They Want Us Dead', 'CL Montblac', 549, 'theywantusdead.jpg'],
    ['This Could All Go Bad', 'Spencer Hall', 499, 'thiscouldallgobad.jpg']
].map(([name, author, price, image]) => {
    const id = slugify(`${name}-${author}`);
    return { id, name, author, price, image, edition: 'Paperback', link: `productdetails.html?id=${encodeURIComponent(id)}` };
});

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

    const wrapper = search.parentElement;
    const suggestions = document.createElement('div');
    suggestions.className = 'search-suggestions';
    suggestions.setAttribute('role', 'listbox');
    suggestions.hidden = true;
    wrapper?.appendChild(suggestions);

    const getSearchMatches = query => {
        const normalizedQuery = query.trim().toLowerCase();
        if (!normalizedQuery) return [];

        const currentProducts = [...document.querySelectorAll('.product-card')].map(readProductFromCard);
        const merged = [...BOOK_SEARCH_INDEX, ...currentProducts].reduce((items, product) => {
            if (!items.some(item => item.id === product.id)) items.push(product);
            return items;
        }, []);

        return merged
            .filter(product => `${product.name} ${product.author}`.toLowerCase().includes(normalizedQuery))
            .slice(0, 6);
    };

    const openProduct = product => {
        if (!product) return;
        rememberSelectedProduct(product);
        window.location.href = product.link;
    };

    const renderSuggestions = matches => {
        suggestions.replaceChildren();
        suggestions.hidden = matches.length === 0;

        matches.forEach(product => {
            const option = document.createElement('button');
            option.type = 'button';
            option.className = 'search-suggestion';
            option.setAttribute('role', 'option');

            const image = document.createElement('img');
            image.src = product.image || 'cart-bag.svg';
            image.alt = '';

            const text = document.createElement('span');
            text.className = 'search-suggestion-text';

            const title = document.createElement('strong');
            title.textContent = product.name;

            const author = document.createElement('small');
            author.textContent = `by ${product.author}`;

            text.append(title, author);
            option.append(image, text);
            option.addEventListener('click', () => openProduct(product));
            suggestions.appendChild(option);
        });
    };

    search.addEventListener('input', () => {
        const query = search.value.trim().toLowerCase();
        document.querySelectorAll('.product-card').forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? '' : 'none';
        });
        renderSuggestions(getSearchMatches(search.value));
    });

    search.addEventListener('keydown', event => {
        if (event.key !== 'Enter') return;

        const [firstMatch] = getSearchMatches(search.value);
        if (firstMatch) {
            event.preventDefault();
            openProduct(firstMatch);
        }
    });

    document.addEventListener('click', event => {
        if (!wrapper?.contains(event.target)) suggestions.hidden = true;
    });

    search.addEventListener('focus', () => {
        renderSuggestions(getSearchMatches(search.value));
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





