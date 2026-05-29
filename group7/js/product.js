let currentProduct = null;
let currentSelectedSize = null;
let currentImageIndex = 0;
let productImages = [];

function initCarousel() {
  const mainImg = document.getElementById('carouselMainImg');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');
  
  if(!mainImg || !productImages.length) return;
  
  mainImg.src = productImages[currentImageIndex];
  
  // 生成圆点
  dotsContainer.innerHTML = productImages.map((_, i) => 
    `<span class="carousel-dot ${i === currentImageIndex ? 'active' : ''}" data-index="${i}"></span>`
  ).join('');
  
  // 更新圆点样式
  function updateDots() {
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentImageIndex);
    });
  }
  
  // 移除旧监听，重新绑定
  const newPrevBtn = document.getElementById('carouselPrev');
  const newNextBtn = document.getElementById('carouselNext');
  
  if(newPrevBtn) {
    newPrevBtn.onclick = () => {
      currentImageIndex = (currentImageIndex - 1 + productImages.length) % productImages.length;
      mainImg.src = productImages[currentImageIndex];
      updateDots();
    };
  }
  
  if(newNextBtn) {
    newNextBtn.onclick = () => {
      currentImageIndex = (currentImageIndex + 1) % productImages.length;
      mainImg.src = productImages[currentImageIndex];
      updateDots();
    };
  }
  
  // 点击圆点跳转
  document.querySelectorAll('.carousel-dot').forEach(dot => {
    dot.onclick = () => {
      currentImageIndex = parseInt(dot.dataset.index);
      mainImg.src = productImages[currentImageIndex];
      updateDots();
    };
  });
}

function loadProduct() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  if(!productId) { document.getElementById('productContainer').innerHTML = '<div style="text-align:center;padding:80px;">Product not found</div>'; return; }
  currentProduct = getProductById(productId);
  if(!currentProduct) { document.getElementById('productContainer').innerHTML = '<div style="text-align:center;padding:80px;">Product not found</div>'; return; }

  // 设置商品图片数组
  productImages = currentProduct.images || [currentProduct.image, currentProduct.image, currentProduct.image];

  let sizeOptions = [];
  if(currentProduct.sizeType === 'shoes') sizeOptions = ['35','36','37','38','39','40'];
  else if(currentProduct.sizeType === 'clothes') sizeOptions = ['S','M','L','XL'];
  else sizeOptions = ['One Size'];

  const isFav = favorites.includes(currentProduct.id);
  const html = `
    <div class="detail-container">
      <div class="detail-image">
        <div class="detail-carousel">
          <div class="carousel-main">
            <img id="carouselMainImg" class="carousel-main-img" src="${productImages[0]}" alt="${currentProduct.name}">
            <button class="carousel-btn-prev" id="carouselPrev">‹</button>
            <button class="carousel-btn-next" id="carouselNext">›</button>
          </div>
          <div class="carousel-dots" id="carouselDots"></div>
        </div>
      </div>
      <div class="detail-info">
        <h2>${currentProduct.name}</h2>
        <p class="detail-desc">${currentProduct.desc}</p>
        <p class="detail-material"><strong>Material:</strong> ${currentProduct.material}</p>
        <div class="detail-size"><strong>Select Size:</strong><div class="size-selector" id="sizeSelector">${sizeOptions.map(sz=>`<div class="size-option" data-size="${sz}">${sz}</div>`).join('')}</div></div>
        <div class="price-row detail-price"><span class="current-price">$${currentProduct.price.toFixed(2)}</span><span class="old-price">$${currentProduct.oldPrice.toFixed(2)}</span></div>
        <div class="detail-actions">
          <button id="detailAddCartBtn" class="btn-primary">Add to Bag</button>
          <button class="heart-btn detail-fav" data-id="${currentProduct.id}" style="font-size:1.5rem;">${isFav ? '❤️' : '♡'}</button>
          <button id="backToShopBtn" class="btn-primary btn-back">← Back to Shop</button>
        </div>
      </div>
    </div>
  `;
  document.getElementById('productContainer').innerHTML = html;

  // 重新获取元素并初始化轮播图
  setTimeout(() => initCarousel(), 10);

  // 尺码选择
  document.querySelectorAll('.size-option').forEach(opt=>{
    opt.addEventListener('click',()=>{
      document.querySelectorAll('.size-option').forEach(o=>o.classList.remove('selected'));
      opt.classList.add('selected');
      currentSelectedSize = opt.dataset.size;
    });
  });

  // 加入购物车
  document.getElementById('detailAddCartBtn').addEventListener('click',()=>{
    if(!currentSelectedSize) { showToast('Please select a size first'); return; }
    addToCartWithSize(currentProduct, currentSelectedSize, 1);
  });

  // 收藏
  document.querySelector('.detail-fav')?.addEventListener('click',()=>{ toggleFavorite(currentProduct.id); loadProduct(); });
  
  // 返回商店
  document.getElementById('backToShopBtn')?.addEventListener('click',()=>{ window.location.href = 'collection.html'; });
}

document.addEventListener('DOMContentLoaded', loadProduct);