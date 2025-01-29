import React from 'react'

const Navbar = () => {
  return (
     <header className="pb-6 bg-white lg:pb-0" x-data="{expanded: false}">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
               <nav className="flex items-center justify-between h-16 lg:h-20">
                    <div className="flex-shrink-0">
                    <a href="#" title="" className="flex">
                         <img className="w-auto h-8 lg:h-10" src="data:image/png;base64,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" alt="" />
                    </a>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
                    <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                    <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                    <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                    <a href="#" title="" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                    </div>

                    <a href="#" title="" className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started </a>
               </nav>

               <nav x-show="expanded" className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
                    <div className="flow-root">
                    <div className="flex flex-col px-6 -my-2 space-y-1">
                         <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>

                         <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Solutions </a>

                         <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Resources </a>

                         <a href="#" title="" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Pricing </a>
                    </div>
                    </div>

                    <div className="px-6 mt-6">
                    <a href="#" title="" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md tems-center hover:bg-blue-700 focus:bg-blue-700" role="button"> Get started </a>
                    </div>
               </nav>
          </div>
     </header>
  )
}

export default Navbar
