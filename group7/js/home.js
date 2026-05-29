document.addEventListener('DOMContentLoaded', () => {
  const homeGrid = document.getElementById('homeGrid');
  if(homeGrid) {
    const bestProducts = PRODUCTS.slice(0,4);
    homeGrid.innerHTML = bestProducts.map(p => {
      const isFav = favorites.includes(p.id);
      return `<div class="product-card"><img class="product-img" src="${p.image}" alt="${p.name}"><div class="product-info"><div class="product-title-row"><span class="product-title">${p.name}${p.isNew ? '<span class="new-badge">NEW</span>' : ''}</span><button class="heart-btn fav-btn" data-id="${p.id}">${isFav ? '❤️' : '♡'}</button></div><div class="price-row"><span class="current-price">$${p.price.toFixed(2)}</span><span class="old-price">$${p.oldPrice.toFixed(2)}</span></div><button class="btn-sm view-detail-btn" data-id="${p.id}">View Details</button><button class="btn-primary add-cart-quick" data-id="${p.id}">Add to Bag</button></div></div>`;
    }).join('');
  }

  const slides = document.getElementById('carouselSlides');
  if(slides) {
    const total = slides.children.length;
    let currentIndex = 0;
    const dotsContainer = document.getElementById('carouselDots');
    dotsContainer.innerHTML = Array.from({length:total},(_,i)=>`<span class="dot ${i===0?'active':''}"></span>`).join('');
    const dots = document.querySelectorAll('.dot');
    const updateCarousel = () => {
      slides.style.transform = `translateX(-${currentIndex*100}%)`;
      dots.forEach((dot,i)=>dot.classList.toggle('active',i===currentIndex));
    };
    document.getElementById('carouselPrev').onclick = () => { currentIndex = (currentIndex-1+total)%total; updateCarousel(); };
    document.getElementById('carouselNext').onclick = () => { currentIndex = (currentIndex+1)%total; updateCarousel(); };
    dots.forEach((dot,i)=>dot.onclick = () => { currentIndex = i; updateCarousel(); });
    setInterval(() => { currentIndex = (currentIndex+1)%total; updateCarousel(); }, 5000);
  }

  const flashTimer = document.getElementById('flashTimer');
  if(flashTimer) {
    const updateTimer = () => {
      const now = new Date(), target = new Date(); target.setHours(23,59,59,0);
      const diff = Math.floor((target-now)/1000);
      if(diff<=0) flashTimer.innerText='00:00:00';
      else { const h=Math.floor(diff/3600), m=Math.floor((diff%3600)/60), s=diff%60; flashTimer.innerText=`${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`; }
    };
    updateTimer(); setInterval(updateTimer,1000);
  }

  document.getElementById('videoAd')?.addEventListener('click',()=>showToast('Watch the full video on our YouTube channel'));
  document.getElementById('flashShopBtn')?.addEventListener('click',()=>{ sessionStorage.setItem('collectionCategory','Tops'); window.location.href='collection.html'; });

  document.body.addEventListener('click',(e)=>{
    const t=e.target;
    if(t.classList.contains('view-detail-btn')) window.location.href=`product.html?id=${t.dataset.id}`;
    else if(t.classList.contains('add-cart-quick')) window.location.href=`product.html?id=${t.dataset.id}`;
    else if(t.classList.contains('fav-btn')){ const id=parseInt(t.dataset.id); toggleFavorite(id); const card=t.closest('.product-card'); if(card){ const btn=card.querySelector('.fav-btn'); btn.innerHTML=favorites.includes(id)?'❤️':'♡'; } }
  });
});