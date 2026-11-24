// DATA 8 PRODUK UMKM DESA KEBONAGUNG
const PRODUCTS = [
  {
    id: 1,
    name: "Keripik Singkong Renyah Gurih Bu Siti 250g",
    seller: "Camilan & Kerajinan Bu Siti",
    location: "Desa Kebonagung, Sidoarjo",
    category: "Olahan Pangan & Camilan",
    type: "Organik",
    price: 15000,
    rating: 5.0,
    reviews: 84,
    sold: 320,
    image:
      "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&w=600&q=80",
    desc: "Keripik singkong pilihan dari kebun warga Desa Kebonagung dengan bumbu bawang gurih alami tanpa pengawet.",
  },
  {
    id: 2,
    name: "Keripik Singkong Pedas Manis Balado Bu Siti 250g",
    seller: "Camilan & Kerajinan Bu Siti",
    location: "Desa Kebonagung, Sidoarjo",
    category: "Olahan Pangan & Camilan",
    type: "Organik",
    price: 16000,
    rating: 4.9,
    reviews: 62,
    sold: 290,
    image:
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&w=600&q=80",
    desc: "Balutan bumbu cabai dan gula merah karamel pedas manis yang meresap sempurna pada irisan singkong renyah.",
  },
  {
    id: 3,
    name: "Rengginang Ketan Gurih Terasi Bu Siti 300g",
    seller: "Camilan & Kerajinan Bu Siti",
    location: "Desa Kebonagung, Sidoarjo",
    category: "Olahan Pangan & Camilan",
    type: "Handmade",
    price: 20000,
    rating: 4.8,
    reviews: 45,
    sold: 245,
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
    desc: "Rengginang beras ketan asli yang dicetak manual dan dijemur alami dengan aroma terasi udang khas Sidoarjo.",
  },
  {
    id: 4,
    name: "Keripik Tempe Renyah Daun Jeruk Bu Siti 200g",
    seller: "Camilan & Kerajinan Bu Siti",
    location: "Desa Kebonagung, Sidoarjo",
    category: "Olahan Pangan & Camilan",
    type: "Organik",
    price: 18000,
    rating: 4.9,
    reviews: 38,
    sold: 210,
    image:
      "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&q=80",
    desc: "Irisan tempe kedelai lokal tipis dan renyah dengan taburan irisan daun jeruk purut wangi.",
  },
  {
    id: 5,
    name: "Rempeyek Kacang Gurih Renyah Bu Siti 250g",
    seller: "Camilan & Kerajinan Bu Siti",
    location: "Desa Kebonagung, Sidoarjo",
    category: "Olahan Pangan & Camilan",
    type: "Handmade",
    price: 18000,
    rating: 4.9,
    reviews: 31,
    sold: 195,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    desc: "Rempeyek tepung beras renyah bertabur kacang tanah pilihan dan bumbu kencur khas rumahan.",
  },
  {
    id: 6,
    name: "Kembang Goyang Wijen Renyah Bu Siti 250g",
    seller: "Camilan & Kerajinan Bu Siti",
    location: "Desa Kebonagung, Sidoarjo",
    category: "Olahan Pangan & Camilan",
    type: "Handmade",
    price: 17000,
    rating: 4.8,
    reviews: 25,
    sold: 175,
    image:
      "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80",
    desc: "Kue tradisional kembang goyang manis gurih dengan taburan biji wijen sangrai.",
  },
  {
    id: 7,
    name: "Tas Anyaman Pandan Tangan Khas Sidoarjo",
    seller: "Camilan & Kerajinan Bu Siti",
    location: "Desa Kebonagung, Sidoarjo",
    category: "Kriya & Kerajinan Tangan",
    type: "Handmade",
    price: 75000,
    rating: 5.0,
    reviews: 31,
    sold: 140,
    image:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80",
    desc: "Tas anyaman daun pandan kering buatan tangan pengrajin perempuan Desa Kebonagung, kuat dan ramah lingkungan.",
  },
  {
    id: 8,
    name: "Keripik Pisang Madu Manis Gurih Bu Siti 250g",
    seller: "Camilan & Kerajinan Bu Siti",
    location: "Desa Kebonagung, Sidoarjo",
    category: "Olahan Pangan & Camilan",
    type: "Organik",
    price: 17000,
    rating: 4.8,
    reviews: 20,
    sold: 160,
    image:
      "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=600&q=80",
    desc: "Pisang kepok matang pohon yang diolah renyah dengan lapisan madu hutan alami.",
  },
];

let cart = [{ ...PRODUCTS[0], qty: 1 }];
let selectedCatalogType = "Semua";

// FORMAT RUPIAH
function formatRupiah(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

// TEMPLATE KARTU PRODUK
function createProductCardHTML(product) {
  return `
    <article class="product-card">
      <div class="product-thumb" onclick="openProductDetail(${product.id})">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="loc-badge">📍 ${product.location}</span>
      </div>
      <div class="product-body">
        <span class="seller-name">${product.seller}</span>
        <h3 class="product-title" onclick="openProductDetail(${product.id})">${product.name}</h3>
        <div class="product-rating">
          <span>★ ${product.rating.toFixed(1)}</span> (${product.reviews} ulasan)
        </div>
        <div class="product-footer">
          <span class="product-price">${formatRupiah(product.price)}</span>
          <div class="card-actions">
            <button type="button" class="btn-icon-sm" title="Detail Produk" onclick="openProductDetail(${product.id})">👁️</button>
            <button type="button" class="btn-add-cart" onclick="addToCart(${product.id})">+ Keranjang</button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// NAVIGASI HALAMAN (BERANDA <-> KATALOG)
function switchPage(pageName) {
  document
    .querySelectorAll(".page")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById(`page-${pageName}`).classList.add("active");

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.toggle("active", link.dataset.page === pageName);
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// RENDER PRODUK BERANDA
function renderHomeProducts(typeFilter = "Semua") {
  const grid = document.getElementById("homeProductGrid");
  const filtered =
    typeFilter === "Semua"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.type === typeFilter);
  grid.innerHTML = filtered.map(createProductCardHTML).join("");
}

function filterHomeProducts(type, btnEl) {
  document
    .querySelectorAll("#homeTypeTabs .pill-tab")
    .forEach((b) => b.classList.remove("active"));
  btnEl.classList.add("active");
  renderHomeProducts(type);
}

// RENDER & FILTER KATALOG
function applyCatalogFilters() {
  const keyword = document
    .getElementById("filterKeyword")
    .value.trim()
    .toLowerCase();
  const category = document.querySelector(
    'input[name="filterCategory"]:checked',
  ).value;
  const minPrice =
    parseInt(document.getElementById("filterMinPrice").value, 10) || 0;
  const maxPrice =
    parseInt(document.getElementById("filterMaxPrice").value, 10) || Infinity;
  const sortBy = document.getElementById("sortSelect").value;

  let results = PRODUCTS.filter((p) => {
    const matchKeyword =
      p.name.toLowerCase().includes(keyword) ||
      p.category.toLowerCase().includes(keyword);
    const matchCategory = category === "Semua" || p.category === category;
    const matchType =
      selectedCatalogType === "Semua" || p.type === selectedCatalogType;
    const matchPrice = p.price >= minPrice && p.price <= maxPrice;
    return matchKeyword && matchCategory && matchType && matchPrice;
  });

  if (sortBy === "termurah") results.sort((a, b) => a.price - b.price);
  if (sortBy === "termahal") results.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") results.sort((a, b) => b.rating - a.rating);
  if (sortBy === "terlaris") results.sort((a, b) => b.sold - a.sold);

  document.getElementById("catalogCount").textContent = results.length;
  const grid = document.getElementById("catalogProductGrid");

  if (results.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1; padding:32px; text-align:center; background:#fff; border-radius:12px; border:1px solid #e5e7eb;">Tidak ada produk yang sesuai dengan filter.</p>`;
  } else {
    grid.innerHTML = results.map(createProductCardHTML).join("");
  }
}

function selectCatalogType(type, btnEl) {
  selectedCatalogType = type;
  document
    .querySelectorAll("#catalogTypePills .type-pill")
    .forEach((b) => b.classList.remove("active"));
  btnEl.classList.add("active");
  applyCatalogFilters();
}

function resetFilters() {
  document.getElementById("filterKeyword").value = "";
  document.getElementById("globalSearchInput").value = "";
  document.querySelector(
    'input[name="filterCategory"][value="Semua"]',
  ).checked = true;
  document.getElementById("filterMinPrice").value = "";
  document.getElementById("filterMaxPrice").value = "";
  document.getElementById("sortSelect").value = "terlaris";
  selectedCatalogType = "Semua";
  document.querySelectorAll("#catalogTypePills .type-pill").forEach((b) => {
    b.classList.toggle("active", b.dataset.type === "Semua");
  });
  applyCatalogFilters();
}

// PENCARIAN DARI NAVBAR & HERO
function handleGlobalSearch(val) {
  document.getElementById("filterKeyword").value = val;
  switchPage("katalog");
  applyCatalogFilters();
}

function handleHeroSearch(e) {
  e.preventDefault();
  const val = document.getElementById("heroSearchInput").value;
  quickSearch(val);
}

function quickSearch(keyword) {
  document.getElementById("filterKeyword").value = keyword;
  document.getElementById("globalSearchInput").value = keyword;
  switchPage("katalog");
  applyCatalogFilters();
}

function goToCatalogCategory(categoryName) {
  const radio = document.querySelector(
    `input[name="filterCategory"][value="${categoryName}"]`,
  );
  if (radio) radio.checked = true;
  switchPage("katalog");
  applyCatalogFilters();
}

// KERANJANG BELANJA
function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  document.getElementById("cartBadge").textContent = totalQty;
  document.getElementById("cartTotalPrice").textContent =
    formatRupiah(totalPrice);

  const container = document.getElementById("cartItemsContainer");
  if (cart.length === 0) {
    container.innerHTML = `<p style="text-align:center; color:#6b7280; margin-top:40px;">Keranjang belanja masih kosong.</p>`;
    return;
  }

  container.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" />
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <strong>${formatRupiah(item.price)}</strong>
        <div class="qty-controls">
          <button type="button" onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button type="button" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

function addToCart(productId) {
  const product = PRODUCTS.find((p) => p.id === productId);
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCartUI();
  showToast(`"${product.name}" ditambahkan ke keranjang!`);
}

function changeQty(productId, delta) {
  const idx = cart.findIndex((item) => item.id === productId);
  if (idx === -1) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCartUI();
}

function toggleCart(open) {
  document.getElementById("cartDrawer").classList.toggle("open", open);
  document.getElementById("cartOverlay").classList.toggle("open", open);
}

function checkoutCart() {
  if (cart.length === 0) {
    showToast("Keranjang masih kosong!");
    return;
  }
  cart = [];
  updateCartUI();
  toggleCart(false);
  showToast("Pesanan berhasil dibuat! Mitra UMKM akan segera memproses.");
}

// MODAL DETAIL & MENU TAMBAHAN
function openProductDetail(productId) {
  const p = PRODUCTS.find((item) => item.id === productId);
  document.getElementById("modalTitle").textContent = p.name;
  document.getElementById("modalBody").innerHTML = `
    <img src="${p.image}" alt="${p.name}" style="width:100%; height:200px; object-fit:cover; border-radius:10px; margin-bottom:14px;" />
    <p style="margin-bottom:10px;"><strong>Mitra UMKM:</strong> ${p.seller} (${p.location})</p>
    <p style="margin-bottom:10px;"><strong>Kategori:</strong> ${p.category} • <strong>Jenis:</strong> ${p.type}</p>
    <p style="margin-bottom:14px;">${p.desc}</p>
    <div style="display:flex; justify-content:space-between; align-items:center; padding-top:12px; border-top:1px solid #e5e7eb;">
      <strong style="font-size:1.15rem; color:#111827;">${formatRupiah(p.price)}</strong>
      <button type="button" class="btn-primary" onclick="addToCart(${p.id}); closeInfoModal();">+ Tambah ke Keranjang</button>
    </div>
  `;
  document.getElementById("infoModal").classList.add("open");
}

function openInfoModal(type) {
  const titleEl = document.getElementById("modalTitle");
  const bodyEl = document.getElementById("modalBody");

  if (type === "profil") {
    titleEl.textContent = "Profil Mitra UMKM Desa Kebonagung";
    bodyEl.innerHTML = `<p><strong>Camilan & Kerajinan Bu Siti</strong> merupakan sentra UMKM unggulan di Desa Kebonagung, Kecamatan Sukodono, Kabupaten Sidoarjo yang memproduksi aneka camilan tradisional serta kerajinan anyaman pandan.</p>`;
  } else if (type === "lacak") {
    titleEl.textContent = "Lacak Pesanan";
    bodyEl.innerHTML = `<p>Status Pesanan Terakhir (<strong>#PD-2026081</strong>): <span style="color:#15653a; font-weight:700;">Sedang Dikemas oleh Camilan & Kerajinan Bu Siti</span>.</p>`;
  } else if (type === "tentang") {
    titleEl.textContent = "Tentang Desa Kebonagung";
    bodyEl.innerHTML = `<p>Desa Kebonagung terletak di Kecamatan Sukodono, Kabupaten Sidoarjo, Jawa Timur, dengan potensi utama di sektor olahan pangan rumahan dan kriya anyaman lokal.</p>`;
  } else if (type === "daftar") {
    titleEl.textContent = "Pendaftaran Mitra UMKM Baru";
    bodyEl.innerHTML = `<p>Hubungi admin Desa Kebonagung melalui WhatsApp <strong>+62 819-4491-6665</strong> atau email <strong>halo@pasardesa.id</strong> untuk mendaftarkan toko UMKM Anda secara gratis.</p>`;
  }

  document.getElementById("infoModal").classList.add("open");
}

function closeInfoModal(e) {
  if (!e || e.target.id === "infoModal") {
    document.getElementById("infoModal").classList.remove("open");
  }
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2600);
}

// INISIALISASI AWAL
document.addEventListener("DOMContentLoaded", () => {
  renderHomeProducts();
  applyCatalogFilters();
  updateCartUI();
});
