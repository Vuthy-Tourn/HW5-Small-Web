"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRouter = initRouter;
exports.navigate = navigate;
exports.navigateToProduct = navigateToProduct;
const layout_1 = require("./layout");
const home_1 = require("./pages/home");
const shop_1 = require("./pages/shop");
const productDetail_1 = require("./pages/productDetail");
const about_1 = require("./pages/about");
const contact_1 = require("./pages/contact");
let container;
function initRouter(containerId = "app") {
    container = document.getElementById(containerId) || document.body;
    window.addEventListener("popstate", () => {
        handleRoute(window.location.pathname, false);
    });
    document.addEventListener("click", (e) => {
        const target = e.target;
        const anchor = target.closest("a[data-link]");
        if (anchor) {
            e.preventDefault();
            navigate(anchor.getAttribute("href"));
        }
    });
    handleRoute(window.location.pathname, false);
}
function navigate(path, updateHistory = true) {
    handleRoute(path, updateHistory);
}
function handleRoute(path, updateHistory = true) {
    container.innerHTML = "";
    let contentFn;
    switch (path) {
        case "/":
            contentFn = home_1.renderHome;
            break;
        case "/shop":
            contentFn = () => {
                const shopPage = (0, shop_1.renderShop)();
                setTimeout(() => addProductClickListeners(), 0);
                return shopPage;
            };
            break;
        case "/about":
            contentFn = about_1.renderAbout;
            break;
        case "/contact":
            contentFn = contact_1.renderContact;
            break;
        default:
            if (/^\/product\/\w+$/.test(path)) {
                const productId = path.split("/")[2];
                contentFn = () => (0, productDetail_1.renderProductDetail)(productId);
            }
            else {
                contentFn = render404;
            }
            break;
    }
    (0, layout_1.createLayout)(contentFn);
    if (updateHistory) {
        window.history.pushState({ path }, "", path);
    }
}
function render404() {
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
    const backButton = notFound.querySelector("#backToHome");
    backButton === null || backButton === void 0 ? void 0 : backButton.addEventListener("click", () => {
        navigate("/shop");
    });
    return notFound;
}
function addProductClickListeners() {
    const productCards = document.querySelectorAll("[data-product-id]");
    productCards.forEach((card) => {
        card.addEventListener("click", (e) => {
            if (e.target.closest("button, a"))
                return;
            const productId = card.dataset.productId;
            if (productId) {
                navigate(`/product/${productId}`);
            }
        });
    });
}
function navigateToProduct(productId) {
    window.history.pushState({}, "", `/product/${productId}`);
    navigate(`/product/${productId}`, false);
}
