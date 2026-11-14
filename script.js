var teaList = [
  { id: 1, name: "Organic Mountain High Chai", price: 12.50, type: "black", stars: 5,
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&h=600&q=80",
    desc: "Bold black tea blended with cinnamon, ginger, cardamom and cloves. Our best selling chai for lattes and morning cups." },
  { id: 2, name: "Organic Assam Breakfast Tea", price: 10.00, type: "black", stars: 4,
    img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&h=600&q=80",
    desc: "Full-bodied malty black tea from Assam, India. Strong enough for milk, smooth enough to drink plain." },
  { id: 3, name: "Organic Tropical Green Tea", price: 11.25, type: "green", stars: 5,
    img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&h=600&q=80",
    desc: "Light green tea with tropical fruit notes. Great hot, even better iced on a warm day." },
  { id: 4, name: "Organic Jasmine Petal Green", price: 13.00, type: "green", stars: 4,
    img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&h=600&q=80",
    desc: "Green tea scented with real jasmine petals. Floral, soft and calming." },
  { id: 5, name: "Organic Peppermint Herbal Tea", price: 9.75, type: "herbal", stars: 5,
    img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&h=600&q=80",
    desc: "Pure peppermint leaves, naturally caffeine free. Fresh and cooling, perfect after food." },
  { id: 6, name: "Organic Chamomile Herbal Tea", price: 9.50, type: "herbal", stars: 4,
    img: "https://images.unsplash.com/photo-1523920290228-4f321a939b4c?auto=format&fit=crop&w=600&h=600&q=80",
    desc: "Whole chamomile flowers for a soft honey-like cup. The classic bedtime tea." }
];

var latteList = [
  { id: 7, name: "Nice Chai Latte Mix", price: 15.00, type: "latte", stars: 5,
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&h=600&q=80",
    desc: "Not too sweet, not too spicy powdered mix for making tea lattes simple - just add hot milk." },
  { id: 8, name: "Nice Matcha Latte Mix", price: 16.50, type: "latte", stars: 5,
    img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&h=600&q=80",
    desc: "Finely ground green tea with just enough sweetness to blend into matcha lattes or smoothies." },
  { id: 9, name: "Golden Latte Mix - Two Roots", price: 14.25, type: "latte", stars: 4,
    img: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=600&h=600&q=80",
    desc: "Naturally caffeine-free blend of turmeric, spice and sweetness for golden lattes. Only 6g sugar per serving." },
  { id: 10, name: "Barista Chai Latte Mix", price: 17.00, type: "latte", stars: 5,
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=600&h=600&q=80",
    desc: "Real spices blend with cane sugar and black teas for an indulgent, spicy cafe-style chai." }
];

var allTeas = teaList.concat(latteList);
var cart = [];
var nowShowing = teaList.slice();
var quickId = 0;
var quickQty = 1;

function makeStars(num) {
  var s = "";
  for (var i = 0; i < 5; i++) {
    if (i < num) { s = s + "★"; } else { s = s + "☆"; }
  }
  return s;
}

function findTea(id) {
  for (var i = 0; i < allTeas.length; i++) {
    if (allTeas[i].id === id) { return allTeas[i]; }
  }
  return null;
}

function printTeas(list, boxId) {
  var html = "";
  for (var i = 0; i < list.length; i++) {
    var t = list[i];
    html += '<div class="tea-card">'
      + '<img src="' + t.img + '" alt="' + t.name + '" onclick="openQuick(' + t.id + ')" style="cursor:pointer;">'
      + '<h3 onclick="openQuick(' + t.id + ')" style="cursor:pointer;">' + t.name + '</h3>'
      + '<div class="star-line">' + makeStars(t.stars) + '</div>'
      + '<p class="price-tag">$' + t.price.toFixed(2) + '</p>'
      + '<button class="small-btn" onclick="addCart(' + t.id + ')">Add to Cart</button>'
      + ' <button class="filter-btn" onclick="openQuick(' + t.id + ')">Quick View</button>'
      + '</div>';
  }
  if (list.length === 0) { html = '<p class="small-text">No teas found. Try another search.</p>'; }
  document.getElementById(boxId).innerHTML = html;
  if (boxId === 'teaGrid') {
    document.getElementById('resultCount').innerText = list.length + " products";
  }
}

function showTeas(type, btn) {
  if (type === 'all') { nowShowing = teaList.slice(); }
  else {
    nowShowing = [];
    for (var i = 0; i < allTeas.length; i++) {
      if (allTeas[i].type === type) { nowShowing.push(allTeas[i]); }
    }
  }
  document.getElementById('searchBox').value = "";
  printTeas(nowShowing, 'teaGrid');
  var btns = document.getElementsByClassName('filter-btn');
  for (var j = 0; j < btns.length; j++) { btns[j].classList.remove('active'); }
  if (btn) { btn.classList.add('active'); }
  document.getElementById('shop').scrollIntoView();
}

function searchTea() {
  var text = document.getElementById('searchBox').value.toLowerCase();
  var result = [];
  for (var i = 0; i < allTeas.length; i++) {
    if (allTeas[i].name.toLowerCase().indexOf(text) > -1) { result.push(allTeas[i]); }
  }
  nowShowing = result;
  printTeas(result, 'teaGrid');
}

function sortTeas() {
  var way = document.getElementById('sortSelect').value;
  var list = nowShowing.slice();
  if (way === 'low') { list.sort(function(a, b) { return a.price - b.price; }); }
  if (way === 'high') { list.sort(function(a, b) { return b.price - a.price; }); }
  if (way === 'name') { list.sort(function(a, b) { return a.name.localeCompare(b.name); }); }
  if (way === 'rating') { list.sort(function(a, b) { return b.stars - a.stars; }); }
  printTeas(list, 'teaGrid');
}

function openQuick(id) {
  var t = findTea(id);
  quickId = id;
  quickQty = 1;
  document.getElementById('quickImg').src = t.img;
  document.getElementById('quickName').innerText = t.name;
  document.getElementById('quickStars').innerText = makeStars(t.stars);
  document.getElementById('quickDesc').innerText = t.desc;
  document.getElementById('quickSize').value = "1";
  document.getElementById('quickQty').innerText = "1";
  changeQuickPrice();
  document.getElementById('quickBg').classList.add('open');
}

function closeQuick() {
  document.getElementById('quickBg').classList.remove('open');
}

function changeQuickPrice() {
  var t = findTea(quickId);
  var mult = parseFloat(document.getElementById('quickSize').value);
  var price = t.price * mult * quickQty;
  document.getElementById('quickPrice').innerText = price.toFixed(2);
}

function changeQty(step) {
  quickQty = quickQty + step;
  if (quickQty < 1) { quickQty = 1; }
  if (quickQty > 20) { quickQty = 20; }
  document.getElementById('quickQty').innerText = quickQty;
  changeQuickPrice();
}

function addQuickToCart() {
  var t = findTea(quickId);
  var sizeSel = document.getElementById('quickSize');
  var sizeName = sizeSel.options[sizeSel.selectedIndex].text;
  var mult = parseFloat(sizeSel.value);
  cart.push({ name: t.name + " (" + sizeName + ")", price: t.price * mult, qty: quickQty });
  updateCart();
  closeQuick();
  showToast();
}

function addCart(id) {
  var t = findTea(id);
  cart.push({ name: t.name + " (15 Sachets)", price: t.price, qty: 1 });
  updateCart();
  showToast();
}

function updateCart() {
  var count = 0;
  var total = 0;
  var html = "";
  for (var i = 0; i < cart.length; i++) {
    count = count + cart[i].qty;
    total = total + cart[i].price * cart[i].qty;
    html += '<div class="cart-item"><span>' + cart[i].name + '<br>'
      + '<button class="cart-qty-btn" onclick="cartQty(' + i + ', -1)">-</button> '
      + cart[i].qty
      + ' <button class="cart-qty-btn" onclick="cartQty(' + i + ', 1)">+</button></span>'
      + '<span>$' + (cart[i].price * cart[i].qty).toFixed(2)
      + ' <a href="#" onclick="removeItem(' + i + '); return false;" style="color:red;">✕</a></span></div>';
  }
  if (cart.length === 0) { html = "<p>Your cart is empty.</p>"; }
  document.getElementById('cartCount').innerText = count;
  document.getElementById('cartItems').innerHTML = html;
  document.getElementById('cartTotal').innerText = total.toFixed(2);
}

function cartQty(index, step) {
  cart[index].qty = cart[index].qty + step;
  if (cart[index].qty < 1) { cart.splice(index, 1); }
  updateCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

function openCart() {
  document.getElementById('cartBox').classList.add('open');
  document.getElementById('cartBg').style.display = 'block';
}

function closeCart() {
  document.getElementById('cartBox').classList.remove('open');
  document.getElementById('cartBg').style.display = 'none';
}

function showToast() {
  var box = document.getElementById('toastBox');
  box.classList.add('show');
  setTimeout(function() { box.classList.remove('show'); }, 1800);
}

function openMenu() {
  document.getElementById('navBox').classList.toggle('open');
}

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

setInterval(function() { nextReview(1); }, 6000);

var articles = [
  { title: "How to brew the perfect chai",
    text: "Step 1: Use fresh cold water and bring it to a full boil - chai needs real heat to open the spices. Step 2: Add one sachet (or 1 tsp loose leaf) per cup. Step 3: Steep 4-5 minutes, no less, or the spice stays flat. Step 4: For a latte, warm milk separately and add it after steeping, never boil the tea in milk at the start. Step 5: Sweeten last, taste first. Most people get step 3 wrong - under-steeping is why homemade chai tastes weak." },
  { title: "Matcha vs green tea - what's the difference?",
    text: "Both come from the same plant, Camellia sinensis. The difference is how the leaf is used. Green tea is steeped - you drink the water and throw the leaf away. Matcha is the whole leaf ground into a fine powder and whisked into the water, so you consume the entire leaf. That is why matcha has more caffeine and a richer, creamier taste. Shade-growing before harvest also gives matcha its bright green color and extra amino acids." },
  { title: "Our trip to the tea gardens of Assam",
    text: "Assam, in north-east India, grows some of the boldest black tea in the world in the warm valley of the Brahmaputra river. On this year's sourcing trip we walked the gardens at sunrise, when pluckers take only the top two leaves and a bud - the pluck that gives the best flavor. We cupped dozens of lots before choosing this season's breakfast tea: malty, bright, and strong enough to stand up to milk." }
];

function openArticle(num) {
  document.getElementById('articleTitle').innerText = articles[num].title;
  document.getElementById('articleText').innerText = articles[num].text;
  document.getElementById('articleBg').classList.add('open');
}

function closeArticle() {
  document.getElementById('articleBg').classList.remove('open');
}

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

function sendPartnerForm() {
  var name = document.getElementById('partnerName').value;
  var biz = document.getElementById('partnerBiz').value;
  var email = document.getElementById('partnerEmail').value;
  var out = document.getElementById('partnerMsgOut');
  if (name === "" || biz === "" || email.indexOf('@') === -1) {
    out.innerText = "Please fill your name, business name and a valid email.";
    out.style.color = "#ffd9d9";
    return false;
  }
  out.innerText = "Thank you, " + name + "! Our wholesale team will email " + email + " within 2 working days.";
  out.style.color = "#ffffff";
  document.getElementById('partnerName').value = "";
  document.getElementById('partnerBiz').value = "";
  document.getElementById('partnerEmail').value = "";
  document.getElementById('partnerMsg').value = "";
  return false;
}

printTeas(teaList, 'teaGrid');
printTeas(latteList, 'latteGrid');
updateCart();
