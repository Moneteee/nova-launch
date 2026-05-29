const PRODUCTS = [
  { id: 1, name: "Peachy Puff Top", price: 49.90, oldPrice: 89.90, image: "assets/images/1.jpg", images: ["assets/images/1.jpg", "assets/images/aa.jpg", "assets/images/1-3.jpg"], desc: "Sweet puff sleeve design", material: "Cotton linen blend, breathable", category: "Tops", sizeType: "clothes", isNew: true },
  { id: 2, name: "Bow Tie Blouse", price: 69.90, oldPrice: 119.90, image: "assets/images/2.jpg", images: ["assets/images/2.jpg", "assets/images/bb.jpg", "assets/images/2-3.jpg"], desc: "Bow tie detail, French elegance", material: "Tencel fabric, soft and smooth", category: "Tops", sizeType: "clothes", isNew: false },
  { id: 3, name: "Vintage Square Neck Knit", price: 79.90, oldPrice: 139.90, image: "assets/images/3.jpg", images: ["assets/images/3.jpg", "assets/images/cc.jpg", "assets/images/3-3.jpg"], desc: "Square neck, wool blend", material: "Wool blend, warm and cozy", category: "Tops", sizeType: "clothes", isNew: true },
  { id: 4, name: "Graphic Print Tee", price: 45.90, oldPrice: 79.90, image: "assets/images/4.jpg", images: ["assets/images/4.jpg", "assets/images/dd.jpg", "assets/images/4-3.jpg"], desc: "Street style graphic print", material: "100% cotton, soft touch", category: "Tops", sizeType: "clothes", isNew: false },
  { id: 5, name: "Heart Embroidery Hoodie", price: 79.90, oldPrice: 129.90, image: "assets/images/5.jpg", images: ["assets/images/5.jpg", "assets/images/ee.jpg", "assets/images/5-3.jpg"], desc: "Oversized fit, heart embroidery", material: "97% cotton, soft and thick", category: "Hoodies", sizeType: "clothes", isNew: false },
  { id: 6, name: "Drop Shoulder Hoodie", price: 89.90, oldPrice: 149.90, image: "assets/images/6.jpg", images: ["assets/images/6.jpg", "assets/images/ff.jpg", "assets/images/6-3.jpg"], desc: "Relaxed drop shoulder", material: "Cotton blend, anti-pilling", category: "Hoodies", sizeType: "clothes", isNew: true },
  { id: 7, name: "Letter Print Hoodie", price: 99.90, oldPrice: 169.90, image: "assets/images/7.jpg", images: ["assets/images/7.jpg", "assets/images/gg.jpg", "assets/images/7-3.jpg"], desc: "3D letter print", material: "French terry, soft inside", category: "Hoodies", sizeType: "clothes", isNew: false },
  { id: 8, name: "Half Zip Hoodie", price: 85.90, oldPrice: 139.90, image: "assets/images/8.jpg", images: ["assets/images/8.jpg", "assets/images/hh.jpg", "assets/images/8-3.jpg"], desc: "Half zip design", material: "Air layer fabric, structured", category: "Hoodies", sizeType: "clothes", isNew: true },
  { id: 9, name: "Tiered Cake Skirt", price: 59.90, oldPrice: 99.90, image: "assets/images/9.jpg", images: ["assets/images/9.jpg", "assets/images/ii.jpg", "assets/images/9-3.jpg"], desc: "Tiered ruffle hem", material: "Polyester, lightweight", category: "Skirts", sizeType: "clothes", isNew: false },
  { id: 10, name: "Plaid Pleated Skirt", price: 54.90, oldPrice: 89.90, image: "assets/images/10.jpg", images: ["assets/images/10.jpg", "assets/images/jj.jpg", "assets/images/10-3.jpg"], desc: "High waist preppy style", material: "TR fabric, wrinkle resistant", category: "Skirts", sizeType: "clothes", isNew: true },
  { id: 11, name: "Satin Slip Dress", price: 99.90, oldPrice: 159.90, image: "assets/images/11.jpg", images: ["assets/images/11.jpg", "assets/images/kk.jpg", "assets/images/11-3.jpg"], desc: "Silky smooth", material: "Faux silk, glossy finish", category: "Dresses", sizeType: "clothes", isNew: false },
  { id: 12, name: "Denim Patchwork Skirt", price: 79.90, oldPrice: 129.90, image: "assets/images/12.jpg", images: ["assets/images/12.jpg", "assets/images/ll.jpg", "assets/images/12-3.jpg"], desc: "Asymmetric design", material: "Denim cotton, durable", category: "Skirts", sizeType: "clothes", isNew: true },
  { id: 13, name: "Lace Slip Dress", price: 119.90, oldPrice: 189.90, image: "assets/images/13.jpg", images: ["assets/images/13.jpg", "assets/images/mm.jpg", "assets/images/13-3.jpg"], desc: "Romantic lace, layering piece", material: "Nylon lace, delicate", category: "Dresses", sizeType: "clothes", isNew: false },
  { id: 14, name: "Puff Sleeve Square Neck Dress", price: 139.90, oldPrice: 199.90, image: "assets/images/14.jpg", images: ["assets/images/14.jpg", "assets/images/nn.jpg", "assets/images/14-3.jpg"], desc: "French vintage sweet", material: "Cotton linen, breathable", category: "Dresses", sizeType: "clothes", isNew: true },
  { id: 15, name: "Knit Waist Dress", price: 129.90, oldPrice: 199.90, image: "assets/images/15.jpg", images: ["assets/images/15.jpg", "assets/images/oo.jpg", "assets/images/15-3.jpg"], desc: "Figure-flattering, elegant", material: "Knit fabric, stretchy", category: "Dresses", sizeType: "clothes", isNew: false },
  { id: 16, name: "Printed Tea Dress", price: 109.90, oldPrice: 169.90, image: "assets/images/16.jpg", images: ["assets/images/16.jpg", "assets/images/pp.jpg", "assets/images/16-3.jpg"], desc: "Floral print, elegant", material: "Chiffon, lightweight", category: "Dresses", sizeType: "clothes", isNew: true },
  { id: 17, name: "Pearl Chain Bag", price: 99.90, oldPrice: 169.90, image: "assets/images/17.jpg", images: ["assets/images/17.jpg", "assets/images/qq.jpg", "assets/images/17-3.jpg"], desc: "Limited pearl detail", material: "PU leather, quality hardware", category: "Accessories", sizeType: "accessory", isNew: false },
  { id: 18, name: "Bow Hair Set", price: 29.90, oldPrice: 59.90, image: "assets/images/18.jpg", images: ["assets/images/18.jpg", "assets/images/rr.jpg", "assets/images/18-3.jpg"], desc: "Three-piece set", material: "Ribbon, handmade", category: "Accessories", sizeType: "accessory", isNew: true },
  { id: 19, name: "Crystal Beaded Bracelet", price: 39.90, oldPrice: 79.90, image: "assets/images/19.jpg", images: ["assets/images/19.jpg", "assets/images/ss.jpg", "assets/images/19-3.jpg"], desc: "Shiny crystal, versatile", material: "Alloy + crystal", category: "Accessories", sizeType: "accessory", isNew: false },
  { id: 20, name: "Vintage Metal Earrings", price: 49.90, oldPrice: 89.90, image: "assets/images/20.jpg", images: ["assets/images/20.jpg", "assets/images/tt.jpg", "assets/images/20-3.jpg"], desc: "Antique finish, edgy", material: "Silver plated copper, hypoallergenic", category: "Accessories", sizeType: "accessory", isNew: true },
  { id: 21, name: "Platform Loafers", price: 119.90, oldPrice: 189.90, image: "assets/images/21.jpg", images: ["assets/images/21.jpg", "assets/images/uu.jpg", "assets/images/21-3.jpg"], desc: "4cm height boost, comfortable", material: "Synthetic leather, soft sole", category: "Footwear", sizeType: "shoes", isNew: false },
  { id: 22, name: "Mary Jane Platform Shoes", price: 139.90, oldPrice: 199.90, image: "assets/images/22.jpg", images: ["assets/images/22.jpg", "assets/images/vv.jpg", "assets/images/22-3.jpg"], desc: "Sweet and edgy vintage", material: "Patent leather, non-slip sole", category: "Footwear", sizeType: "shoes", isNew: true },
  { id: 23, name: "Canvas White Sneakers", price: 89.90, oldPrice: 149.90, image: "assets/images/23.jpg", images: ["assets/images/23.jpg", "assets/images/ww.jpg", "assets/images/23-3.jpg"], desc: "Minimalist, breathable", material: "Canvas, rubber sole", category: "Footwear", sizeType: "shoes", isNew: false },
  { id: 24, name: "Lace-up Martin Boots", price: 159.90, oldPrice: 229.90, image: "assets/images/24.jpg", images: ["assets/images/24.jpg", "assets/images/xx.jpg", "assets/images/24-3.jpg"], desc: "Cool leather look", material: "PU, non-slip gear sole", category: "Footwear", sizeType: "shoes", isNew: true }
];

let cart = JSON.parse(localStorage.getItem('girlsing_cart') || '[]');
let favorites = JSON.parse(localStorage.getItem('girlsing_favs') || '[]');
let member = JSON.parse(localStorage.getItem('girlsing_member') || '{"isMember":false,"points":0,"level":"Bud","signDays":0,"birthday":""}');

function updateCartBadge() {
  const total = cart.reduce((s,i)=>s + (i.qty||0),0);
  document.querySelectorAll('.cart-count').forEach(b => b.innerText = total);
}

function saveCart() {
  localStorage.setItem('girlsing_cart', JSON.stringify(cart));
  updateCartBadge();
  if(window.updateCartPage) window.updateCartPage();
}

function addToCartWithSize(product, selectedSize, qty=1) {
  if(!selectedSize) { showToast('Please select a size first'); return false; }
  const exist = cart.find(i => i.id === product.id && i.selectedSize === selectedSize);
  if(exist) exist.qty += qty;
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty, selectedSize });
  saveCart();
  showToast(`${product.name} (${selectedSize}) added to cart`);
  return true;
}

function toggleFavorite(id) {
  if(favorites.includes(id)) favorites = favorites.filter(f => f !== id);
  else favorites.push(id);
  localStorage.setItem('girlsing_favs', JSON.stringify(favorites));
  if(window.location.pathname.includes('wishlist.html')) location.reload();
  else if(window.renderWishlist) window.renderWishlist();
}

function showToast(msg) {
  let t = document.getElementById('toastMsg');
  if(!t){ t=document.createElement('div'); t.id='toastMsg'; t.className='toast-msg'; document.body.appendChild(t); }
  t.innerText=msg; t.style.opacity=1;
  setTimeout(()=>t.style.opacity=0, 2000);
}

function showModal(title, content) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:2000;display:flex;align-items:center;justify-content:center;';
  modal.innerHTML = `<div style="background:white;border-radius:28px;padding:32px;max-width:500px;width:90%;"><div style="text-align:right;"><button class="modal-close" style="background:none;border:none;font-size:1.5rem;cursor:pointer;">&times;</button></div><h3 style="margin-bottom:16px;">${title}</h3><div style="line-height:1.6;">${content}</div></div>`;
  document.body.appendChild(modal);
  modal.querySelector('.modal-close').onclick = () => modal.remove();
  modal.onclick = (e) => { if(e.target === modal) modal.remove(); };
}

function getProductById(id) { return PRODUCTS.find(p => p.id == id); }

document.addEventListener('DOMContentLoaded', () => {
  const openCartBtn = document.getElementById('openCartBtn');
  if(openCartBtn) openCartBtn.addEventListener('click', () => window.location.href = 'cart.html');
  updateCartBadge();
  
  // 页脚链接弹窗事件
  const footerLinks = document.querySelectorAll('.footer-link');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const type = link.getAttribute('data-type');
      if(type === 'privacy') showModal('Privacy Policy', 'We value your privacy. Information collected is used only for order processing and membership services. We do not sell your data. You have the right to access, correct, or delete your personal information.');
      else if(type === 'help') showModal('Help Center', 'FAQ:<br>1. How to order? Add items to bag and checkout.<br>2. Payment methods: WeChat Pay / Alipay / Bank Card.<br>3. Order modifications? Contact customer service.');
      else if(type === 'return') showModal('Return Policy', '14-day no-reason returns from receipt date. Items must be unused with tags attached. Return shipping is buyer\'s responsibility unless defective.');
      else if(type === 'track') showModal('Track Order', 'Once shipped, you will receive an email with tracking number. You can also check order status in Member Center. Delivery takes 3-7 business days.');
      else if(type === 'terms') showModal('Terms of Use', 'By using this website, you agree to our terms. Commercial resale is prohibited. All content is copyright of GIRLSING.');
    });
  });
});