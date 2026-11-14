// script.js - tea shop clone, simple js for practice

// all tea products here
var teaList = [
  { id: 1, name: "Organic Mountain High Chai", price: 12.50, type: "black",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80", stars: 5 },
  { id: 2, name: "Organic Assam Breakfast Tea", price: 10.00, type: "black",
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=500&q=80", stars: 4 },
  { id: 3, name: "Organic Tropical Green Tea", price: 11.25, type: "green",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80", stars: 5 },
  { id: 4, name: "Organic Jasmine Petal Green", price: 13.00, type: "green",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80", stars: 4 },
  { id: 5, name: "Organic Peppermint Herbal Tea", price: 9.75, type: "herbal",
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=500&q=80", stars: 5 },
  { id: 6, name: "Organic Chamomile Herbal Tea", price: 9.50, type: "herbal",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80", stars: 4 }
];

// latte products
var latteList = [
  { id: 7, name: "Nice Chai Latte Mix", price: 15.00, type: "latte",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80", stars: 5,
    desc: "Not too sweet, not too spicy powdered mix for simple tea lattes." },
  { id: 8, name: "Nice Matcha Latte Mix", price: 16.50, type: "latte",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80", stars: 5,
    desc: "Finely ground green tea with just enough sweetness for matcha lattes." },
  { id: 9, name: "Golden Latte Mix - Two Roots", price: 14.25, type: "latte",
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=500&q=80", stars: 4,
    desc: "Naturally caffeine-free blend of turmeric, spice and sweetness." },
  { id: 10, name: "Barista Chai Latte Mix", price: 17.00, type: "latte",
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=500&q=80", stars: 5,
    desc: "Real spices, cane sugar and black tea for an indulgent spicy sip." }
];

var cart = [];

// make star text like ★★★★☆
function makeStars(num) {
  var s = "";
  for (var i = 0; i < 5; i++) {
    if (i < num) { s = s + "★"; } else { s = s + "☆"; }
  }
  return s;
}

// print tea cards on page
function printTeas(list, boxId) {
  var html = "";
  for (var i = 0; i < list.length; i++) {
    var t = list[i];
    html += '<div class="tea-card">'
      + '<img src="' + t.img + '" alt="' + t.name + '">'
      + '<h3>' + t.name + '</h3>'
      + '<div class="star-line">' + makeStars(t.stars) + '</div>'
      + (t.desc ? '<p style="font-size:14px;color:#5c554b;margin-bottom:8px;">' + t.desc + '</p>' : '')
      + '<p class="price-tag">$' + t.price.toFixed(2) + '</p>'
      + '<button class="small-btn" onclick="addCart(' + t.id + ')">Add to Cart</button>'
      + '</div>';
  }
  document.getElementById(boxId).innerHTML = html;
}

// filter teas when button clicked
function showTeas(type, btn) {
  var all = teaList.concat(latteList);
  var result = [];
  if (type === 'all') {
    result = teaList;
    printTeas(result, 'teaGrid');
  } else {
    for (var i = 0; i < all.length; i++) {
      if (all[i].type === type) { result.push(all[i]); }
    }
    printTeas(result, 'teaGrid');
  }
  // change active button color
  var btns = document.getElementsByClassName('filter-btn');
  for (var j = 0; j < btns.length; j++) { btns[j].classList.remove('active'); }
  if (btn) { btn.classList.add('active'); }
  document.getElementById('shop').scrollIntoView();
}

// add product in cart
function addCart(id) {
  var all = teaList.concat(latteList);
  for (var i = 0; i < all.length; i++) {
    if (all[i].id === id) { cart.push(all[i]); }
  }
  updateCart();
}

// refresh cart box
function updateCart() {
  document.getElementById('cartCount').innerText = cart.length;
  var html = "";
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
    html += '<div class="cart-item"><span>' + cart[i].name + '</span>'
      + '<span>$' + cart[i].price.toFixed(2)
      + ' <a href="#" onclick="removeItem(' + i + '); return false;" style="color:red;">✕</a></span></div>';
  }
  if (cart.length === 0) { html = "<p>Your cart is empty.</p>"; }
  document.getElementById('cartItems').innerHTML = html;
  document.getElementById('cartTotal').innerText = total.toFixed(2);
}

// remove one item from cart
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// open and close cart
function openCart() {
  document.getElementById('cartBox').classList.add('open');
  document.getElementById('cartBg').style.display = 'block';
}
function closeCart() {
  document.getElementById('cartBox').classList.remove('open');
  document.getElementById('cartBg').style.display = 'none';
}

// mobile menu open/close
function openMenu() {
  document.getElementById('navBox').classList.toggle('open');
}

// reviews slider
var reviews = [
  { text: '"The right amount of spice."', name: "- Sarah K. (Organic Mountain High Chai)" },
  { text: '"One sip and you can feel the difference - clean energy, rich flavor. Literally liquid gold."', name: "- Harrison G. (Golden Latte Mix)" },
  { text: '"Soo tasty and energizing."', name: "- Gracie M. (Organic Tropical Green Tea)" },
  { text: '"The perfect start to my day."', name: "- Jorge F. (Assam Breakfast Tea)" }
];
var reviewIndex = 0;

function nextReview(step) {
  reviewIndex = reviewIndex + step;
  if (reviewIndex >= reviews.length) { reviewIndex = 0; }
  if (reviewIndex < 0) { reviewIndex = reviews.length - 1; }
  document.getElementById('reviewLine').innerText = reviews[reviewIndex].text;
  document.getElementById('reviewName').innerText = reviews[reviewIndex].name;
}

// newsletter join button
function joinNews() {
  var email = document.getElementById('newsEmail').value;
  var msgBox = document.getElementById('newsMsg');
  if (email === "" || email.indexOf('@') === -1) {
    msgBox.innerText = "Please enter a valid email.";
    msgBox.style.color = "#e57373";
  } else {
    msgBox.innerText = "Thanks for joining! Your 10% code: TEATIME";
    msgBox.style.color = "#a5d6a7";
    document.getElementById('newsEmail').value = "";
  }
}

// first time page load - print all products
printTeas(teaList, 'teaGrid');
printTeas(latteList, 'latteGrid');
updateCart();
