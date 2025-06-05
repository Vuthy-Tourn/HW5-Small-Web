import { Product } from "../types/Type";

export default function createProductCard(product: Product): string {
  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return `
    <div class="product-card flex flex-col justify-between dark:bg-gray-800/50 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)]
          hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:shadow-[#1649A1]/20 transition-all duration-500 group hover:border-[#1649A1]/20 cursor-pointer"
          data-product-id="${product.id}">
          <a href="/product/${
            product.id
          }" data-link class="flex flex-col justify-between">
      <div class="relative overflow-hidden aspect-square">
        <img 
          src="${product.thumbnail}" 
          alt="${product.title}"
          class="product-image w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        >
        <div class="absolute top-4 left-4">
          ${
            product.discountPercentage > 0
              ? `
            <span class="px-3 py-1 bg-[#F35F25] text-white text-sm font-bold rounded-full">
              -${Math.round(product.discountPercentage)}%
            </span>
          `
              : ""
          }
        </div>
        <div class="absolute top-4 right-4">
          <div class="flex items-center gap-1 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full">
            <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-white text-sm font-medium">${
              product.rating
            }</span>
          </div>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div class="px-6 py-4">
        <div class="mb-2">
          <span class="text-xs text-[#F35F25] font-medium uppercase tracking-wide">${
            product.brand
          || ""}</span>
        </div>
        
        
          <h3 class="text-[#1649A1] font-bold text-lg mb-2 line-clamp-2 group-hover:text-[#1649A1] transition-colors duration-300">
            ${product.title}
          </h3>

        
        <p class="text-gray-400 text-sm mb-4 line-clamp-2">
          ${product.description}
        </p>
        
        <div class="flex items-center justify-between py-2">
          <div class="flex items-center gap-2 justify-center">
            ${
              product.discountPercentage > 0
                ? `
              <span class="text-2xl font-bold text-[#F35F25]">$${discountedPrice.toFixed(
                0
              )}</span>
              <span class="text-lg text-gray-500 line-through">$${
                product.price
              }</span>
            `
                : `
              <span class="text-2xl font-bold text-[#F35F25]">$${product.price}</span>
            `
            }
          </div>
          <div class="mt-3 text-sm text-gray-400 flex justify-between items-center">
            ${
              product.stock > 0
                ? `
              <span class="text-green-400">✓ In Stock </span>
            `
                : `
              <span class="text-red-400">✗ Out of Stock</span>
            `
            }
          </div>
        </div>
        <button class="w-full py-3 bg-[#1649A1] text-white font-medium rounded-lg hover:bg-[#162ba1] transition-colors flex items-center justify-center gap-2 relative z-10" ${
          product.stock === 0 ? "disabled" : ""
        }>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          Add to Cart
        </button>
      </div>
              </a>
    </div>
  `;
}
