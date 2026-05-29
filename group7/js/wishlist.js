function renderWishlist() {
  const container = document.getElementById('wishlistGrid');
  const favProducts = PRODUCTS.filter(p => favorites.includes(p.id));
  if(favProducts.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:80px;color:var(--text-soft);">No saved items yet. <a href="collection.html">Start shopping</a></div>';
    return;
  }
  container.innerHTML = favProducts.map(p => {
    const isFav = favorites.includes(p.id);
    return `<div class="product-card"><img class="product-img" src="${p.image}" alt="${p.name}"><div class="product-info"><div class="product-title-row"><span class="product-title">${p.name}${p.isNew ? '<span class="new-badge">NEW</span>' : ''}</span><button class="heart-btn fav-btn" data-id="${p.id}">${isFav ? '❤️' : '♡'}</button></div><div class="price-row"><span class="current-price">$${p.price.toFixed(2)}</span><span class="old-price">$${p.oldPrice.toFixed(2)}</span></div><button class="btn-sm view-detail-btn" data-id="${p.id}">View Details</button><button class="btn-primary add-cart-quick" data-id="${p.id}">Add to Bag</button></div></div>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderWishlist();

  document.body.addEventListener('click', (e) => {
    const target = e.target;
    if(target.classList.contains('view-detail-btn')) {
      window.location.href = `product.html?id=${target.dataset.id}`;
    } else if(target.classList.contains('add-cart-quick')) {
      window.location.href = `product.html?id=${target.dataset.id}`;
    } else if(target.classList.contains('fav-btn')) {
      const id = parseInt(target.dataset.id);
      toggleFavorite(id);
      renderWishlist();
    }
  });
});

window.renderWishlist = renderWishlist;