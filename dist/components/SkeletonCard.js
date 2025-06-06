"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showSkeletonLoader = showSkeletonLoader;
exports.hideSkeletonLoader = hideSkeletonLoader;
const DEFAULT_OPTIONS = {
    containerId: "productsGrid",
    count: 12,
};
function showSkeletonLoader(options) {
    const { containerId = "productsGrid", count } = Object.assign(Object.assign({}, DEFAULT_OPTIONS), options);
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID '${containerId}' not found`);
        return;
    }
    container.innerHTML = generateSkeletonItems((count !== null && count !== void 0 ? count : DEFAULT_OPTIONS.count));
}
function hideSkeletonLoader(containerId = "productsGrid") {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID '${containerId}' not found`);
        return;
    }
    container.innerHTML = "";
}
function generateSkeletonItems(count) {
    return Array(count)
        .fill(0)
        .map(() => `
      <div class="product-card flex flex-col justify-between dark:bg-gray-800/50 rounded-2xl overflow-hidden">
        <div class="relative overflow-hidden aspect-square bg-gray-200 dark:bg-gray-700/50 animate-pulse"></div>
        
        <div class="px-6 py-4 space-y-3">
          <div class="h-4 w-1/3 bg-gray-200 dark:bg-gray-700/50 rounded animate-pulse"></div>
          <div class="h-5 w-full bg-gray-200 dark:bg-gray-700/50 rounded animate-pulse"></div>
          <div class="h-4 w-full bg-gray-200 dark:bg-gray-700/50 rounded animate-pulse"></div>
          <div class="h-4 w-2/3 bg-gray-200 dark:bg-gray-700/50 rounded animate-pulse"></div>
          
          <div class="flex items-center justify-between pt-4">
            <div class="flex gap-2">
              <div class="h-6 w-16 bg-gray-200 dark:bg-gray-700/50 rounded animate-pulse"></div>
              <div class="h-6 w-12 bg-gray-200 dark:bg-gray-700/50 rounded animate-pulse"></div>
            </div>
            <div class="h-4 w-16 bg-gray-200 dark:bg-gray-700/50 rounded animate-pulse"></div>
          </div>
          
          <div class="h-10 w-full mt-4 bg-gray-200 dark:bg-gray-700/50 rounded-lg animate-pulse"></div>
        </div>
      </div>
    `)
        .join("");
}
