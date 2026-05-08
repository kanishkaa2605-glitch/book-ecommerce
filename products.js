document.addEventListener('DOMContentLoaded', () => {
    const cards = [...document.querySelectorAll('.product-card')];
    const grid = document.querySelector('.product-grid');

    sessionStorage.setItem('bookHavenLastProducts', JSON.stringify(cards.map(readProductFromCard)));

    document.querySelectorAll('.quick-view-btn').forEach(button => {
        button.textContent = 'View Details';
        button.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();
            const card = button.closest('.product-card');
            if (!card) return;

            const product = readProductFromCard(card);
            rememberSelectedProduct(product);
            window.location.href = product.link;
        });
    });

    const applyFilters = () => {
        const min = Number.parseFloat(document.getElementById('price-min')?.value) || 0;
        const max = Number.parseFloat(document.getElementById('price-max')?.value) || Infinity;
        cards.forEach(card => {
            const price = parsePrice(card.querySelector('.price')?.textContent);
            card.style.display = price >= min && price <= max ? '' : 'none';
        });
    };

    document.querySelectorAll('.apply-filter-btn').forEach(button => button.addEventListener('click', applyFilters));

    document.querySelector('.clear-filters-btn')?.addEventListener('click', () => {
        document.querySelectorAll('.filters-sidebar input[type="checkbox"]').forEach(input => { input.checked = false; });
        const min = document.getElementById('price-min');
        const max = document.getElementById('price-max');
        if (min) min.value = '';
        if (max) max.value = '';
        cards.forEach(card => { card.style.display = ''; });
    });

    document.getElementById('sort-by')?.addEventListener('change', event => {
        const sorted = [...cards].sort((a, b) => {
            const aProduct = readProductFromCard(a);
            const bProduct = readProductFromCard(b);
            if (event.target.value === 'price-asc') return aProduct.price - bProduct.price;
            if (event.target.value === 'price-desc') return bProduct.price - aProduct.price;
            if (event.target.value === 'alphabetical-desc') return bProduct.name.localeCompare(aProduct.name);
            return aProduct.name.localeCompare(bProduct.name);
        });
        sorted.forEach(card => grid.appendChild(card));
    });
});


