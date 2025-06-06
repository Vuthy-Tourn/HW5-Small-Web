"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderContact = renderContact;
function renderContact() {
    const div = document.createElement("div");
    div.innerHTML = `
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4 sm:px-6 lg:px-8 h-screen">
      <div class="absolute inset-0 opacity-20">
        <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      
      <div class="max-w-7xl mx-auto relative z-10 text-center py-12 lg:py-24">
        <div class="space-y-8 animate-fade-in">
          <span class="inline-block px-4 py-2 text-sm font-medium text-[#F35F25] bg-[#1649A1]/20 rounded-full backdrop-blur-sm">
            Get in Touch
          </span>
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            <span class="block">Contact</span>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#1649A1] to-[#F35F25]">You&Me</span>
          </h1>
          <p class="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions, feedback, or need support, our team is here to help you every step of the way.
          </p>
          
          <div class="flex flex-wrap justify-center gap-6 pt-4">
            <div class="flex items-center gap-2">
              <span class="text-[#F35F25] text-2xl">📞</span>
              <span class="text-white font-medium">24/7 Support</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[#F35F25] text-2xl">⚡</span>
              <span class="text-white font-medium">Quick Response</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-[#F35F25] text-2xl">🌍</span>
              <span class="text-white font-medium">Global Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-gradient-to-br from-[#1649A1]/5 to-[#F35F25]/5 p-8 rounded-2xl border border-[#1649A1]/20">
            <div class="mb-8">
              <h2 class="text-3xl font-bold text-[#1649A1] mb-4">Send us a Message</h2>
              <p class="text-gray-600 dark:text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <form class="space-y-6" id="contactForm">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#1649A1] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your first name"
                  >
                </div>
                <div>
                  <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    required
                    class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#1649A1] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your last name"
                  >
                </div>
              </div>
              
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#1649A1] focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                >
              </div>
              
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select 
                  id="subject" 
                  name="subject" 
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#1649A1] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Customer Support</option>
                  <option value="order">Order Issue</option>
                  <option value="return">Returns & Refunds</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  required
                  class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-[#1649A1] focus:border-transparent transition-all duration-300"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="w-full px-8 py-4 bg-[#1649A1] rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-[#1649A1]/30 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <!-- Contact Information -->
          <div class="space-y-8">
            <div>
              <h2 class="text-3xl font-bold text-[#1649A1] mb-6">Get in Touch</h2>
              <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We're here to help! Choose the best way to reach us, and we'll respond as quickly as possible.
              </p>
            </div>
            
            <div class="space-y-6">
              ${createContactCard("📍", "Visit Our Store", "123 Commerce Street", "New York, NY 10001", "#1649A1")}
              ${createContactCard("📞", "Call Us", "+1 (555) 123-4567", "Mon-Fri: 9AM-6PM EST", "#F35F25")}
              ${createContactCard("✉️", "Email Us", "hello@youandme.com", "We reply within 24 hours", "#1649A1")}
              ${createContactCard("💬", "Live Chat", "Available 24/7", "Quick support for urgent issues", "#F35F25")}
            </div>
            
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1649A1]/5 to-[#F35F25]/5">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 text-sm font-medium text-[#F35F25] bg-[#1649A1]/20 rounded-full backdrop-blur-sm mb-4">
            Quick Answers
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-[#1649A1] mb-4">
            Frequently Asked <span class="text-[#F35F25]">Questions</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Find quick answers to common questions. Can't find what you're looking for? Contact us!
          </p>
        </div>
        
        <div class="space-y-4">
          ${createFAQItem("How long does shipping take?", "We offer free standard shipping (5-7 business days) and express shipping (2-3 business days). International shipping typically takes 7-14 business days depending on your location.")}
          ${createFAQItem("What is your return policy?", "We offer a 30-day return policy for all items in original condition. Returns are free for defective items, and we provide prepaid return labels for your convenience.")}
          ${createFAQItem("Do you ship internationally?", "Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination. You can check shipping options at checkout.")}
          ${createFAQItem("How can I track my order?", "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account on our website.")}
          ${createFAQItem("What payment methods do you accept?", "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Shop Pay for your convenience.")}
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-[#1649A1] mb-4">
            Find Our <span class="text-[#F35F25]">Store</span>
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Visit us in person for a personalized shopping experience.
          </p>
        </div>
        
        <div class="bg-gradient-to-br from-[#1649A1]/10 to-[#F35F25]/10 rounded-2xl p-8 border border-[#1649A1]/20">
          <div class="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
            <div class="text-center">
              <div class="text-4xl mb-4">🗺️</div>
              <h3 class="text-xl font-bold text-[#1649A1] mb-2">Interactive Map</h3>
              <p class="text-gray-600 dark:text-gray-300">
                123 Commerce Street, New York, NY 10001
              </p>
              <button class="mt-4 px-6 py-2 bg-[#1649A1] text-white rounded-lg hover:bg-[#1649A1]/90 transition-colors">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <style>
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }
      .faq-item {
        cursor: pointer;
      }
      .faq-content {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-out;
      }
      .faq-content.active {
        max-height: 200px;
      }
    </style>
  `;
    return div;
}
function createContactCard(icon, title, line1, line2, color) {
    return `
    <div class="bg-white dark:bg-gray-800/50 p-6 rounded-2xl hover:shadow-lg hover:shadow-[${color}]/10 transition-all duration-500 group border border-gray-200 dark:border-gray-700/50">
      <div class="flex items-start space-x-4">
        <div class="text-3xl group-hover:scale-110 transition-transform duration-300">${icon}</div>
        <div>
          <h3 class="text-lg font-bold text-[${color}] mb-2">${title}</h3>
          <p class="text-gray-900 dark:text-white font-medium">${line1}</p>
          <p class="text-sm text-gray-600 dark:text-gray-300">${line2}</p>
        </div>
      </div>
    </div>
  `;
}
function createFAQItem(question, answer) {
    return `
    <div class="faq-item bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700/50 overflow-hidden">
      <div class="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
        <h3 class="text-lg font-semibold text-[#1649A1]">${question}</h3>
        <span class="faq-icon text-2xl text-[#F35F25] font-bold">+</span>
      </div>
      <div class="faq-content">
        <div class="px-6 pb-6">
          <p class="text-gray-600 dark:text-gray-300">${answer}</p>
        </div>
      </div>
    </div>
  `;
}
