<template>
    <section>
      <div class="container mx-auto mt-8">
        <div class="mt-5 mb-10">
          <h4 class="text-6xl mb-3 font-serif text-gray-700 capitalize  md:text-5xl text-center">Our Collections</h4>
          <p class="text-center">Lorem ipsum dolor sit amet, ut aliquip ex ea commodo consequat</p>
        </div>
        <div class="py-5 mb-10">
  <div class="container mx-auto flex flex-col items-center justify-between sm:flex-row">
    <!-- Filter Icon -->
    <div class="flex items-center mb-4 sm:mb-0">
      <svg class="w-6 h-6 text-gray-700 hover:text-gray-900 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h18M3 8h18m-15 4h15M3 16h18"></path>
      </svg>

      <!-- Filter Options -->
      <div class="flex hidden space-x-4 ml-4">
        <button class="text-gray-700 hover:text-gray-900 font-semibold">All</button>
        <button class="text-gray-700 hover:text-gray-900 font-semibold">Category 1</button>
        <button class="text-gray-700 hover:text-gray-900 font-semibold">Category 2</button>
        <!-- Add more filter options as needed -->
      </div>
    </div>

    <!-- Dropdown with Sorting Options -->
    <div class="relative">
      <button class="text-gray-700 hover:text-gray-900 font-semibold">Sort By</button>
      <div class="absolute z-10 mt-2 bg-white border rounded-md shadow-lg hidden">
        <ul class="py-1">
          <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 1</a></li>
          <li><a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">Option 2</a></li>
          <!-- Add more dropdown options as needed -->
        </ul>
      </div>
    </div>
  </div>
</div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center font-serif">
          <!-- Card 1 -->
          <div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center">
            <img src="../assets/img/img_1.png" alt="Product 1" class="w-full h-48 object-contain mb-4">
            <div class="font-semibold mb-2">Product 1</div>
            <div class="text-[#3dbbb5]">$29.99</div>
            <div class="text-yellow-300 mb-2">⭐⭐⭐⭐⭐</div>
          </div>
  
          <!-- Card 2 -->
          <div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center">
            <img src="../assets/img/img_2.png" alt="Product 2" class="w-full h-48 object-contain mb-4">
            <div class="font-semibold mb-2">Product 2</div>
            <div class="text-[#3dbbb5] ">$39.99</div>
            <div class="text-yellow-500 mb-2">⭐⭐⭐⭐</div>
          </div>
  
          <!-- Card 3 -->
          <div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center">
            <img src="../assets/img/img_9.png" alt="Product 3" class="w-full h-48 object-contain mb-4">
            <div class="font-semibold mb-2">Product 3</div>
            <div class="text-[#3dbbb5] font-semibold">$49.99</div>
            <div class="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
          </div>
  
          <!-- Card 4 -->
          <div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center">
            <img src="../assets/img/img_4.png" alt="Product 4" class="w-full h-48 object-contain mb-4">
            <div class="font-semibold mb-2">Product 4</div>
            <div class="text-[#3dbbb5] font-semibold">$59.99</div>
            <div class="text-yellow-500 mb-2">⭐⭐⭐⭐</div>
          </div>
  
          <!-- Card 5 -->
          <div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center">
            <img src="../assets/img/img_5.png" alt="Product 5" class="w-full h-48 object-contain mb-4">
            <div class="font-semibold mb-2">Product 5</div>
            <div class="text-[#3dbbb5] font-semibold">$29.99</div>
            <div class="text-yellow-300 mb-2">⭐⭐⭐⭐⭐</div>
          </div>
  
          <!-- Card 6 -->
          <div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center">
            <img src="../assets/img/img_6.png" alt="Product 6" class="w-full h-48 object-contain mb-4">
            <div class="font-semibold mb-2">Product 6</div>
            <div class="text-[#3dbbb5] font-semibold">$39.99</div>
            <div class="text-yellow-500 mb-2">⭐⭐⭐⭐</div>
          </div>
  
          <!-- Card 7 -->
          <div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center">
            <img src="../assets/img/img_11.png" alt="Product 7" class="w-full h-48 object-contain mb-4">
            <div class="font-semibold mb-2">Product 7</div>
            <div class="text-[#3dbbb5] font-semibold">$49.99</div>
            <div class="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
          </div>
  
          <!-- Card 8 -->
          <div class="bg-white p-6 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg text-center">
            <img src="../assets/img/img_8.png" alt="Product 8" class="w-full h-48 object-contain mb-4">
            <div class=" font-semibold mb-2">Product 8</div>
            <div class="text-[#3dbbb5] font-semibold">$59.99</div>
            <div class="text-yellow-500 mb-2">⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </section>
  </template>
  