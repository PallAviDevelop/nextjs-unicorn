import React from "react";
//import { Link } from "react-router-dom";
import Search from "./Search";
//import Search from "./Search";

const HeaderBanner = () => {
  return (
    <header className="bg-white py-2 border-b">
      <section className="bg-no-repeat bg-cover bg-left-top   bg-[url('/images/Catalog-BG.png')] h-[325px]   xl:bg-[url('/images/Catalog-BG.png')] ">
      <div class="relative mx-auto w-full py-16 px-5 font-sans text-gray-800 sm:px-20 md:max-w-screen-lg lg:py-24">
  <h2 class="text-center text-5xl sm:text-5xl font-bold">Catalog Of Fish And </h2>
  <h3 className="mb-5 text-center text-4xl sm:text-4xl font-normal">Seafood Wholesale</h3>

  </div>
  </section>
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          {/* <div className="flex-shrink-0 mr-5">
            <a href="/">
              <img
                src="logo192.png"
                style={{ height: "50px", width: "60px" }}
                height="40"
                width="120"
                alt="BuyItNow"
              />
            </a>
          </div> */}
          {/* <Search /> */}
          {/* <h1>Catalog of Fish and Seafood Wholesale</h1> */}

          <div className="flex items-center space-x-2 ml-auto">
            {/* <Link
              to="/cart"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            > */}
              {/* <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
              <span className="hidden lg:inline ml-1">
                Cart (<b>0</b>)
              </span>
            </Link> */}
            {/* <Link
              to="/login"
              className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
            >
              <i className="text-gray-400 w-5 fa fa-user"></i>
              <span className="hidden lg:inline ml-1">Sign in</span>
            </Link>
            <Link to="/me">
              <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
                <img className="w-10 h-10 rounded-full" src={"logo192.png"} />
                <div className="space-y-1 font-medium">
                  <p>
                    Ghulam
                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                      test@gmail.com
                    </time>
                  </p>
                </div>
              </div>
            </Link> */}
          </div>

          <div className="lg:hidden ml-2">
            <button
              type="button"
              className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
            >
              <span className="sr-only">Open menu</span>
              <i className="fa fa-bars fa-lg"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="mx-auto w-full">

  <div class="mx-auto container">
    <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <form class="">
       

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="flex flex-col">
            <label for="name" class="relative text-sm font-medium text-stone-600">Latin Name</label>
            <input type="text" id="name" placeholder="Raspberry juice" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
          </div>

          <div class="flex flex-col">
            <label for="manufacturer" class="text-sm font-medium text-stone-600">Product Type</label>

            <select id="manufacturer" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option>text1</option>
              <option>text2</option>
              <option>text3</option>
            </select>
          </div>
          <div class="flex flex-col">
            <label for="manufacturer" class="text-sm font-medium text-stone-600">Cut Type</label>

            <select id="manufacturer" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
              <option>Type1</option>
              <option>Type2</option>
              <option>Type3</option>
            </select>
          </div>
        

          <div class="flex flex-col">
          <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
          <button class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset</button>
          <button class="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search</button>
        </div>
          </div>
        </div>

        
      </form>
    </div>
  </div>
  
</div>

    </header>
  );
};

export default HeaderBanner;
