import React from 'react'

const Footer = () => {
  return (
   <footer class="py-12 bg-white sm:pt-16 lg:pt-20">
     <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
       <img class="w-auto h-10" src="data:image/png;base64,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" alt="" />
   
       <div class="grid grid-cols-2 mt-16 sm:grid-cols-3 gap-y-16 lg:grid-cols-6 gap-x-16">
         <div>
           <h6 class="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Discover</h6>
   
           <ul class="mt-8 space-y-5">
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Explore </a>
             </li>
   
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Destinations </a>
             </li>
   
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Travel Guides </a>
             </li>
   
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Get Started </a>
             </li>
           </ul>
         </div>
   
         <div>
           <h6 class="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Support</h6>
   
           <ul class="mt-8 space-y-5">
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Contact Us </a>
             </li>
   
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> FAQs </a>
             </li>
   
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Shipping Information </a>
             </li>
   
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Returns & Exchanges </a>
             </li>
           </ul>
         </div>
   
         <div class="col-span-2 sm:col-span-1">
           <h6 class="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Community</h6>
   
           <ul class="mt-8 space-y-5">
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Forums </a>
             </li>
   
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Events </a>
             </li>
   
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Blog </a>
             </li>
   
             <li>
               <a href="#" title="" class="inline-flex text-sm font-normal text-gray-900 transition-all duration-300 transform font-pj hover:text-gray-600 hover:translate-x-1"> Join Now </a>
             </li>
           </ul>
         </div>
   
         <div class="col-span-2 sm:col-span-3 xl:pl-20">
           <h6 class="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Subscribe for updates</h6>
   
           <div class="relative mt-8">
             <div class="absolute -inset-2">
               <div class="w-full h-full mx-auto opacity-30 blur-lg filter" style={{background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)"}}></div>
             </div>
   
             <form action="#" method="POST" class="relative">
               <div class="flex">
                 <div class="flex-1">
                   <input type="email" name="" id="" placeholder="Enter your email" class="block w-full px-4 py-4 text-base text-gray-900 placeholder-gray-600 bg-white border-gray-300 focus:ring-gray-900 focus:border-gray-900 rounded-l-xl font-pj caret-gray-900" required />
                 </div>
   
                 <button type="submit" class="px-10 py-4 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent sm:px-16 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-r-xl font-pj focus:outline-none">Join</button>
               </div>
             </form>
           </div>
   
           <div class="grid grid-cols-1 mt-8 gap-y-8 sm:grid-cols-2 sm:gap-x-16">
             <div>
               <h6 class="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Call us</h6>
               <p class="mt-2.5 text-xl font-pj text-gray-900 font-bold">
                 <a href="#" title=""> (123) 456-7890 </a>
               </p>
             </div>
   
             <div>
               <h6 class="text-sm font-bold tracking-widest text-gray-900 uppercase font-pj">Email us</h6>
               <p class="mt-2.5 text-xl font-pj text-gray-900 font-bold">
                 <a href="#" title=""> info@discoverworld.com </a>
               </p>
             </div>
           </div>
         </div>
       </div>
   
       <hr class="mt-16 border-gray-200" />
   
       <div class="mt-8 sm:flex sm:items-center sm:justify-between">
         <ul class="flex items-center justify-start space-x-3 sm:order-2 sm:justify-end">
           <li>
             <a href="#" target="_blank" title="" class="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" rel="noopener">
               <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
               </svg>
             </a>
           </li>
   
           <li>
             <a href="#" target="_blank" title="" class="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" rel="noopener">
               <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
               </svg>
             </a>
           </li>
   
           <li>
             <a href="#" target="_blank" title="" class="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" rel="noopener">
               <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                 <circle cx="16.806" cy="7.207" r="1.078"></circle>
                 <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
               </svg>
             </a>
           </li>
   
           <li>
             <a href="#" target="_blank" title="" class="inline-flex items-center justify-center w-10 h-10 text-gray-900 transition-all duration-200 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-gray-200" rel="noopener">
               <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path>
               </svg>
             </a>
           </li>
         </ul>
   
         <p class="mt-8 text-sm font-normal text-gray-600 font-pj sm:order-1 sm:mt-0">© Travel World 2025, All Rights Reserved</p>
       </div>
     </div>
   </footer>
  )
}

export default Footer
