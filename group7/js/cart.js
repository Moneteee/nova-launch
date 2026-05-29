function renderCart() {
  const container = document.getElementById('cartItemsList');
  if(!container) return;
  if(cart.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:60px 20px;color:var(--text-soft);">Your bag is empty. <a href="collection.html">Continue shopping</a></div>';
    document.getElementById('cartTotal').innerText = '$0.00';
    return;
  }
  let total = 0;
  let html = '';
  cart.forEach((item, idx) => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    html += `<div class="cart-item"><img class="cart-item-img" src="${item.image}" alt="${item.name}"><div class="cart-item-info"><div class="cart-item-name">${item.name}</div><div class="cart-item-size">Size: ${item.selectedSize}</div><div class="cart-item-price">$${item.price.toFixed(2)}</div></div><div class="cart-item-actions"><button class="cart-qty-btn cart-dec" data-index="${idx}">-</button><span>${item.qty}</span><button class="cart-qty-btn cart-inc" data-index="${idx}">+</button><button class="cart-remove-btn" data-index="${idx}">Remove</button></div><div class="cart-item-subtotal">$${subtotal.toFixed(2)}</div></div>`;
  });
  container.innerHTML = html;
  document.getElementById('cartTotal').innerText = `$${total.toFixed(2)}`;

  document.querySelectorAll('.cart-dec').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const idx = parseInt(btn.dataset.index);
      if(cart[idx].qty > 1) cart[idx].qty--;
      else cart.splice(idx,1);
      saveCart();
      renderCart();
    });
  });
  document.querySelectorAll('.cart-inc').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const idx = parseInt(btn.dataset.index);
      cart[idx].qty++;
      saveCart();
      renderCart();
    });
  });
  document.querySelectorAll('.cart-remove-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const idx = parseInt(btn.dataset.index);
      cart.splice(idx,1);
      saveCart();
      renderCart();
    });
  });
}

document.addEventListener('DOMContentLoaded',()=>{
  renderCart();
  document.getElementById('proceedToCheckoutBtn')?.addEventListener('click',()=>{
    if(cart.length === 0) showToast('Your bag is empty');
    else window.location.href = 'checkout.html';
  });
});

window.updateCartPage = renderCart;