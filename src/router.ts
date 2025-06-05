// router.ts - Combined router implementation
import { createLayout } from "./layout";
import { renderHome } from "./pages/home";
import { renderShop } from "./pages/shop";
import { renderProductDetail } from "./pages/productDetail";
import { renderAbout } from "./pages/about";
// import { renderContact } from "./pages/contact";
// import { renderService } from "./pages/service";
// import { renderNotFound } from "./pages/notFound";

let container: HTMLElement;

export function initRouter(containerId: string = "app"): void {
  container = document.getElementById(containerId) || document.body;

  // Handle browser back/forward buttons
  window.addEventListener("popstate", () => {
    handleRoute(window.location.pathname, false);
  });

  // Handle link clicks
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest("a[data-link]") as HTMLAnchorElement;

    if (anchor) {
      e.preventDefault();
      navigate(anchor.getAttribute("href")!);
    }
  });

  // Handle initial page load
  handleRoute(window.location.pathname, false);
}

export function navigate(path: string, updateHistory: boolean = true): void {
  handleRoute(path, updateHistory);
}

function handleRoute(path: string, updateHistory: boolean = true): void {
  // Clear current content
  container.innerHTML = "";

  // Route matching
  let contentFn: () => HTMLElement;

  switch (path) {
    case "/":
      contentFn = renderHome;
      break;
    case "/shop":
      contentFn = () => {
        const shopPage = renderShop();
        // Add product click listeners after shop renders
        setTimeout(() => addProductClickListeners(), 0);
        return shopPage;
      };
      break;
    case "/about":
      contentFn = renderAbout;
      break;
    default:
      if (/^\/product\/\w+$/.test(path)) {
        // Regex for product detail paths
        const productId = path.split("/")[2];
        contentFn = () => renderProductDetail(productId);
      } else {
        contentFn = render404; // Changed from renderNotFound to render404
      }
      break;
  }

  // Render the layout with the appropriate content
  createLayout(contentFn);

  // Update browser history
  if (updateHistory) {
    window.history.pushState({ path }, "", path);
  }
}

function render404(): HTMLElement {
  const notFound = document.createElement("div");
  notFound.className =
    "min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center";
  notFound.innerHTML = `
    <div class="text-center">
      <div class="text-6xl mb-4">🔍</div>
      <h1 class="text-4xl font-bold text-white mb-4">Page Not Found</h1>
      <p class="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
      <button id="backToHome" class="bg-gradient-to-r from-[#1649A1] to-[#1649A1]/80 text-white py-3 px-6 rounded-xl font-semibold hover:from-[#1649A1]/90 hover:to-[#1649A1]/70 transition-all duration-300">
        Back to Shop
      </button>
    </div>
  `;

  const backButton = notFound.querySelector("#backToHome") as HTMLButtonElement;
  backButton?.addEventListener("click", () => {
    navigate("/shop");
  });

  return notFound;
}

function addProductClickListeners(): void {
  // Add click listeners to all product cards
  const productCards = document.querySelectorAll("[data-product-id]");
  productCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      // Prevent navigation if clicking on interactive elements inside the card
      if ((e.target as HTMLElement).closest("button, a")) return;

      const productId = (card as HTMLElement).dataset.productId;
      if (productId) {
        navigate(`/product/${productId}`);
      }
    });
  });
}

// Utility function for external navigation to products
export function navigateToProduct(productId: string): void {
  window.history.pushState({}, "", `/product/${productId}`);
  navigate(`/product/${productId}`, false);
}
