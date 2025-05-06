const products = [
    { name: 'Plain', price: 40, image: 'https://www.tutorjoes.in/public/js_program/12_cart/images/97.jpg' },
    { name: 'Paper Roast', price: 65, image: 'https://www.tutorjoes.in/public/js_program/12_cart/images/98.jpg' },
    { name: 'Onion Roast', price: 80, image: 'https://www.tutorjoes.in/public/js_program/12_cart/images/99.jpg' },
    { name: 'Egg Parotta', price: 55, image: 'https://www.tutorjoes.in/public/js_program/12_cart/images/100.jpg' },
    { name: 'pizza', price: 250, image: 'https://www.sightseeingtoursitaly.com/wp-content/uploads/2019/06/Famous-Italian-dishes-Copy.jpg' },
    { name: 'manchurian', price: 90, image: 'https://mumbaiwala.co.uk/wp-content/uploads/2025/03/Best-Veg-Manchurian-in-London.png' },
    { name: 'gujarati dishes', price: 100, image: 'https://www.flamingotravels.co.in/blog/wp-content/uploads/2020/06/Feture.jpg' },
    { name: 'punjabi dishes', price: 180, image: 'https://www.thestatesman.com/wp-content/uploads/2022/02/istockphoto-1-1024x683.jpg' }
  ];

  const cart = {};

  function renderProducts() {
    const list = document.getElementById('product-list');
    list.innerHTML = '';
    products.forEach((product, index) => {
      const col = document.createElement('div');
      col.className = 'col-md-3';
      col.innerHTML = `
        <div class="card text-dark position-relative">
          <img src="${product.image}" class="card-img-top">
          <div class="card-body">
            <h6 class="card-title">${product.name}</h6>
            <p class="card-text">Rs.${product.price}</p>
            <button class="btn btn-success product-btn" onclick="addToCart(${index})">➕</button>
          </div>
        </div>
      `;
      list.appendChild(col);
    });
  }

  function addToCart(index) {
    const product = products[index];
    if (!cart[product.name]) {
      cart[product.name] = { ...product, qty: 1 };
    } else {
      cart[product.name].qty++;
    }
    updateCart();
  }

  function removeFromCart(name) {
    delete cart[name];
    updateCart();
  }

  function updateCart() {
    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('total-price');
    const cartCount = document.getElementById('cart-count');

    itemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    for (let key in cart) {
      const item = cart[key];
      total += item.price * item.qty;
      count += item.qty;

      const div = document.createElement('div');
      div.className = 'cart-item';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
          <div><strong>${item.name}</strong></div>
          <div>Rs.${item.price} × ${item.qty}</div>
        </div>
        <div class="remove-btn" onclick="removeFromCart('${item.name}')">🗑️</div>
      `;
      itemsContainer.appendChild(div);
    }

    totalEl.innerText = total;
    cartCount.innerText = count;
  }

  function toggleCart() {
    const cartSidebar = document.getElementById('cart');
    cartSidebar.style.display = cartSidebar.style.display === 'block' ? 'none' : 'block';
  }

  renderProducts();