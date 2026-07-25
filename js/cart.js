(function () {
  const STORAGE_KEY = 'mediswift_cart_v1';

  function getCart() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch (e) {
      return [];
    }
  }
  function saveCart(cart) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    syncBadges();
  }
  function findProduct(id) {
    return (window.MEDISWIFT_PRODUCTS || []).find((p) => p.id === id);
  }
  function addToCart(id, qty) {
    qty = qty || 1;
    const cart = getCart();
    const existing = cart.find((item) => item.id === id);
    if (existing) existing.qty += qty;
    else cart.push({ id, qty });
    saveCart(cart);
  }
  function setQty(id, qty) {
    let cart = getCart();
    if (qty <= 0) {
      cart = cart.filter((item) => item.id !== id);
    } else {
      const existing = cart.find((item) => item.id === id);
      if (existing) existing.qty = qty;
    }
    saveCart(cart);
  }
  function removeFromCart(id) {
    saveCart(getCart().filter((item) => item.id !== id));
  }
  function clearCart() {
    saveCart([]);
  }
  function cartCount() {
    return getCart().reduce((sum, item) => sum + item.qty, 0);
  }
  function cartLines() {
    return getCart()
      .map((item) => {
        const product = findProduct(item.id);
        if (!product) return null;
        return { ...item, product, lineTotal: product.price * item.qty };
      })
      .filter(Boolean);
  }
  function cartTotal() {
    return cartLines().reduce((sum, line) => sum + line.lineTotal, 0);
  }
  function formatPeso(amount) {
    return '₱' + amount.toLocaleString('en-PH', { maximumFractionDigits: 0 });
  }
  function syncBadges() {
    const count = cartCount();
    document.querySelectorAll('[data-cart-count]').forEach((el) => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  }

  window.MediSwiftCart = {
    getCart, saveCart, addToCart, setQty, removeFromCart, clearCart,
    cartCount, cartLines, cartTotal, findProduct, formatPeso, syncBadges,
  };

  document.addEventListener('DOMContentLoaded', syncBadges);
})();
