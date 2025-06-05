export function renderHome(): HTMLElement {
  const div = document.createElement("div");
  div.innerHTML = `
    <!-- Hero Section with Product Showcase -->
    <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-24">
        <div class="lg:w-1/2 space-y-8 animate-fade-in">
          <div class="space-y-6">
            <span class="inline-block px-4 py-2 text-sm font-medium text-[#F35F25] bg-[#1649A1]/20 rounded-full backdrop-blur-sm">
              Premium Shopping Experience
            </span>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              <span class="block">Discover</span>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#1649A1] to-[#F35F25]">You&Me</span>
              <span class="block">Collection</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-300/90 max-w-2xl">
              Where style meets comfort. Explore our curated collection of premium products designed for modern living and authentic connections.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4">
            <button class="px-8 py-3.5 bg-gradient-to-r from-[#1649A1] to-[#1e5bb8] rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-[#1649A1]/30 transition-all duration-300 transform hover:-translate-y-1 group">
              Shop Now
              <span class="ml-2 inline-block transition-transform group-hover:translate-x-1">🛍️</span>
            </button>
            <button class="px-8 py-3.5 border border-[#F35F25] rounded-xl text-[#F35F25] font-semibold hover:bg-[#F35F25]/10 transition-all duration-300 backdrop-blur-sm">
              Browse Collections
            </button>
          </div>
          <div class="flex items-center gap-6 pt-4">
            <div class="flex items-center gap-2">
              <div class="flex -space-x-2">
              ${Array(4)
                .fill(0)
                .map(
                  (_) => `
                <img src="https://randomuser.me/api/portraits/${
                  Math.random() > 0.5 ? "men" : "women"
                }/${Math.floor(Math.random() * 50)}.jpg" 
                     alt="Team member" 
                     class="w-10 h-10 rounded-full border-2 border-gray-800 hover:scale-110 transition-transform duration-300">
              `
                )
                .join("")}
            </div>
              <span class="text-amber-400 text-lg">★★★★★</span>
            </div>
            <p class="text-sm text-gray-400">
              Rated <span class="font-medium text-white">4.9/5</span> by 2,500+ customers
            </p>
          </div>
        </div>
        
        <div class="lg:w-1/2 flex justify-center animate-float">
          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-[#1649A1] to-[#F35F25] rounded-3xl blur-xl opacity-30"></div>
            <div class="relative grid grid-cols-2 gap-4 p-4 bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                   alt="Fashion Collection" 
                   class="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                   alt="Home Decor" 
                   class="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                   alt="Accessories" 
                   class="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                   alt="Lifestyle Products" 
                   class="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="py-16 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-[#1649A1] mb-4">Shop by <span class="text-[#F35F25]">Category </span> </h2>
          <p class="text-gray-400">Discover our handpicked collections for every lifestyle</p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          ${createCategoryCard(
            "Fashion",
            "👗",
            "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          )}
          ${createCategoryCard(
            "Home & Living",
            "🏠",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          )}
          ${createCategoryCard(
            "Accessories",
            "💎",
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          )}
          ${createCategoryCard(
            "Lifestyle",
            "✨",
            "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
          )}
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 text-sm font-medium text-[#F35F25] bg-[#1649A1]/20 rounded-full backdrop-blur-sm mb-4">
            Why Choose You&Me
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-[#1649A1] mb-4">
            Shopping Made <span class="text-[#F35F25]">Simple</span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            We're committed to providing you with the best shopping experience, from browsing to delivery.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-[#1649A1]/30 dark:bg-gray-700/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-500 group">
            <div class="w-14 h-14 bg-emerald-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1649A1]/30 transition-all duration-500 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#F35F25] group-hover:text-[#f33a25]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1649A1] mb-3">Lightning Fast</h3>
            <p class="text-gray-500">
              Optimized architecture delivers 99.9% uptime and sub-second load times globally.
            </p>
            <a href="#" class="inline-flex items-center mt-4 text-[#F35F25] group-hover:text-[#f33a25de] transition-colors duration-300">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <!-- Feature 2 -->
          <div class="bg-[#1649A1]/30 dark:bg-gray-700/30  p-8 rounded-2xl hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-500 group">
            <div class="w-14 h-14 bg-emerald-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1649A1]/30 transition-all duration-500 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#F35F25] group-hover:text-[#f33a25de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1649A1] mb-3">Enterprise Security</h3>
            <p class="text-gray-500">
              End-to-end encryption and compliance with global security standards.
            </p>
            <a href="#" class="inline-flex items-center mt-4 text-[#F35F25] group-hover:text-[#f33a25de] transition-colors duration-300">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          <!-- Feature 3 -->
          <div class="bg-[#1649A1]/30 dark:bg-gray-700/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-500 group">
            <div class="w-14 h-14 bg-emerald-900/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#1649A1]/30 transition-all duration-500 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#F35F25] group-hover:text-[#f33a25de]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-[#1649A1] mb-3">Custom Solutions</h3>
            <p class="text-gray-500">
              Tailored specifically for your business needs with white-glove service.
            </p>
            <a href="#" class="inline-flex items-center mt-4 text-[#F35F25] group-hover:text-[#f33a25de] transition-colors duration-300">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1649A1]/10 to-[#F35F25]/10">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="p-6">
            <div class="text-4xl sm:text-5xl font-bold text-[#F35F25] mb-2 flex items-center justify-center">
              <span class="counter" data-target="10000">0</span>
              <span>+</span>
            </div>
            <div class="text-lg sm:text-xl text-[#1649A1]">Happy Customers</div>
          </div>
          <div class="p-6">
            <div class="text-4xl sm:text-5xl font-bold text-[#F35F25] mb-2 flex items-center justify-center">
              <span class="counter" data-target="500">0</span>
              <span>+</span>
            </div>
            <div class="text-lg sm:text-xl text-[#1649A1]">Products</div>
          </div>
          <div class="p-6">
            <div class="text-4xl sm:text-5xl font-bold text-[#F35F25] mb-2 flex items-center justify-center">
              <span class="counter" data-target="24">0</span>
              <span>/7</span>
            </div>
            <div class="text-lg sm:text-xl text-[#1649A1]">Support</div>
          </div>
          <div class="p-6">
            <div class="text-4xl sm:text-5xl font-bold text-[#F35F25] mb-2 flex items-center justify-center">
              <span class="counter" data-target="99">0</span>
              <span>%</span>
            </div>
            <div class="text-lg sm:text-xl text-[#1649A1]">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Customer Reviews -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 text-sm font-medium text-[#F35F25] bg-[#1649A1]/20 rounded-full backdrop-blur-sm mb-4">
            Customer Reviews
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-[#1649A1] mb-4">
            What Our <span class="text-[#F35F25]">Customers</span> Say
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their You&Me experience.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${createTestimonialCard(
            "Amazing quality and fast shipping! The dress I ordered exceeded my expectations.",
            "Sarah M.",
            "Fashion Lover",
            "https://randomuser.me/api/portraits/women/32.jpg"
          )}
          ${createTestimonialCard(
            "Love the home decor collection. Everything arrived perfectly packaged and looks beautiful in my apartment.",
            "Mike R.",
            "Interior Enthusiast",
            "https://randomuser.me/api/portraits/men/45.jpg"
          )}
          ${createTestimonialCard(
            "Excellent customer service and the return process was so easy. Will definitely shop here again!",
            "Emily K.",
            "Regular Customer",
            "https://randomuser.me/api/portraits/women/28.jpg"
          )}
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900">
      <div class="absolute inset-0 bg-gradient-to-r from-[#1649A1]/20 to-[#F35F25]/20"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div class="max-w-4xl mx-auto relative z-10 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Ready to Start <span class="text-[#F35F25]">Shopping</span><span class="text-[#1649A1]">?</span>
        </h2>
        <p class="text-lg sm:text-xl text-gray-300/90 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied customers who have made You&Me their go-to destination for quality products and exceptional service.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-8 py-3.5 bg-[#1649A1] rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-[#1649A1]/30 transition-all duration-300 transform hover:-translate-y-1">
            Start Shopping
          </button>
          <button class="px-8 py-3.5 border border-[#F35F25] rounded-xl text-[#F35F25] font-semibold hover:bg-[#F35F25]/10 transition-all duration-300 backdrop-blur-sm">
            Browse Catalog
          </button>
        </div>
      </div>
    </section>

    <style>
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      .category-card:hover .category-overlay {
        background: linear-gradient(135deg, rgba(22, 73, 161, 0.8), rgba(243, 95, 37, 0.8));
      }
    </style>
  `;

  // Add counter animation script with immediate execution
  const counterScript = document.createElement("script");
  counterScript.textContent = `
    (function() {
      let hasAnimated = false;
      
      function animateCounters() {
        if (hasAnimated) return;
        
        const counters = document.querySelectorAll('.counter');
        if (counters.length === 0) return;
        
        hasAnimated = true;
        
        counters.forEach(counter => {
          const target = parseInt(counter.getAttribute('data-target'));
          const duration = 2000; // 2 seconds
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          let step = 0;
          
          const timer = setInterval(() => {
            step++;
            current = Math.min(Math.floor(increment * step), target);
            counter.textContent = current;
            
            if (step >= steps || current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            }
          }, duration / steps);
        });
      }
      
      // Try multiple ways to ensure counters animate
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', animateCounters);
      } else {
        animateCounters();
      }
      
      // Also try with intersection observer as backup
      setTimeout(() => {
        const counters = document.querySelectorAll('.counter');
        if (counters.length > 0 && !hasAnimated) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting && !hasAnimated) {
                animateCounters();
                observer.disconnect();
              }
            });
          }, { threshold: 0.5 });
          
          counters.forEach(counter => observer.observe(counter));
        }
      }, 7000);
    })();
  `;

  div.appendChild(counterScript);

  return div;
}

function createCategoryCard(title:string, emoji:any, imageUrl:string) {
  return `
    <div class="category-card group cursor-pointer">
      <div class="relative overflow-hidden rounded-2xl aspect-square">
        <img src="${imageUrl}" alt="${title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
        <div class="category-overlay absolute inset-0 bg-black/40 group-hover:bg-gradient-to-br from-[#1649A1]/60 to-[#F35F25]/60 transition-all duration-500 flex items-center justify-center">
          <div class="text-center">
            <div class="text-4xl mb-2">${emoji}</div>
            <h3 class="text-white font-bold text-lg">${title}</h3>
          </div>
        </div>
      </div>
    </div>
  `;
}

function createTestimonialCard(
  review: string,
  name: string,
  title: string,
  avatar: string
) {
  return `
    <div class="bg-[#1649A1]/30 dark:bg-gray-700/30 p-8 rounded-2xl hover:shadow-lg hover:shadow-[#1649A1]/10 transition-all duration-500 border border-gray-800/50 hover:border-[#1649A1]/30">
      <div class="flex items-center gap-4 mb-6">
        <img src="${avatar}" alt="${name}" class="w-12 h-12 rounded-full border-2 border-[#F35F25]/30">
        <div>
          <h4 class="font-bold text-[#F35F25]">${name}</h4>
          <p class="text-sm text-[#1649A1]">${title}</p>
        </div>
      </div>
      <p class="text-gray-500 mb-6">
        "${review}"
      </p>
      <div class="flex gap-1 text-amber-400">
        ${Array(5)
          .fill(
            '<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>'
          )
          .join("")}
      </div>
    </div>
  `;
}
