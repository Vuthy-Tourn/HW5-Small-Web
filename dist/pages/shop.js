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
exports.renderShop = renderShop;
const ProductCard_1 = __importDefault(require("../components/ProductCard"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const SkeletonCard_1 = require("../components/SkeletonCard");
function renderShop() {
    const div = document.createElement("div");
    let allProducts = [];
    let filteredProducts = [];
    let categories = [];
    let currentPage = 1;
    const productsPerPage = 12;
    let isLoading = false;
    div.innerHTML = `
    <div class="min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <!-- Hero Section -->
      <section class="relative overflow-hidden py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div class="absolute inset-0 opacity-20">
          <div class="absolute inset-0" style="background-image: url('https://grainy-gradients.vercel.app/noise.svg')"></div>
        </div>
        
        <div class="max-w-7xl mx-auto relative z-10">
          <div class="text-center mb-12">
            <span class="inline-block px-4 py-2 text-sm font-medium text-[#F35F25] bg-[#1649A1]/20 rounded-full backdrop-blur-sm mb-4">
              Premium Collection
            </span>
            <h1 class="text-4xl sm:text-5xl font-bold text-white mb-4">
              Shop <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#1649A1] to-[#F35F25]">You&Me</span>
            </h1>
            <p class="text-lg text-gray-300/90 max-w-2xl mx-auto">
              Discover our curated collection of premium products with unbeatable prices and quality.
            </p>
          </div>
          
          <!-- Search and Filter Section -->
          <div class="bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 p-6 mb-8">
            <div class="flex flex-col lg:flex-row gap-4">
              <!-- Search Bar -->
              <div class="flex-1">
                <div class="relative">
                  <input 
                    type="text" 
                    id="searchInput"
                    placeholder="Search products..." 
                    class="w-full px-4 py-3 pl-12 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1649A1] focus:border-transparent transition-all duration-300"
                  >
                  <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              
              <!-- Category Filter -->
              <div class="lg:w-64">
                <select 
                  id="categoryFilter"
                  class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#1649A1] focus:border-transparent transition-all duration-300"
                >
                  <option value="">All Categories</option>
                </select>
              </div>
              
              <!-- Price Range -->
              <div class="lg:w-48">
                <select 
                  id="priceFilter"
                  class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#1649A1] focus:border-transparent transition-all duration-300"
                >
                  <option value="">All Prices</option>
                  <option value="0-50">Under $50</option>
                  <option value="50-100">$50 - $100</option>
                  <option value="100-500">$100 - $500</option>
                  <option value="500+">$500+</option>
                </select>
              </div>
              
              <!-- Sort By -->
              <div class="lg:w-48">
                <select 
                  id="sortFilter"
                  class="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#1649A1] focus:border-transparent transition-all duration-300"
                >
                  <option value="default">Sort By</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>
            
            <!-- Active Filters -->
            <div id="activeFilters" class="mt-4 flex flex-wrap gap-2">
              <span class="text-sm text-gray-300 mr-2">Active filters:</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Products Section -->
      <section class="py-8 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto gap-3">
          <!-- Products Grid -->
          <div id="productsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <!-- Skeleton loading cards will be inserted here -->
          </div>
          
          <!-- No Results -->
          <div id="noResults" class="text-center py-20 hidden">
            <div class="text-6xl mb-4">🔍</div>
            <h3 class="text-2xl font-bold text-white mb-2">No Products Found</h3>
            <p class="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
          
          <!-- Pagination -->
          <div id="pagination" class="flex justify-center items-center gap-2 mt-12">
            <button id="prevPage" class="px-4 py-2 bg-gray-700/50 text-white rounded-lg hover:bg-[#1649A1] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              Previous
            </button>
            <div id="pageNumbers" class="flex gap-1">
            </div>
            <button id="nextPage" class="px-4 py-2 bg-gray-700/50 text-white rounded-lg hover:bg-[#1649A1] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  `;
    function init() {
        return __awaiter(this, void 0, void 0, function* () {
            (0, SkeletonCard_1.showSkeletonLoader)();
            yield loadProducts();
            setupEventListeners();
        });
    }
    function loadProducts(searchQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                isLoading = true;
                (0, SkeletonCard_1.showSkeletonLoader)();
                const limit = 200;
                const baseUrl = process.env.BASE_URL;
                let url = `${baseUrl}/?limit=${limit}`;
                if (searchQuery && searchQuery.trim()) {
                    url = `${baseUrl}/search?q=${encodeURIComponent(searchQuery)}&limit${limit}`;
                }
                const response = yield fetch(url);
                const data = yield response.json();
                if (searchQuery && searchQuery.trim()) {
                    filteredProducts = data.products;
                }
                else {
                    allProducts = data.products;
                    filteredProducts = [...allProducts];
                    categories = [...new Set(allProducts.map((p) => p.category))].sort();
                    populateCategories();
                }
                renderProducts();
                setupPagination();
            }
            catch (error) {
                console.error("Error loading products:", error);
                showError();
            }
            finally {
                isLoading = false;
            }
        });
    }
    function populateCategories() {
        const categorySelect = div.querySelector("#categoryFilter");
        categories.forEach((category) => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categorySelect.appendChild(option);
        });
    }
    function setupEventListeners() {
        const searchInput = div.querySelector("#searchInput");
        const categoryFilter = div.querySelector("#categoryFilter");
        const priceFilter = div.querySelector("#priceFilter");
        const sortFilter = div.querySelector("#sortFilter");
        let searchTimeout;
        searchInput.addEventListener("input", () => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    yield loadProducts(searchTerm);
                    categoryFilter.value = "";
                    priceFilter.value = "";
                    sortFilter.value = "default";
                }
                else {
                    yield loadProducts();
                }
                currentPage = 1;
                applyLocalFilters();
            }), 1000);
        });
        categoryFilter.addEventListener("change", applyLocalFilters);
        priceFilter.addEventListener("change", applyLocalFilters);
        sortFilter.addEventListener("change", applyLocalFilters);
        const prevButton = div.querySelector("#prevPage");
        const nextButton = div.querySelector("#nextPage");
        prevButton.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                renderProducts();
                setupPagination();
                scrollToTop();
            }
        });
        nextButton.addEventListener("click", () => {
            const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderProducts();
                setupPagination();
                scrollToTop();
            }
        });
    }
    function applyLocalFilters() {
        const selectedCategory = div.querySelector("#categoryFilter").value;
        const selectedPriceRange = div.querySelector("#priceFilter").value;
        const selectedSort = div.querySelector("#sortFilter")
            .value;
        const searchTerm = div.querySelector("#searchInput").value.trim();
        let baseProducts = searchTerm ? filteredProducts : allProducts;
        let filtered = [...baseProducts];
        if (selectedCategory) {
            filtered = filtered.filter((product) => product.category === selectedCategory);
        }
        if (selectedPriceRange) {
            const [min, max] = selectedPriceRange
                .split("-")
                .map((p) => p.replace("+", ""));
            filtered = filtered.filter((product) => {
                if (selectedPriceRange === "500+") {
                    return product.price >= 500;
                }
                return product.price >= parseInt(min) && product.price <= parseInt(max);
            });
        }
        switch (selectedSort) {
            case "price-low":
                filtered.sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                filtered.sort((a, b) => b.price - a.price);
                break;
            case "rating":
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            case "name":
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
        }
        filteredProducts = filtered;
        currentPage = 1;
        renderProducts();
        setupPagination();
        updateActiveFilters();
    }
    function updateActiveFilters() {
        const activeFiltersDiv = div.querySelector("#activeFilters");
        const searchTerm = div.querySelector("#searchInput")
            .value;
        const selectedCategory = div.querySelector("#categoryFilter").value;
        const selectedPriceRange = div.querySelector("#priceFilter").value;
        const filters = [];
        if (searchTerm)
            filters.push(`Search: "${searchTerm}"`);
        if (selectedCategory)
            filters.push(`Category: ${selectedCategory}`);
        if (selectedPriceRange)
            filters.push(`Price: ${selectedPriceRange}`);
        if (filters.length > 0) {
            activeFiltersDiv.innerHTML = `
        <span class="text-sm text-gray-300 mr-2">Active filters:</span>
        ${filters
                .map((filter) => `
          <span class="filter-tag inline-block px-3 py-1 bg-[#1649A1]/30 text-[#F35F25] text-sm rounded-full border border-[#1649A1]/50">
            ${filter}
          </span>
        `)
                .join("")}
      `;
            activeFiltersDiv.classList.remove("hidden");
        }
        else {
            activeFiltersDiv.classList.add("hidden");
        }
    }
    function renderProducts() {
        const grid = div.querySelector("#productsGrid");
        const noResults = div.querySelector("#noResults");
        if (filteredProducts.length === 0) {
            grid.classList.add("hidden");
            noResults.classList.remove("hidden");
            return;
        }
        noResults.classList.add("hidden");
        grid.classList.remove("hidden");
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const productsToShow = filteredProducts.slice(startIndex, endIndex);
        grid.innerHTML = productsToShow
            .map((product) => (0, ProductCard_1.default)(product))
            .join("");
    }
    function setupPagination() {
        const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
        const pagination = div.querySelector("#pagination");
        const prevButton = div.querySelector("#prevPage");
        const nextButton = div.querySelector("#nextPage");
        const pageNumbers = div.querySelector("#pageNumbers");
        if (totalPages <= 1) {
            pagination.classList.add("hidden");
            return;
        }
        pagination.classList.remove("hidden");
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;
        pageNumbers.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 ||
                i === totalPages ||
                (i >= currentPage - 2 && i <= currentPage + 2)) {
                const button = document.createElement("button");
                button.textContent = i.toString();
                button.className = `px-3 py-2 rounded-lg transition-all duration-300 ${i === currentPage
                    ? "bg-[#1649A1] text-white"
                    : "bg-gray-700/50 text-white hover:bg-[#1649A1]"}`;
                button.addEventListener("click", () => {
                    currentPage = i;
                    renderProducts();
                    setupPagination();
                    scrollToTop();
                });
                pageNumbers.appendChild(button);
            }
            else if (i === currentPage - 3 || i === currentPage + 3) {
                const ellipsis = document.createElement("span");
                ellipsis.textContent = "...";
                ellipsis.className = "px-2 py-2 text-gray-400";
                pageNumbers.appendChild(ellipsis);
            }
        }
    }
    function showError() {
        const grid = div.querySelector("#productsGrid");
        grid.innerHTML = `
      <div class="col-span-full text-center py-20">
        <div class="text-6xl mb-4">⚠️</div>
        <h3 class="text-2xl font-bold text-white mb-2">Error Loading Products</h3>
        <p class="text-gray-400">Please try again later</p>
      </div>
    `;
        grid.classList.remove("hidden");
    }
    function scrollToTop() {
        var _a;
        (_a = div.querySelector("#productsGrid")) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(init, 100);
    return div;
}
