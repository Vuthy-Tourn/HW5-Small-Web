type SkeletonOptions = {
  containerId?: string;
  count?: number;
};

const DEFAULT_OPTIONS: SkeletonOptions = {
  containerId: "productsGrid",
  count: 12,
};

/**
 * Displays skeleton loader items in the specified container.
 * @param options - Configuration options for the skeleton loader.
 */
export function showSkeletonLoader(options?: SkeletonOptions): void {
  const { containerId = "productsGrid", count } = { ...DEFAULT_OPTIONS, ...options };
  const container = document.getElementById(containerId);

  if (!container) {
    console.error(`Container with ID '${containerId}' not found`);
    return;
  }

  container.innerHTML = generateSkeletonItems((count ?? DEFAULT_OPTIONS.count) as number);
}

/**
 * Hides skeleton loader items from the specified container.
 * @param containerId - The ID of the container to clear skeleton loaders from.
 */
export function hideSkeletonLoader(containerId: string = "productsGrid"): void {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Container with ID '${containerId}' not found`);
    return;
  }

  container.innerHTML = "";
}

/**
 * Generates skeleton loader items as HTML strings.
 * @param count - The number of skeleton items to generate.
 * @returns A string containing the skeleton loader items.
 */
function generateSkeletonItems(count: number): string {
  return Array(count)
    .fill(0)
    .map(
      () => `
      <div class="product-card flex flex-col justify-between dark:bg-gray-800/50 rounded-2xl overflow-hidden" data-aos="fade-up">
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
    `
    )
    .join("");
}
