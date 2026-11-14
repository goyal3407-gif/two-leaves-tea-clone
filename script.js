var teaList = [
  { name: "Organic Tropical Green Tea", priceText: "From $11.95", price: 11.95, rating: "★ 4.72 (87)", cat: "TEA SACHETS", type: "green",
    tile: "#c8e99a", pouchBg: "#ffd94d", animal: "🦜", pouchName: "Tropical Green",
    desc: "Bright, smooth green tea with a soft tropical fruit finish. Lovely hot, even better poured over ice." },
  { name: "Organic Ceremonial Matcha – 1 oz Tin", priceText: "From $19.95", price: 19.95, rating: "★ 4.5 (2)", cat: "MATCHA", type: "green",
    tile: "#dff2d0", pouchBg: "#a8d08d", animal: "🍵", pouchName: "Ceremonial Matcha",
    desc: "Stone-ground ceremonial grade matcha with a vivid color and a naturally sweet, creamy taste." },
  { name: "Organic Peppermint – 50 Naked Tea Sachets", priceText: "$21.95", price: 21.95, rating: "★ 5 (14)", cat: "NAKED SACHETS", type: "herbal",
    tile: "#cdeee2", pouchBg: "#bfe0f2", animal: "🌿", pouchName: "Peppermint",
    desc: "Pure peppermint leaves, naturally caffeine free. Cool, clean and refreshing in every cup." },
  { name: "Organic Earl Grey – 50 Naked Tea Sachets", priceText: "$21.95", price: 21.95, rating: "★ 4.59 (44)", cat: "NAKED SACHETS", type: "black",
    tile: "#d6e9f8", pouchBg: "#e5c491", animal: "🫖", pouchName: "Earl Grey",
    desc: "Bold black tea brightened with bergamot citrus. A classic cup with a fragrant finish." },
  { name: "Herbal Tea Trio", priceText: "$33.30", price: 33.30, rating: "★ 5 (2)", cat: "GIFTS & SAMPLERS", type: "herbal",
    tile: "#fbd2a0", pouchBg: "#f2b8c6", animal: "🌸", pouchName: "Herbal Trio",
    desc: "Three favorite caffeine-free herbal blends in one gift-ready set for slow evenings." },
  { name: "Classic Bamboo Tea", priceText: "$42.95", price: 42.95, rating: "", cat: "TEA SACHETS", type: "herbal",
    tile: "#e9e4cf", pouchBg: "#cfd4d8", animal: "🎋", pouchName: "Bamboo Tea",
    desc: "A smooth, mellow everyday tea presented in a classic bamboo-style pack." }
];

var latteList = [
  { tag: "NICE", title: "Chai<br>Latte Mix", pouchBg: "#bfe0f2", animal: "🐘", pouchName: "Nice Chai", glass: "🥛",
    desc: "Our Nice Chai is a not too sweet, not too spicy powdered latte mix, made to keep tea lattes simple." },
  { tag: "NICE", title: "Matcha<br>Latte Mix", pouchBg: "#a8d08d", animal: "🍵", pouchName: "Nice Matcha", glass: "🍵",
    desc: "Finely ground green tea with just enough sweetness to blend into smooth matcha lattes or smoothies." },
  { tag: "TWO ROOTS", title: "Golden<br>Latte", pouchBg: "#ffd94d", animal: "🦜", pouchName: "Golden Latte", glass: "🥛",
    desc: "A naturally caffeine-free blend of spice and sweetness for golden lattes, with only 6 grams of sugar per serving." },
  { tag: "BARISTA", title: "Chai<br>Latte Mix", pouchBg: "#e5c491", animal: "🐘", pouchName: "Barista Chai", glass: "🥛",
    desc: "Real spices, cane sugar and black teas blended for an indulgent, spicy cafe-style chai." }
];

var reviewList = [
  { quote: "“The right amount of spice.”", name: "Angelina R.", product: "ORGANIC MOUNTAIN HIGH CHAI", icon: "🌶️", bg: "#fbd9b0", strip: "#f2b880" },
  { quote: "“Incredibly refreshing, especially served over ice on a warm day.”", name: "Jacob K.", product: "ORGANIC MATCHA MINT", icon: "🍵", bg: "#dff2d0", strip: "#b7dd9a" },
  { quote: "“One sip and you can feel the difference — clean energy, rich flavor. Literally liquid gold.”", name: "Harrison G.", product: "TWO ROOTS GOLDEN LATTE MIX", icon: "🥛", bg: "#f5d76e", strip: "#eac33f" },
  { quote: "“Soo tasty and energizing.”", name: "Gracie M.", product: "ORGANIC TROPICAL GREEN TEA", icon: "🍃", bg: "#b5e048", strip: "#93c72e" },
  { quote: "“The perfect start to my day.”", name: "Jorge F.", product: "JASMINE PETAL", icon: "🌼", bg: "#d8a7e8", strip: "#bf83d6" }
];

var journalList = [
  { tag: "MATCHA", title: "Pumpkin Spice Matcha Latte", img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&h=800&q=80" },
  { tag: "CHAI", title: "Apple Pie Chai Tea Latte", img: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&h=800&q=80" },
  { tag: "RECIPES", title: "Matcha Martini Recipe", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=600&h=800&q=80" },
  { tag: "MATCHA", title: "Raspberry Matcha Yuzu-Ade", img: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&w=600&h=800&q=80" },
  { tag: "MATCHA", title: "Iced Blueberry Matcha", img: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=600&h=800&q=80" }
];

var vibeList = [
  { label: "A Sweet Treat", act: "latte" },
  { label: "Evening Unwind", act: "herbal" },
  { label: "Focused & Clear", act: "green" },
  { label: "Caffeine!", act: "black" },
  { label: "Caffeine-Free", act: "herbal" },
  { label: "Ceremony-Worthy", act: "matcha" },
  { label: "Whole Leaf", act: "all" },
  { label: "Over Ice", act: "green" },
  { label: "Lattes", act: "latte" },
  { label: "Black Tea", act: "black" },
  { label: "Green Tea", act: "green" },
  { label: "Herbal Tea", act: "herbal" },
  { label: "Organic", act: "all" },
  { label: "Barista Favorite", act: "latte" },
  { label: "Calm & Cozy", act: "herbal" },
  { label: "Fruit Forward", act: "tropical" }
];

var cartCount = 0;
var latteIndex = 0;
var popupSeen = false;

function printTeas(list) {
  var html = "";
  for (var i = 0; i < list.length; i++) {
    var t = list[i];
    html += '<div class="tea-card">'
      + '<div class="tea-tile" style="background:' + t.tile + ';">'
      + '<span class="tile-cat">' + t.cat + '</span>'
      + (t.rating ? '<span class="tile-rating">' + t.rating + '</span>' : '')
      + '<div class="tile-pouch" style="background:' + t.pouchBg + ';"><div class="pouch-top"></div><div class="pouch-animal">' + t.animal + '</div><h4>' + t.pouchName + '</h4><p>Two Leaves</p></div>'
      + '<button class="tile-add" onclick="addCart()">+<small>Add</small></button>'
      + '</div>'
      + '<div class="tea-info"><h3>' + t.name + '</h3>'
      + '<p class="tea-price">' + t.priceText + '</p>'
      + '<p class="tea-desc">' + t.desc + '</p></div>'
      + '</div>';
  }
  if (list.length === 0) { html = '<p class="tea-desc" style="padding:20px;">No teas match your search yet.</p>'; }
  document.getElementById('teaRow').innerHTML = html;
}

function printReviews() {
  var html = "";
  for (var i = 0; i < reviewList.length; i++) {
    var r = reviewList[i];
    html += '<div class="review-card" style="background:' + r.bg + ';">'
      + '<blockquote>' + r.quote + '</blockquote>'
      + '<p class="review-name">' + r.name + '</p>'
      + '<div class="review-strip" style="background:' + r.strip + ';">'
      + '<span class="review-thumb">' + r.icon + '</span>'
      + '<span class="review-product">' + r.product + '</span>'
      + '<button class="review-shop" onclick="goShop()">Shop</button>'
      + '</div></div>';
  }
  document.getElementById('reviewRow').innerHTML = html;
}

function printLatte() {
  var l = latteList[latteIndex];
  document.getElementById('latteCard').innerHTML =
    '<div class="latte-visual">'
    + '<div class="pouch" style="background:' + l.pouchBg + ';"><div class="pouch-top"></div><div class="pouch-animal">' + l.animal + '</div><h4>' + l.pouchName + '</h4><p>Latte Mix</p></div>'
    + '<div class="latte-glass">' + l.glass + '</div>'
    + '</div>'
    + '<div class="latte-info"><span class="latte-tag">' + l.tag + '</span>'
    + '<h3>' + l.title + '</h3>'
    + '<p>' + l.desc + '</p>'
    + '<button class="latte-buy" onclick="addCart()">Shop Now</button></div>';
}

function nextLatte(step) {
  latteIndex = latteIndex + step;
  if (latteIndex >= latteList.length) { latteIndex = 0; }
  if (latteIndex < 0) { latteIndex = latteList.length - 1; }
  printLatte();
}

function printJournal() {
  var html = "";
  for (var i = 0; i < journalList.length; i++) {
    var j = journalList[i];
    html += '<div class="journal-card">'
      + '<div class="journal-photo"><img src="' + j.img + '" alt="' + j.title + '">'
      + '<span class="journal-tag">' + j.tag + '</span>'
      + '<h3>' + j.title + '</h3></div>'
      + '<div class="journal-strip">' + j.title.toUpperCase() + ' RECIPE<br>Read time: 1 min</div>'
      + '</div>';
  }
  document.getElementById('journalRow').innerHTML = html;
}

function printVibes() {
  var html = "";
  for (var i = 0; i < vibeList.length; i++) {
    html += '<button class="vibe-pill" onclick="vibeClick(\'' + vibeList[i].act + '\')">' + vibeList[i].label + '</button>';
  }
  document.getElementById('vibePills').innerHTML = html;
}

function vibeClick(act) {
  if (act === 'latte') {
    document.getElementById('lattes').scrollIntoView();
    return;
  }
  if (act === 'all') { printTeas(teaList); }
  else if (act === 'matcha' || act === 'tropical') {
    var out = [];
    for (var i = 0; i < teaList.length; i++) {
      if (teaList[i].name.toLowerCase().indexOf(act) > -1) { out.push(teaList[i]); }
    }
    printTeas(out);
  } else {
    var res = [];
    for (var j = 0; j < teaList.length; j++) {
      if (teaList[j].type === act) { res.push(teaList[j]); }
    }
    printTeas(res);
  }
  document.getElementById('shop').scrollIntoView();
}

function searchDiscover() {
  var text = document.getElementById('discoverInput').value.toLowerCase();
  var out = [];
  for (var i = 0; i < teaList.length; i++) {
    if (teaList[i].name.toLowerCase().indexOf(text) > -1) { out.push(teaList[i]); }
  }
  printTeas(out);
}

function addCart() {
  cartCount = cartCount + 1;
  document.getElementById('cartCount').innerText = cartCount;
}

function bagShake() {
  var el = document.getElementById('cartCount');
  el.style.transform = "scale(1.45)";
  setTimeout(function() { el.style.transform = "scale(1)"; }, 180);
}

function scrollRow(dir) {
  document.getElementById('teaRow').scrollBy({ left: dir * 720, behavior: 'smooth' });
}

function goShop() {
  document.getElementById('shop').scrollIntoView();
}

function goSearch() {
  document.getElementById('discover').scrollIntoView();
  setTimeout(function() { document.getElementById('discoverInput').focus(); }, 650);
}

function goTagline() {
  document.getElementById('tagline').scrollIntoView();
}

function heroNext() {
  var box = document.getElementById('heroPouches');
  var first = box.children[0];
  var cls = first.className;
  for (var i = 0; i < box.children.length - 1; i++) {
    box.children[i].className = box.children[i + 1].className;
  }
  box.children[box.children.length - 1].className = cls;
}

function openMenu() {
  document.getElementById('navBox').classList.toggle('open');
}

function openPopup() {
  popupSeen = true;
  document.getElementById('popupBg').classList.add('open');
}

function closePopup() {
  document.getElementById('popupBg').classList.remove('open');
}

function claimOffer() {
  var email = document.getElementById('popupEmail').value;
  var msg = document.getElementById('popupMsg');
  if (email === "" || email.indexOf('@') === -1) {
    msg.innerText = "Please enter a valid email address.";
    msg.style.color = "#c0392b";
  } else {
    msg.innerText = "Welcome in! Your 10% off is on its way to " + email + ".";
    msg.style.color = "#2f6b2f";
  }
}

function joinNews() {
  var email = document.getElementById('newsEmail').value;
  var msg = document.getElementById('newsMsg');
  if (email === "" || email.indexOf('@') === -1) {
    msg.innerText = "Please enter a valid email address.";
    msg.style.color = "#c0392b";
  } else {
    msg.innerText = "You are on the list. Happy steeping!";
    msg.style.color = "#2f6b2f";
    document.getElementById('newsEmail').value = "";
  }
  return false;
}

setTimeout(function() { if (!popupSeen) { openPopup(); } }, 7000);

printTeas(teaList);
printReviews();
printLatte();
printJournal();
printVibes();
