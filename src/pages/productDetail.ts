import dotenv from "dotenv";
dotenv.config();
import { Product } from "../types/Type";
export function renderProductDetail(productId: string): HTMLElement {
  const div = document.createElement("div");
  let product: Product | null = null;
  let currentImageIndex = 0;
  let quantity = 1;

  div.innerHTML = `
    <div class="min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-20">
      <!-- Loading Spinner -->
      <div id="loadingSpinner" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-[#1649A1] border-t-transparent"></div>
      </div>

      <!-- Product Detail Content -->
      <div id="productContent" class="hidden">
        <!-- Navigation Bar -->
        <nav class="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50 ">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <button id="backButton" class="flex items-center text-white hover:text-[#F35F25] transition-colors duration-300">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to Shop
              </button>
              
              <div class="text-white font-semibold">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#1649A1] to-[#F35F25]">You&Me</span>
              </div>
            </div>
          </div>
        </nav>

        <!-- Breadcrumb -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav class="text-sm">
            <ol class="flex items-center space-x-2 text-gray-400">
              <li><a href="#" class="hover:text-white transition-colors">Home</a></li>
              <li><span class="mx-2">/</span></li>
              <li><a href="#" class="hover:text-white transition-colors">Shop</a></li>
              <li><span class="mx-2">/</span></li>
              <li id="productCategory" class="hover:text-white transition-colors cursor-pointer"></li>
              <li><span class="mx-2">/</span></li>
              <li id="productTitle" class="text-white font-medium truncate max-w-xs"></li>
            </ol>
          </nav>
        </div>

        <!-- Product Details -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Product Images -->
            <div class="space-y-4">
              <!-- Main Image -->
              <div class="relative group">
                <div class="aspect-square bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700/50">
                  <img 
                    id="mainImage" 
                    src="" 
                    alt="" 
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  >
                  
                  <!-- Image Navigation Arrows -->
                  <button id="prevImage" class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                  </button>
                  <button id="nextImage" class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                  
                  <!-- Image Counter -->
                  <div class="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    <span id="imageCounter">1 / 1</span>
                  </div>
                </div>
              </div>
              
              <!-- Thumbnail Images -->
              <div id="thumbnailContainer" class="flex space-x-3 overflow-x-auto pb-2">
                <!-- Thumbnails will be inserted here -->
              </div>
            </div>

            <!-- Product Information -->
            <div class="space-y-6">
              <!-- Product Header -->
              <div>
                <div class="flex items-center gap-2 mb-2">
                  <span id="brandName" class="text-sm font-medium text-[#F35F25] bg-[#1649A1]/20 px-3 py-1 rounded-full"></span>
                  <div class="flex items-center">
                    <div id="ratingStars" class="flex items-center"></div>
                    <span id="ratingText" class="ml-2 text-sm text-gray-400"></span>
                  </div>
                </div>
                <h1 id="productName" class="text-3xl font-bold text-white mb-4"></h1>
                <p id="productDescription" class="text-gray-300 leading-relaxed"></p>
              </div>

              <!-- Price Section -->
              <div class="border-t border-gray-700/50 pt-6">
                <div class="flex items-center gap-4 mb-4">
                  <span id="currentPrice" class="text-3xl font-bold text-white"></span>
                  <span id="originalPrice" class="text-xl text-gray-400 line-through"></span>
                  <span id="discountBadge" class="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium"></span>
                </div>
                
                <!-- Stock Status -->
                <div id="stockStatus" class="flex items-center gap-2 mb-6">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-sm text-green-400">In Stock</span>
                  <span id="stockCount" class="text-sm text-gray-400"></span>
                </div>
              </div>

              <!-- Quantity and Add to Cart -->
              <div class="border-t border-gray-700/50 pt-6">
                <div class="flex items-center gap-4 mb-6">
                  <div class="flex items-center border border-gray-600 rounded-xl overflow-hidden">
                    <button id="decreaseQty" class="px-4 py-3 bg-gray-700/50 hover:bg-gray-600 text-white transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                      </svg>
                    </button>
                    <input 
                      id="quantity" 
                      type="number" 
                      value="1" 
                      min="1" 
                      class="w-16 py-3 text-center bg-gray-700/50 text-white border-0 focus:outline-none focus:ring-0"
                    >
                    <button id="increaseQty" class="px-4 py-3 bg-gray-700/50 hover:bg-gray-600 text-white transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <div class="text-sm text-gray-400">
                    Total: <span id="totalPrice" class="text-white font-semibold">$0.00</span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4">
                  <button id="addToCart" class="flex-1 bg-gradient-to-r from-[#1649A1] to-[#1649A1]/80 text-white py-4 px-8 rounded-xl font-semibold hover:from-[#1649A1]/90 hover:to-[#1649A1]/70 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#1649A1]/20">
                    <span class="flex items-center justify-center gap-2">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H19"></path>
                      </svg>
                      Add to Cart
                    </span>
                  </button>
                  
                  <button id="buyNow" class="flex-1 bg-gradient-to-r from-[#F35F25] to-[#F35F25]/80 text-white py-4 px-8 rounded-xl font-semibold hover:from-[#F35F25]/90 hover:to-[#F35F25]/70 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F35F25]/20">
                    Buy Now
                  </button>
                  
                  <button id="wishlist" class="p-4 border border-gray-600 rounded-xl text-gray-400 hover:text-[#F35F25] hover:border-[#F35F25] transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Product Tags -->
              <div id="productTags" class="border-t border-gray-700/50 pt-6">
                <h3 class="text-sm font-medium text-gray-400 mb-3">Tags:</h3>
                <div class="flex flex-wrap gap-2">
                  <!-- Tags will be inserted here -->
                </div>
              </div>
            </div>
          </div>

          <!-- Product Tabs -->
          <div class="mt-16">
            <div class="border-b border-gray-700/50">
              <nav class="flex space-x-8">
              <button id="specificationsTab" class="tab-button py-4 px-1 border-b-2 border-transparent text-gray-400 hover:text-white font-medium text-sm">
                  Specifications
                </button>
                <button id="descriptionTab" class="tab-button py-4 px-1 border-b-2 border-[#1649A1] text-[#1649A1] font-medium text-sm">
                  Description
                </button>
                <button id="reviewsTab" class="tab-button py-4 px-1 border-b-2 border-transparent text-gray-400 hover:text-white font-medium text-sm">
                  Reviews <span id="reviewCount" class="ml-1"></span>
                </button>
              </nav>
            </div>

            
              
            <!-- Tab Content -->
            <div class="py-8">
              <!-- Specifications Tab -->
              <div id="specificationsContent" class="tab-content hidden">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div id="specsList" class="space-y-4">
                    <!-- Specifications will be inserted here -->
                  </div>
                </div>
              </div>
              
              <!-- Description Tab -->
              <div id="descriptionContent" class="tab-content">
                <div class="prose prose-invert max-w-none">
                  <p id="fullDescription" class="text-gray-300 leading-relaxed text-lg"></p>
                </div>
              </div>

              <!-- Reviews Tab -->
              <div id="reviewsContent" class="tab-content hidden">
                <div id="reviewsList" class="space-y-6">
                  <!-- Reviews will be inserted here -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Error State -->
      <div id="errorContent" class="hidden text-center py-20">
        <div class="text-6xl mb-4">⚠️</div>
        <h3 class="text-2xl font-bold text-white mb-2">Product Not Found</h3>
        <p class="text-gray-400 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <button id="backToShop" class="bg-gradient-to-r from-[#1649A1] to-[#1649A1]/80 text-white py-3 px-6 rounded-xl font-semibold hover:from-[#1649A1]/90 hover:to-[#1649A1]/70 transition-all duration-300">
          Back to Shop
        </button>
      </div>
    </div>

    <style>
      .tab-button.active {
        color: #1649A1;
        border-color: #1649A1;
      }
      
      .tab-button:hover:not(.active) {
        color: white;
        border-color: #374151;
      }
      
      .thumbnail-image {
        transition: all 0.3s ease;
      }
      
      .thumbnail-image.active {
        border: 2px solid #1649A1;
        box-shadow: 0 0 10px rgba(22, 73, 161, 0.3);
      }
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      #productContent {
        animation: fadeIn 0.5s ease-out;
      }
    </style>
  `;

  // Initialize
  async function init() {
    await loadProduct();
    setupEventListeners();
  }

  // Load product data
  async function loadProduct() {
    try {
      const baseUrl = process.env.BASE_URL;
      const response = await fetch(`${baseUrl}/${productId}`);

      if (!response.ok) {
        throw new Error("Product not found");
      }

      product = await response.json();
      renderProduct();

      div.querySelector("#loadingSpinner")?.classList.add("hidden");
      div.querySelector("#productContent")?.classList.remove("hidden");
    } catch (error) {
      console.error("Error loading product:", error);
      div.querySelector("#loadingSpinner")?.classList.add("hidden");
      div.querySelector("#errorContent")?.classList.remove("hidden");
    }
  }

  // Render product details
  function renderProduct() {
    if (!product) return;

    // Set basic product info
    const productName = div.querySelector("#productName") as HTMLElement;
    const productDescription = div.querySelector(
      "#productDescription"
    ) as HTMLElement;
    const brandName = div.querySelector("#brandName") as HTMLElement;
    const productCategory = div.querySelector(
      "#productCategory"
    ) as HTMLElement;
    const productTitle = div.querySelector("#productTitle") as HTMLElement;

    productName.textContent = product.title;
    productDescription.textContent = product.description;
    brandName.textContent = product.brand;
    productCategory.textContent =
      product.category.charAt(0).toUpperCase() + product.category.slice(1);
    productTitle.textContent = product.title;

    // Set prices
    const currentPrice = div.querySelector("#currentPrice") as HTMLElement;
    const originalPrice = div.querySelector("#originalPrice") as HTMLElement;
    const discountBadge = div.querySelector("#discountBadge") as HTMLElement;

    const discountedPrice =
      product.price * (1 - product.discountPercentage / 100);
    currentPrice.textContent = `$${discountedPrice.toFixed(2)}`;
    originalPrice.textContent = `$${product.price.toFixed(2)}`;
    discountBadge.textContent = `-${product.discountPercentage}%`;

    // Set rating
    renderRating(product.rating);

    // Set stock
    const stockCount = div.querySelector("#stockCount") as HTMLElement;
    const stockStatus = div.querySelector("#stockStatus") as HTMLElement;
    stockCount.textContent = `(${product.stock} available)`;

    if (product.stock === 0) {
      stockStatus.innerHTML = `
        <div class="w-2 h-2 bg-red-400 rounded-full"></div>
        <span class="text-sm text-red-400">Out of Stock</span>
      `;
    }

    // Set images
    renderImages();

    // Set tags
    renderTags();

    // Set specifications
    renderSpecifications();

    // Update total price
    updateTotalPrice();
  }

  // Render product images
  function renderImages() {
    if (!product) return;

    const mainImage = div.querySelector("#mainImage") as HTMLImageElement;
    const thumbnailContainer = div.querySelector(
      "#thumbnailContainer"
    ) as HTMLElement;
    const imageCounter = div.querySelector("#imageCounter") as HTMLElement;

    const images =
      product.images && product.images.length > 0
        ? product.images
        : [product.thumbnail];

    mainImage.src = images[0];
    mainImage.alt = product.title;
    imageCounter.textContent = `1 / ${images.length}`;

    // Render thumbnails
    thumbnailContainer.innerHTML = images
      .map(
        (image, index) => `
      <button class="thumbnail-image flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-600 hover:border-[#1649A1] transition-all duration-300 ${
        index === 0 ? "active" : ""
      }" data-index="${index}">
        <img src="${image}" alt="${
          mainImage.alt
        }" class="w-full h-full object-cover">
      </button>
    `
      )
      .join("");

    // Add thumbnail click listeners
    thumbnailContainer
      .querySelectorAll(".thumbnail-image")
      .forEach((thumb, index) => {
        thumb.addEventListener("click", () => {
          currentImageIndex = index;
          updateMainImage();
        });
      });
  }

  // Update main image
  function updateMainImage() {
    if (!product) return;

    const images =
      product.images && product.images.length > 0
        ? product.images
        : [product.thumbnail];
    const mainImage = div.querySelector("#mainImage") as HTMLImageElement;
    const imageCounter = div.querySelector("#imageCounter") as HTMLElement;
    const thumbnails = div.querySelectorAll(".thumbnail-image");

    mainImage.src = images[currentImageIndex];
    imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;

    // Update active thumbnail
    thumbnails.forEach((thumb, index) => {
      thumb.classList.toggle("active", index === currentImageIndex);
    });
  }

  // Render rating stars
  function renderRating(rating: number) {
    const ratingStars = div.querySelector("#ratingStars") as HTMLElement;
    const ratingText = div.querySelector("#ratingText") as HTMLElement;

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHTML = "";

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      starsHTML +=
        '<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }

    // Half star
    if (hasHalfStar) {
      starsHTML +=
        '<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" opacity="0.5"/></svg>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      starsHTML +=
        '<svg class="w-4 h-4 text-gray-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }

    ratingStars.innerHTML = starsHTML;
    ratingText.textContent = `${rating} out of 5`;
  }

  // Render tags
  function renderTags() {
    if (!product) return;

    const productTags = div.querySelector(
      "#productTags .flex-wrap"
    ) as HTMLElement;

    if (product.tags && product.tags.length > 0) {
      productTags.innerHTML = product.tags
        .map(
          (tag) => `
        <span class="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600 hover:border-[#1649A1] transition-colors duration-300">
          ${tag}
        </span>
      `
        )
        .join("");
    } else {
      productTags.innerHTML =
        '<span class="text-gray-400 text-sm">No tags available</span>';
    }
  }

 function renderSpecifications() {
   if (!product) return;

   const specsList = document.querySelector("#specsList") as HTMLElement;
   const descriptionContent = document.querySelector(
     "#descriptionContent"
   ) as HTMLElement;
   const reviewsContent = document.querySelector(
     "#reviewsContent"
   ) as HTMLElement;

   // Show specs by default, hide others
   specsList.style.display = "block";
   descriptionContent.style.display = "none";
   reviewsContent.style.display = "none";

   const specs = [
     { label: "Brand", value: product.brand },
     { label: "Category", value: product.category },
     { label: "Stock", value: product.stock.toString() },
     { label: "Rating", value: `${product.rating}/5` },
     { label: "Discount", value: `${product.discountPercentage}%` },
   ];

   specsList.innerHTML = specs
     .map(
       (spec) => `
      <div class="flex justify-between py-3 border-b border-gray-700/50">
        <span class="text-gray-400 font-medium">${spec.label}:</span>
        <span class="text-white">${spec.value}</span>
      </div>
    `
     )
     .join("");

   // Tab switching functionality
   const tabs = {
     specifications: {
       button: document.querySelector("#specificationsTab") as HTMLElement,
       content: specsList,
     },
     description: {
       button: document.querySelector("#descriptionTab") as HTMLElement,
       content: descriptionContent,
     },
     reviews: {
       button: document.querySelector("#reviewsTab") as HTMLElement,
       content: reviewsContent,
     },
   };

   // Set active tab styles
   function setActiveTab(activeTab: keyof typeof tabs) {
     Object.entries(tabs).forEach(([key, tab]) => {
       if (key === activeTab) {
         tab.button.classList.add("border-[#1649A1]", "text-[#1649A1]");
         tab.button.classList.remove("border-transparent", "text-gray-400");
         tab.content.style.display = "block";
       } else {
         tab.button.classList.remove("border-[#1649A1]", "text-[#1649A1]");
         tab.button.classList.add("border-transparent", "text-gray-400");
         tab.content.style.display = "none";
       }
     });
   }

   // Event listeners for tabs
   tabs.specifications.button.addEventListener("click", () =>
     setActiveTab("specifications")
   );
   tabs.description.button.addEventListener("click", () =>
     setActiveTab("description")
   );
   tabs.reviews.button.addEventListener("click", () => setActiveTab("reviews"));

   // Initialize with specs tab active
   setActiveTab("specifications");
 }

  // Update total price
  function updateTotalPrice() {
    if (!product) return;

    const totalPrice = div.querySelector("#totalPrice") as HTMLElement;
    const discountedPrice =
      product.price * (1 - product.discountPercentage / 100);
    const total = discountedPrice * quantity;
    totalPrice.textContent = `$${total.toFixed(2)}`;
  }

  // Setup event listeners
  function setupEventListeners() {
    // Back button
    const backButton = div.querySelector("#backButton") as HTMLButtonElement;
    const backToShop = div.querySelector("#backToShop") as HTMLButtonElement;

    backButton?.addEventListener("click", () => {
      window.history.back();
    });

    backToShop?.addEventListener("click", () => {
      window.history.back();
    });

    // Image navigation
    const prevImage = div.querySelector("#prevImage") as HTMLButtonElement;
    const nextImage = div.querySelector("#nextImage") as HTMLButtonElement;

    prevImage?.addEventListener("click", () => {
      if (!product) return;
      const images =
        product.images && product.images.length > 0
          ? product.images
          : [product.thumbnail];
      currentImageIndex =
        (currentImageIndex - 1 + images.length) % images.length;
      updateMainImage();
    });

    nextImage?.addEventListener("click", () => {
      if (!product) return;
      const images =
        product.images && product.images.length > 0
          ? product.images
          : [product.thumbnail];
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateMainImage();
    });

    // Quantity controls
    const decreaseQty = div.querySelector("#decreaseQty") as HTMLButtonElement;
    const increaseQty = div.querySelector("#increaseQty") as HTMLButtonElement;
    const quantityInput = div.querySelector("#quantity") as HTMLInputElement;

    decreaseQty?.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityInput.value = quantity.toString();
        updateTotalPrice();
      }
    });

    increaseQty?.addEventListener("click", () => {
      if (product && quantity < product.stock) {
        quantity++;
        quantityInput.value = quantity.toString();
        updateTotalPrice();
      }
    });

    quantityInput?.addEventListener("change", () => {
      const newQuantity = parseInt(quantityInput.value);
      if (product && newQuantity >= 1 && newQuantity <= product.stock) {
        quantity = newQuantity;
        updateTotalPrice();
      } else {
        quantityInput.value = quantity.toString();
      }
    });

    // Action buttons
    const addToCart = div.querySelector("#addToCart") as HTMLButtonElement;
    const buyNow = div.querySelector("#buyNow") as HTMLButtonElement;
    const wishlist = div.querySelector("#wishlist") as HTMLButtonElement;

    addToCart?.addEventListener("click", () => {
      // Implement add to cart functionality
      console.log(`Added ${quantity} of ${product?.title} to cart`);

      // Visual feedback
      addToCart.innerHTML = `
        <span class="flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          Added to Cart
        </span>
      `;

      setTimeout(() => {
        addToCart.innerHTML = `
          <span class="flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H19"></path>
            </svg>
            Add to Cart
          </span>
        `;
      }, 2000);
    });

    buyNow?.addEventListener("click", () => {
      // Implement buy now functionality
      console.log(`Buy now: ${quantity} of ${product?.title}`);
      // Redirect to checkout or show checkout modal
    });

    wishlist?.addEventListener("click", () => {
      // Toggle wishlist
      const isActive = wishlist.classList.contains("active");
      if (isActive) {
        wishlist.classList.remove("active");
        wishlist.innerHTML = `
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        `;
      } else {
        wishlist.classList.add("active");
        wishlist.innerHTML = `
          <svg class="w-6 h-6" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        `;
      }
    });

    // Tab functionality
    const tabButtons = div.querySelectorAll(".tab-button");
    const tabContents = div.querySelectorAll(".tab-content");

    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const tabId = button.id.replace("Tab", "Content");

        // Remove active class from all tabs
        tabButtons.forEach((btn) => {
          btn.classList.remove("active");
          btn.classList.add("text-gray-400", "hover:text-white");
          btn.classList.remove("text-[#1649A1]", "border-[#1649A1]");
        });

        // Hide all tab contents
        tabContents.forEach((content) => {
          content.classList.add("hidden");
        });

        // Show selected tab
        button.classList.add("active");
        button.classList.remove("text-gray-400", "hover:text-white");
        button.classList.add("text-[#1649A1]");

        const targetContent = div.querySelector(`#${tabId}`);
        targetContent?.classList.remove("hidden");
      });
    });
  }

  // Initialize when element is added to DOM
  setTimeout(init, 100);

  return div;
}

// Helper function to create router integration
export function navigateToProduct(productId: string) {
  // This function can be called from your main router
  // to navigate to the product detail page
  const productDetail = renderProductDetail(productId);

  // Replace the current page content
  const mainContent = document.querySelector("#main-content") || document.body;
  mainContent.innerHTML = "";
  mainContent.appendChild(productDetail);

  // Update browser history
  window.history.pushState(
    { page: "product", productId },
    `Product ${productId}`,
    `/product/${productId}`
  );
}
