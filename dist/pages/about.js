"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderAbout = renderAbout;
function renderAbout() {
    const div = document.createElement("div");
    div.innerHTML = `
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-12 lg:py-24">
        <div class="lg:w-1/2 space-y-8 animate-fade-in">
          <div class="space-y-6">
            <span class="inline-block px-4 py-2 text-sm font-medium text-[#F35F25] bg-[#1649A1]/20 rounded-full backdrop-blur-sm">
              Our Story
            </span>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              <span class="block">About</span>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#1649A1] to-[#F35F25]">You&Me</span>
            </h1>
            <p class="text-lg md:text-xl text-gray-300/90 max-w-2xl">
              Founded on the belief that shopping should be personal, meaningful, and effortless. We're more than just a store – we're your partners in discovering products that enhance your lifestyle and strengthen connections.
            </p>
          </div>
          <div class="flex items-center gap-6 pt-4">
            <div class="flex items-center gap-2">
              <span class="text-[#F35F25] text-2xl">🎯</span>
              <span class="text-white font-medium">Est. 2020</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[#F35F25] text-2xl">🌍</span>
              <span class="text-white font-medium">Global Reach</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[#F35F25] text-2xl">❤️</span>
              <span class="text-white font-medium">10K+ Happy Customers</span>
            </div>
          </div>
        </div>
        
        <div class="lg:w-1/2 flex justify-center animate-float">
          <div class="relative">
            <div class="absolute -inset-4 bg-gradient-to-r from-[#1649A1] to-[#F35F25] rounded-3xl blur-xl opacity-30"></div>
            <div class="relative bg-gray-800/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 p-8">
              <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                   alt="You&Me Team" 
                   class="rounded-xl shadow-lg w-full h-64 object-cover">
              <div class="absolute -bottom-4 -right-4 bg-[#1649A1] rounded-xl p-4 shadow-lg">
                <div class="text-white text-center">
                  <div class="text-2xl font-bold">4.9</div>
                  <div class="text-xs">★★★★★</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-[#1649A1] mb-4">
            Our <span class="text-[#F35F25]">Mission</span> & Vision
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            We're driven by a simple yet powerful vision: to create meaningful connections between people and products they love.
          </p>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="bg-gradient-to-br from-[#1649A1]/10 to-[#F35F25]/10 p-8 rounded-2xl border border-[#1649A1]/20">
            <div class="w-16 h-16 bg-[#1649A1] rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-[#1649A1] mb-4">Our Mission</h3>
            <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              To provide exceptional shopping experiences by curating high-quality products that bring joy, comfort, and style to our customers' lives. We believe every purchase should feel personal and meaningful.
            </p>
          </div>
          
          <div class="bg-gradient-to-br from-[#F35F25]/10 to-[#1649A1]/10 p-8 rounded-2xl border border-[#F35F25]/20">
            <div class="w-16 h-16 bg-[#F35F25] rounded-2xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-[#F35F25] mb-4">Our Vision</h3>
            <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              To become the world's most trusted and beloved e-commerce destination, where every customer feels valued, understood, and inspired to discover products that enhance their unique lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 text-sm font-medium text-[#F35F25] bg-[#1649A1]/20 rounded-full backdrop-blur-sm mb-4">
            Our Core Values
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-[#1649A1] mb-4">
            What We <span class="text-[#F35F25]">Stand For</span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            These values guide every decision we make and every interaction we have with our customers and partners.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${createValueCard("Quality First", "We never compromise on quality. Every product is carefully selected and tested to meet our high standards.", "🏆", "#1649A1")}
          ${createValueCard("Customer Obsession", "Our customers are at the heart of everything we do. Their satisfaction is our top priority.", "❤️", "#F35F25")}
          ${createValueCard("Innovation", "We continuously evolve and embrace new technologies to enhance the shopping experience.", "🚀", "#1649A1")}
          ${createValueCard("Transparency", "Honest communication and clear processes build trust with our customers and partners.", "🔍", "#F35F25")}
          ${createValueCard("Sustainability", "We're committed to responsible business practices that protect our planet for future generations.", "🌱", "#1649A1")}
          ${createValueCard("Community", "Building meaningful relationships and supporting the communities we serve is fundamental to who we are.", "🤝", "#F35F25")}
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1649A1]/10 to-[#F35F25]/10">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl font-bold text-[#1649A1] mb-4">
            Meet Our <span class="text-[#F35F25]">Team</span>
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            The passionate individuals behind You&Me who work tirelessly to bring you the best shopping experience.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          ${createTeamCard("Sarah Johnson", "Founder & CEO", "https://randomuser.me/api/portraits/women/44.jpg", "Visionary leader with 10+ years in e-commerce")}
          ${createTeamCard("Michael Chen", "Head of Product", "https://randomuser.me/api/portraits/men/32.jpg", "Product strategist focused on user experience")}
          ${createTeamCard("Emily Rodriguez", "Customer Experience Director", "https://randomuser.me/api/portraits/women/68.jpg", "Dedicated to exceeding customer expectations")}
          ${createTeamCard("David Kim", "Head of Operations", "https://randomuser.me/api/portraits/men/25.jpg", "Ensures smooth operations and fast delivery")}
        </div>
      </div>
    </section>

    <!-- Journey Timeline -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 text-sm font-medium text-[#F35F25] bg-[#1649A1]/20 rounded-full backdrop-blur-sm mb-4">
            Our Journey
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-[#1649A1] mb-4">
            The <span class="text-[#F35F25]">You&Me</span> Story
          </h2>
          <p class="text-lg text-gray-400 max-w-3xl mx-auto">
            From a small startup to a global e-commerce platform, here's how we've grown together.
          </p>
        </div>
        
        <div class="relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#1649A1] to-[#F35F25] rounded-full"></div>
          
          <div class="space-y-12">
            ${createTimelineItem("2020", "The Beginning", "You&Me was founded with a simple vision: to create meaningful shopping experiences that bring people together.", "left")}
            ${createTimelineItem("2021", "First 1000 Customers", "Reached our first major milestone with 1000 happy customers and expanded our product catalog to 100+ items.", "right")}
            ${createTimelineItem("2022", "Going Global", "Launched international shipping and opened our first overseas warehouse to serve customers worldwide.", "left")}
            ${createTimelineItem("2023", "Mobile Revolution", "Launched our mobile app and introduced AR try-on features, making shopping more interactive and personal.", "right")}
            ${createTimelineItem("2024", "Sustainability Focus", "Launched our eco-friendly packaging initiative and partnered with sustainable brands to reduce our environmental impact.", "left")}
            ${createTimelineItem("2025", "The Future", "Continuing to innovate with AI-powered recommendations and expanding our community-driven features.", "right")}
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-900">
      <div class="absolute inset-0 bg-gradient-to-r from-[#1649A1]/20 to-[#F35F25]/20"></div>
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div class="max-w-4xl mx-auto relative z-10 text-center">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-6">
          Join the <span class="text-[#F35F25]">You&Me</span> <span class="text-[#1649A1]">Family</span>
        </h2>
        <p class="text-lg sm:text-xl text-gray-300/90 mb-8 max-w-3xl mx-auto">
          Ready to discover products that enhance your lifestyle? Join thousands of satisfied customers who trust You&Me for their shopping needs.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-8 py-3.5 bg-[#1649A1] rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-[#1649A1]/30 transition-all duration-300 transform hover:-translate-y-1 group">
            Start Shopping
            <span class="ml-2 inline-block transition-transform group-hover:translate-x-1">🛍️</span>
          </button>
          <button class="px-8 py-3.5 border border-[#F35F25] rounded-xl text-[#F35F25] font-semibold hover:bg-[#F35F25]/10 transition-all duration-300 backdrop-blur-sm">
            Contact Us
          </button>
        </div>
        
        <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="p-4">
            <div class="text-3xl font-bold text-[#F35F25] mb-2">10K+</div>
            <div class="text-sm text-gray-300">Happy Customers</div>
          </div>
          <div class="p-4">
            <div class="text-3xl font-bold text-[#F35F25] mb-2">500+</div>
            <div class="text-sm text-gray-300">Products</div>
          </div>
          <div class="p-4">
            <div class="text-3xl font-bold text-[#F35F25] mb-2">24/7</div>
            <div class="text-sm text-gray-300">Support</div>
          </div>
          <div class="p-4">
            <div class="text-3xl font-bold text-[#F35F25] mb-2">4.9★</div>
            <div class="text-sm text-gray-300">Rating</div>
          </div>
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
      .timeline-item {
        position: relative;
      }
      .timeline-item::before {
        content: '';
        position: absolute;
        top: 50%;
        width: 16px;
        height: 16px;
        background: linear-gradient(45deg, #1649A1, #F35F25);
        border-radius: 50%;
        transform: translateY(-50%);
        left: 50%;
        margin-left: -8px;
        z-index: 10;
        border: 3px solid white;
      }
    </style>
  `;
    return div;
}
function createValueCard(title, description, emoji, color) {
    return `
    <div class="bg-white dark:bg-gray-800/50 p-8 rounded-2xl hover:shadow-lg hover:shadow-${color === "#1649A1" ? "[#1649A1]" : "[#F35F25]"}/10 transition-all duration-500 group border border-gray-200 dark:border-gray-700/50">
      <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">${emoji}</div>
      <h3 class="text-xl font-bold text-[${color}] mb-3">${title}</h3>
      <p class="text-gray-600 dark:text-gray-300">
        ${description}
      </p>
    </div>
  `;
}
function createTeamCard(name, role, image, description) {
    return `
    <div class="bg-white dark:bg-gray-800/50 p-6 rounded-2xl hover:shadow-lg hover:shadow-[#1649A1]/10 transition-all duration-500 group border border-gray-200 dark:border-gray-700/50">
      <div class="relative mb-6">
        <img src="${image}" alt="${name}" class="w-24 h-24 rounded-full mx-auto border-4 border-[#F35F25]/30 group-hover:border-[#1649A1]/50 transition-all duration-300">
        <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
      <div class="text-center">
        <h3 class="text-lg font-bold text-[#1649A1] mb-1">${name}</h3>
        <p class="text-[#F35F25] font-medium mb-3">${role}</p>
        <p class="text-sm text-gray-600 dark:text-gray-300">${description}</p>
      </div>
    </div>
  `;
}
function createTimelineItem(year, title, description, side) {
    const isLeft = side === "left";
    return `
    <div class="timeline-item flex items-center ${isLeft ? "justify-start" : "justify-end"}">
      <div class="w-1/2 ${isLeft ? "pr-8 text-right" : "pl-8"}">
        <div class="bg-white dark:bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700/50">
          <div class="text-2xl font-bold text-[#F35F25] mb-2">${year}</div>
          <h3 class="text-xl font-bold text-[#1649A1] mb-3">${title}</h3>
          <p class="text-gray-600 dark:text-gray-300">${description}</p>
        </div>
      </div>
    </div>
  `;
}
