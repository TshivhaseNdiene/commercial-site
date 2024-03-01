<template>
  <header class="z-50 flex w-full flex-wrap bg-white pb-10 text-base sm:flex-col sm:pb-0 fixed top-0">
    <!-- Topbar -->
    <div class="bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        <div class="flex flex-col sm:flex-row justify-between items-center py-2w-full border-b shadow-md dark:border-gray-50">
          <!-- Left side: Free Shipping message -->
          <p class="text-xs md:text-sm font-serif mb-2 sm:mb-0">Free shipping on orders over R1000</p>

          <!-- Right side: Language, Currency, and Login buttons -->
          <div class="flex items-center space-x-4">
            <!-- Language dropdown -->
            <div class="relative" @click="toggleDropdown('language')">
              <button type="button" class="flex items-center border-r border-gray-300 pr-2 font-serif text-black hover:text-gray-500 dark:hover:text-gray-400 text-xs md:text-sm">
                <svg class="mr-1 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
                {{ selectedLanguage }}
              </button>
              <!-- Language dropdown content -->
              <div v-if="dropdowns.language" class="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-md text-xs md:text-sm">
                <!-- Dropdown content -->
                <button type="button" @click="selectLanguage('ENG')" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">ENG</button>
                <button type="button" @click="selectLanguage('FR')" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">FR</button>
                <button type="button" @click="selectLanguage('ES')" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">ES</button>
                <!-- Add more language options as needed -->
              </div>
            </div>

            <!-- Currency dropdown -->
            <div class="relative" @click="toggleDropdown('currency')">
              <button type="button" id="currencyButton" class="flex items-center border-r border-gray-300 pr-2 font-serif text-black hover:text-gray-500 dark:hover:text-gray-400 text-xs md:text-sm">
                <svg class="mr-1 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
                {{ selectedCurrency }}
              </button>
              <div v-if="dropdowns.currency" class="absolute mt-2 bg-white border border-gray-300 rounded-md shadow-md dropdown text-xs md:text-sm">
                <!-- Dropdown content -->
                <button type="button" @click="selectCurrency('ZAR')" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">ZAR</button>
                <button type="button" @click="selectCurrency('USD')" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">USD</button>
                <button type="button" @click="selectCurrency('EUR')" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">EUR</button>
                <!-- Add more currency options as needed -->
              </div>
            </div>

            <!-- Login dropdown -->
            <div class="relative" @click="toggleDropdown('login')">
              <button type="button" class="flex items-center font-serif text-gray-800 hover:text-gray-500 dark:hover:text-gray-400 text-xs md:text-sm">
                <svg class="mr-1 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
                {{ selectedLogin }}
              </button>
              <div v-if="dropdowns.login" class="absolute hidden mt-2 bg-white border border-gray-300 rounded-md shadow-md dropdown text-xs md:text-sm">
                <!-- Dropdown content -->
                <button type="button" @click="selectLoginOption('Login')" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Login</button>
                <button type="button" @click="selectLoginOption('Sign In')" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Sign In</button>
                <button type="button" @click="selectLoginOption('Register')" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Register</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="flex justify-between items-center py-2 mt-2 md:mt-8 mb-8">
          <button class="text-gray-600 hover:text-gray-300 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <div class="flex items-center justify-center flex-grow">
  <a href="#" class="font-serif font-bold text-lg md:hidden">FootFlair</a>
  <a href="#" class="font-serif font-bold text-lg hidden md:block lg:block xl:block">FootFlair</a>
</div>

          <!-- Right side: Cart and Search icons -->
          <div class="flex items-center space-x-4">
            <!-- Cart Icon -->
            <a href="#" class="flex items-center font-serif text-gray-800 hover:text-gray-500 dark:hover:text-gray-400 text-xs md:text-sm">
              <svg class="mr-1 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
              Cart
            </a>

            <!-- Search Icon -->
            <a href="#" class="flex items-center font-serif text-gray-800 hover:text-gray-500 dark:hover:text-gray-400 text-xs md:text-sm">
              <svg class="mr-1 h-4 w-4 md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dropdowns: {
        language: false,
        currency: false,
        login: false
      },
      selectedLanguage: 'ENG',
      selectedCurrency: 'ZAR',
      selectedLogin: 'Login'
    };
  },
  methods: {
    toggleDropdown(dropdown) {
      // Toggle the visibility of the specified dropdown
      this.dropdowns[dropdown] = !this.dropdowns[dropdown];

      // Close other dropdowns when one is opened
      for (const key in this.dropdowns) {
        if (key !== dropdown) {
          this.dropdowns[key] = false;
        }
      }
    },
    selectLanguage(language) {
      // Update the selected language and close the dropdown
      this.selectedLanguage = language;
      this.dropdowns.language = false;
    },
    selectCurrency(currency) {
      this.selectedCurrency = currency;
      this.dropdowns.currency = false;
    },
    selectLoginOption(option) {
      this.selectedLogin = option;
      this.dropdowns.login = false;
    }
  }
};
</script>

<style>
</style>
