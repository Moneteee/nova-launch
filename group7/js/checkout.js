function renderOrderSummary() {
  if(!cart.length) {
    document.getElementById('summaryItems').innerHTML = '<p>Your cart is empty. <a href="collection.html">Shop now</a></p>';
    document.getElementById('summaryTotal').innerText = '$0.00';
    return;
  }
  let total = 0;
  let itemsHtml = '';
  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;
    itemsHtml += `<div class="summary-item"><span>${item.name} (${item.selectedSize}) x${item.qty}</span><span>$${subtotal.toFixed(2)}</span></div>`;
  });
  document.getElementById('summaryItems').innerHTML = itemsHtml;
  document.getElementById('summaryTotal').innerText = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderOrderSummary();

  const form = document.getElementById('checkoutForm');
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullname = document.getElementById('fullname')?.value.trim();
      const address = document.getElementById('address')?.value.trim();
      const city = document.getElementById('city')?.value.trim();
      const postal = document.getElementById('postal')?.value.trim();

      if(!fullname || !address || !city || !postal) {
        showToast('Please fill in all shipping fields');
        return;
      }

      showToast('Order placed successfully! Thank you for shopping at GIRLSING.');
      cart = [];
      saveCart();
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
    });
  }
});