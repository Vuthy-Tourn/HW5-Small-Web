"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderProductDetail = renderProductDetail;
exports.navigateToProduct = navigateToProduct;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function renderProductDetail(productId) {
    const div = document.createElement("div");
    let product = null;
    let currentImageIndex = 0;
    let quantity = 1;
    div.innerHTML = `
    <div class="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-20">
      <!-- Loading Spinner -->
      <div id="loadingSpinner" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 dark:border-[#1649A1] border-t-transparent"></div>
      </div>

      <!-- Product Detail Content -->
      <div id="productContent" class="hidden">
        <!-- Navigation Bar -->
        <nav class="bg-gray-100 dark:bg-gray-800/50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700/50">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <button id="backButton" class="flex items-center text-gray-700 dark:text-white hover:text-orange-500 dark:hover:text-[#F35F25] transition-colors duration-300">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back to Shop
              </button>
              
              <div class="text-gray-800 dark:text-white font-semibold">
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500 dark:from-[#1649A1] dark:to-[#F35F25]">You&Me</span>
              </div>
            </div>
          </div>
        </nav>

        <!-- Breadcrumb -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav class="text-sm">
            <ol class="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
              <li><a href="#" class="hover:text-gray-700 dark:hover:text-white transition-colors">Home</a></li>
              <li><span class="mx-2">/</span></li>
              <li><a href="#" class="hover:text-gray-700 dark:hover:text-white transition-colors">Shop</a></li>
              <li><span class="mx-2">/</span></li>
              <li id="productCategory" class="hover:text-gray-700 dark:hover:text-white transition-colors cursor-pointer"></li>
              <li><span class="mx-2">/</span></li>
              <li id="productTitle" class="text-gray-800 dark:text-white font-medium truncate max-w-xs"></li>
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
                <div class="aspect-square bg-gray-100 dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50">
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
                  <span id="brandName" class="text-sm font-medium text-orange-500 dark:text-[#F35F25] bg-blue-100 dark:bg-[#1649A1]/20 px-3 py-1 rounded-full"></span>
                  <div class="flex items-center">
                    <div id="ratingStars" class="flex items-center"></div>
                    <span id="ratingText" class="ml-2 text-sm text-gray-500 dark:text-gray-400"></span>
                  </div>
                </div>
                <h1 id="productName" class="text-3xl font-bold text-gray-800 dark:text-white mb-4"></h1>
                <p id="productDescription" class="text-gray-600 dark:text-gray-300 leading-relaxed"></p>
              </div>

              <!-- Price Section -->
              <div class="border-t border-gray-200 dark:border-gray-700/50 pt-6">
                <div class="flex items-center gap-4 mb-4">
                  <span id="currentPrice" class="text-3xl font-bold text-gray-800 dark:text-white"></span>
                  <span id="originalPrice" class="text-xl text-gray-500 dark:text-gray-400 line-through"></span>
                  <span id="discountBadge" class="bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium"></span>
                </div>
                
                <!-- Stock Status -->
                <div id="stockStatus" class="flex items-center gap-2 mb-6">
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span class="text-sm text-green-600 dark:text-green-400">In Stock</span>
                  <span id="stockCount" class="text-sm text-gray-500 dark:text-gray-400"></span>
                </div>
              </div>

              <!-- Quantity and Add to Cart -->
              <div class="border-t border-gray-200 dark:border-gray-700/50 pt-6">
                <div class="flex items-center gap-4 mb-6">
                  <div class="flex items-center border border-gray-300 dark:border-gray-600 rounded-xl overflow-hidden">
                    <button id="decreaseQty" class="px-4 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700/50 dark:hover:bg-gray-600 text-gray-800 dark:text-white transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                      </svg>
                    </button>
                    <input 
                      id="quantity" 
                      type="number" 
                      value="1" 
                      min="1" 
                      class="w-16 py-3 text-center bg-white dark:bg-gray-700/50 text-gray-800 dark:text-white border-0 focus:outline-none focus:ring-0"
                    >
                    <button id="increaseQty" class="px-4 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700/50 dark:hover:bg-gray-600 text-gray-800 dark:text-white transition-colors">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                      </svg>
                    </button>
                  </div>
                  
                  <div class="text-sm text-gray-500 dark:text-gray-400">
                    Total: <span id="totalPrice" class="text-gray-800 dark:text-white font-semibold">$0.00</span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-4">
                  <button id="addToCart" class="flex-1 bg-gradient-to-r from-blue-600 to-blue-500/80 dark:from-[#1649A1] dark:to-[#1649A1]/80 text-white py-4 px-8 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600/70 dark:hover:from-[#1649A1]/90 dark:hover:to-[#1649A1]/70 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/20 dark:shadow-[#1649A1]/20">
                    <span class="flex items-center justify-center gap-2">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5H19"></path>
                      </svg>
                      Add to Cart
                    </span>
                  </button>
                  
                  <button id="buyNow" class="flex-1 bg-gradient-to-r from-orange-500 to-orange-400/80 dark:from-[#F35F25] dark:to-[#F35F25]/80 text-white py-4 px-8 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500/70 dark:hover:from-[#F35F25]/90 dark:hover:to-[#F35F25]/70 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/20 dark:shadow-[#F35F25]/20">
                    Buy Now
                  </button>
                  
                  <button id="wishlist" class="p-4 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-[#F35F25] hover:border-orange-500 dark:hover:border-[#F35F25] transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Product Tags -->
              <div id="productTags" class="border-t border-gray-200 dark:border-gray-700/50 pt-6">
                <h3 class="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Tags:</h3>
                <div class="flex flex-wrap gap-2">
                  <!-- Tags will be inserted here -->
                </div>
              </div>
            </div>
          </div>

          <!-- Product Tabs -->
          <div class="mt-16">
            <div class="border-b border-gray-200 dark:border-gray-700/50">
              <nav class="flex space-x-8">
                <button id="specificationsTab" class="tab-button py-4 px-1 border-b-2 border-blue-600 dark:border-[#1649A1] text-blue-600 dark:text-[#1649A1] font-medium text-sm">
                  Specifications
                </button>
                <button id="descriptionTab" class="tab-button py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white font-medium text-sm">
                  Description
                </button>
                <button id="reviewsTab" class="tab-button py-4 px-1 border-b-2 border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white font-medium text-sm">
                  Reviews <span id="reviewCount" class="ml-1"></span>
                </button>
              </nav>
            </div>

            <!-- Tab Content -->
            <div class="py-8">
              <!-- Specifications Tab -->
              <div id="specificationsContent" class="tab-content">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div id="specsList" class="space-y-4">
                    <!-- Specifications will be inserted here -->
                  </div>
                </div>
              </div>
              
              <!-- Description Tab -->
              <div id="descriptionContent" class="tab-content hidden">
                <div class="prose max-w-none">
                  <p id="fullDescription" class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"></p>
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
        <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Product Not Found</h3>
        <p class="text-gray-500 dark:text-gray-400 mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <button id="backToShop" class="bg-gradient-to-r from-blue-600 to-blue-500/80 dark:from-[#1649A1] dark:to-[#1649A1]/80 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600/70 dark:hover:from-[#1649A1]/90 dark:hover:to-[#1649A1]/70 transition-all duration-300">
          Back to Shop
        </button>
      </div>
    </div>

    <style>
      .tab-button.active {
        color: #2563eb;
        border-color: #2563eb;
      }
      
      .tab-button:hover:not(.active) {
        color: #1e40af;
        border-color: #d1d5db;
      }
      
      .dark .tab-button.active {
        color: #1649A1;
        border-color: #1649A1;
      }
      
      .dark .tab-button:hover:not(.active) {
        color: white;
        border-color: #374151;
      }
      
      .thumbnail-image {
        transition: all 0.3s ease;
      }
      
      .thumbnail-image.active {
        border: 2px solid #2563eb;
        box-shadow: 0 0 10px rgba(37, 99, 235, 0.3);
      }
      
      .dark .thumbnail-image.active {
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
    function init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield loadProduct();
            setupEventListeners();
        });
    }
    function loadProduct() {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            try {
                const baseUrl = process.env.BASE_URL;
                const response = yield fetch(`${baseUrl}/${productId}`);
                if (!response.ok) {
                    throw new Error("Product not found");
                }
                product = yield response.json();
                renderProduct();
                (_a = div.querySelector("#loadingSpinner")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                (_b = div.querySelector("#productContent")) === null || _b === void 0 ? void 0 : _b.classList.remove("hidden");
            }
            catch (error) {
                console.error("Error loading product:", error);
                (_c = div.querySelector("#loadingSpinner")) === null || _c === void 0 ? void 0 : _c.classList.add("hidden");
                (_d = div.querySelector("#errorContent")) === null || _d === void 0 ? void 0 : _d.classList.remove("hidden");
            }
        });
    }
    function renderProduct() {
        if (!product)
            return;
        const productName = div.querySelector("#productName");
        const productDescription = div.querySelector("#productDescription");
        const brandName = div.querySelector("#brandName");
        const productCategory = div.querySelector("#productCategory");
        const productTitle = div.querySelector("#productTitle");
        productName.textContent = product.title;
        productDescription.textContent = product.description;
        brandName.textContent = product.brand;
        productCategory.textContent =
            product.category.charAt(0).toUpperCase() + product.category.slice(1);
        productTitle.textContent = product.title;
        const currentPrice = div.querySelector("#currentPrice");
        const originalPrice = div.querySelector("#originalPrice");
        const discountBadge = div.querySelector("#discountBadge");
        const discountedPrice = product.price * (1 - product.discountPercentage / 100);
        currentPrice.textContent = `$${discountedPrice.toFixed(2)}`;
        originalPrice.textContent = `$${product.price.toFixed(2)}`;
        discountBadge.textContent = `-${product.discountPercentage}%`;
        renderRating(product.rating);
        const stockCount = div.querySelector("#stockCount");
        const stockStatus = div.querySelector("#stockStatus");
        stockCount.textContent = `(${product.stock} available)`;
        if (product.stock === 0) {
            stockStatus.innerHTML = `
        <div class="w-2 h-2 bg-red-400 rounded-full"></div>
        <span class="text-sm text-red-600 dark:text-red-400">Out of Stock</span>
      `;
        }
        renderImages();
        renderTags();
        renderSpecifications();
        updateTotalPrice();
    }
    function renderImages() {
        if (!product)
            return;
        const mainImage = div.querySelector("#mainImage");
        const thumbnailContainer = div.querySelector("#thumbnailContainer");
        const imageCounter = div.querySelector("#imageCounter");
        const images = product.images && product.images.length > 0
            ? product.images
            : [product.thumbnail];
        mainImage.src = images[0];
        mainImage.alt = product.title;
        imageCounter.textContent = `1 / ${images.length}`;
        thumbnailContainer.innerHTML = images
            .map((image, index) => `
      <button class="thumbnail-image flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-[#1649A1] transition-all duration-300 ${index === 0 ? "active" : ""}" data-index="${index}">
        <img src="${image}" alt="${mainImage.alt}" class="w-full h-full object-cover">
      </button>
    `)
            .join("");
        thumbnailContainer
            .querySelectorAll(".thumbnail-image")
            .forEach((thumb, index) => {
            thumb.addEventListener("click", () => {
                currentImageIndex = index;
                updateMainImage();
            });
        });
    }
    function updateMainImage() {
        if (!product)
            return;
        const images = product.images && product.images.length > 0
            ? product.images
            : [product.thumbnail];
        const mainImage = div.querySelector("#mainImage");
        const imageCounter = div.querySelector("#imageCounter");
        const thumbnails = div.querySelectorAll(".thumbnail-image");
        mainImage.src = images[currentImageIndex];
        imageCounter.textContent = `${currentImageIndex + 1} / ${images.length}`;
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle("active", index === currentImageIndex);
        });
    }
    function renderRating(rating) {
        const ratingStars = div.querySelector("#ratingStars");
        const ratingText = div.querySelector("#ratingText");
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        let starsHTML = "";
        for (let i = 0; i < fullStars; i++) {
            starsHTML +=
                '<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
        }
        if (hasHalfStar) {
            starsHTML +=
                '<svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" opacity="0.5"/></svg>';
        }
        for (let i = 0; i < emptyStars; i++) {
            starsHTML +=
                '<svg class="w-4 h-4 text-gray-300 dark:text-gray-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
        }
        ratingStars.innerHTML = starsHTML;
        ratingText.textContent = `${rating} out of 5`;
    }
    function renderTags() {
        if (!product)
            return;
        const productTags = div.querySelector("#productTags .flex-wrap");
        if (product.tags && product.tags.length > 0) {
            productTags.innerHTML = product.tags
                .map((tag) => `
        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-[#1649A1] transition-colors duration-300">
          ${tag}
        </span>
      `)
                .join("");
        }
        else {
            productTags.innerHTML =
                '<span class="text-gray-400 text-sm">No tags available</span>';
        }
    }
    function renderSpecifications() {
        if (!product)
            return;
        const specsList = div.querySelector("#specsList");
        const descriptionContent = div.querySelector("#descriptionContent");
        const reviewsContent = div.querySelector("#reviewsContent");
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
            .map((spec) => `
      <div class="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700/50">
        <span class="text-gray-500 dark:text-gray-400 font-medium">${spec.label}:</span>
        <span class="text-gray-800 dark:text-white">${spec.value}</span>
      </div>
    `)
            .join("");
        const tabs = {
            specifications: {
                button: div.querySelector("#specificationsTab"),
                content: specsList,
            },
            description: {
                button: div.querySelector("#descriptionTab"),
                content: descriptionContent,
            },
            reviews: {
                button: div.querySelector("#reviewsTab"),
                content: reviewsContent,
            },
        };
        function setActiveTab(activeTab) {
            Object.entries(tabs).forEach(([key, tab]) => {
                if (key === activeTab) {
                    tab.button.classList.add("border-blue-600", "text-blue-600", "dark:border-[#1649A1]", "dark:text-[#1649A1]");
                    tab.button.classList.remove("border-transparent", "text-gray-500", "dark:text-gray-400");
                    tab.content.style.display = "block";
                }
                else {
                    tab.button.classList.remove("border-blue-600", "text-blue-600", "dark:border-[#1649A1]", "dark:text-[#1649A1]");
                    tab.button.classList.add("border-transparent", "text-gray-500", "dark:text-gray-400");
                    tab.content.style.display = "none";
                }
            });
        }
        tabs.specifications.button.addEventListener("click", () => setActiveTab("specifications"));
        tabs.description.button.addEventListener("click", () => setActiveTab("description"));
        tabs.reviews.button.addEventListener("click", () => setActiveTab("reviews"));
        setActiveTab("specifications");
    }
    function updateTotalPrice() {
        if (!product)
            return;
        const totalPrice = div.querySelector("#totalPrice");
        const discountedPrice = product.price * (1 - product.discountPercentage / 100);
        const total = discountedPrice * quantity;
        totalPrice.textContent = `$${total.toFixed(2)}`;
    }
    function setupEventListeners() {
        const backButton = div.querySelector("#backButton");
        const backToShop = div.querySelector("#backToShop");
        backButton === null || backButton === void 0 ? void 0 : backButton.addEventListener("click", () => {
            window.history.back();
        });
        backToShop === null || backToShop === void 0 ? void 0 : backToShop.addEventListener("click", () => {
            window.history.back();
        });
        const prevImage = div.querySelector("#prevImage");
        const nextImage = div.querySelector("#nextImage");
        prevImage === null || prevImage === void 0 ? void 0 : prevImage.addEventListener("click", () => {
            if (!product)
                return;
            const images = product.images && product.images.length > 0
                ? product.images
                : [product.thumbnail];
            currentImageIndex =
                (currentImageIndex - 1 + images.length) % images.length;
            updateMainImage();
        });
        nextImage === null || nextImage === void 0 ? void 0 : nextImage.addEventListener("click", () => {
            if (!product)
                return;
            const images = product.images && product.images.length > 0
                ? product.images
                : [product.thumbnail];
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateMainImage();
        });
        const decreaseQty = div.querySelector("#decreaseQty");
        const increaseQty = div.querySelector("#increaseQty");
        const quantityInput = div.querySelector("#quantity");
        decreaseQty === null || decreaseQty === void 0 ? void 0 : decreaseQty.addEventListener("click", () => {
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity.toString();
                updateTotalPrice();
            }
        });
        increaseQty === null || increaseQty === void 0 ? void 0 : increaseQty.addEventListener("click", () => {
            if (product && quantity < product.stock) {
                quantity++;
                quantityInput.value = quantity.toString();
                updateTotalPrice();
            }
        });
        quantityInput === null || quantityInput === void 0 ? void 0 : quantityInput.addEventListener("change", () => {
            const newQuantity = parseInt(quantityInput.value);
            if (product && newQuantity >= 1 && newQuantity <= product.stock) {
                quantity = newQuantity;
                updateTotalPrice();
            }
            else {
                quantityInput.value = quantity.toString();
            }
        });
        const addToCart = div.querySelector("#addToCart");
        const buyNow = div.querySelector("#buyNow");
        const wishlist = div.querySelector("#wishlist");
        addToCart === null || addToCart === void 0 ? void 0 : addToCart.addEventListener("click", () => {
            console.log(`Added ${quantity} of ${product === null || product === void 0 ? void 0 : product.title} to cart`);
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
        buyNow === null || buyNow === void 0 ? void 0 : buyNow.addEventListener("click", () => {
            console.log(`Buy now: ${quantity} of ${product === null || product === void 0 ? void 0 : product.title}`);
        });
        wishlist === null || wishlist === void 0 ? void 0 : wishlist.addEventListener("click", () => {
            const isActive = wishlist.classList.contains("active");
            if (isActive) {
                wishlist.classList.remove("active");
                wishlist.innerHTML = `
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        `;
            }
            else {
                wishlist.classList.add("active");
                wishlist.innerHTML = `
          <svg class="w-6 h-6" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        `;
            }
        });
        const tabButtons = div.querySelectorAll(".tab-button");
        const tabContents = div.querySelectorAll(".tab-content");
        tabButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const tabId = button.id.replace("Tab", "Content");
                tabButtons.forEach((btn) => {
                    btn.classList.remove("active");
                    btn.classList.add("text-gray-500", "dark:text-gray-400", "hover:text-gray-700", "dark:hover:text-white");
                    btn.classList.remove("text-blue-600", "dark:text-[#1649A1]", "border-blue-600", "dark:border-[#1649A1]");
                });
                tabContents.forEach((content) => {
                    content.classList.add("hidden");
                });
                button.classList.add("active");
                button.classList.remove("text-gray-500", "dark:text-gray-400", "hover:text-gray-700", "dark:hover:text-white");
                button.classList.add("text-blue-600", "dark:text-[#1649A1]", "border-blue-600", "dark:border-[#1649A1]");
                const targetContent = div.querySelector(`#${tabId}`);
                targetContent === null || targetContent === void 0 ? void 0 : targetContent.classList.remove("hidden");
            });
        });
    }
    setTimeout(init, 100);
    return div;
}
function navigateToProduct(productId) {
    const productDetail = renderProductDetail(productId);
    const mainContent = document.querySelector("#main-content") || document.body;
    mainContent.innerHTML = "";
    mainContent.appendChild(productDetail);
    window.history.pushState({ page: "product", productId }, `Product ${productId}`, `/product/${productId}`);
}
