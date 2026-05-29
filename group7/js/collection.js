let currentCategory = sessionStorage.getItem('collectionCategory') || 'All';
let currentSort = 'default';

function renderCollection() {
  let filtered = PRODUCTS.filter(p => currentCategory === 'All' ? true : p.category === currentCategory);
  if(currentSort === 'price-asc') filtered.sort((a,b)=>a.price-b.price);
  else if(currentSort === 'price-desc') filtered.sort((a,b)=>b.price-a.price);
  else if(currentSort === 'new') filtered.sort((a,b)=>(b.isNew?1:0)-(a.isNew?1:0));

  const grid = document.getElementById('collectionGrid');
  grid.innerHTML = filtered.map(p => {
    const isFav = favorites.includes(p.id);
    return `<div class="product-card"><img class="product-img" src="${p.image}" alt="${p.name}"><div class="product-info"><div class="product-title-row"><span class="product-title">${p.name}${p.isNew ? '<span class="new-badge">NEW</span>' : ''}</span><button class="heart-btn fav-btn" data-id="${p.id}">${isFav ? '❤️' : '♡'}</button></div><div class="price-row"><span class="current-price">$${p.price.toFixed(2)}</span><span class="old-price">$${p.oldPrice.toFixed(2)}</span></div><button class="btn-sm view-detail-btn" data-id="${p.id}">View Details</button><button class="btn-primary add-cart-quick" data-id="${p.id}">Add to Bag</button></div></div>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded',()=>{
  renderCollection();
  sessionStorage.removeItem('collectionCategory');

  document.querySelectorAll('.cat-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active-cat'));
      btn.classList.add('active-cat');
      currentCategory=btn.dataset.cat;
      renderCollection();
    });
  });

  document.getElementById('sortSelect').addEventListener('change',(e)=>{
    currentSort=e.target.value;
    renderCollection();
  });

  document.body.addEventListener('click',(e)=>{
    const t=e.target;
    if(t.classList.contains('view-detail-btn')) window.location.href=`product.html?id=${t.dataset.id}`;
    else if(t.classList.contains('add-cart-quick')) window.location.href=`product.html?id=${t.dataset.id}`;
    else if(t.classList.contains('fav-btn')){ const id=parseInt(t.dataset.id); toggleFavorite(id); renderCollection(); }
  });
});