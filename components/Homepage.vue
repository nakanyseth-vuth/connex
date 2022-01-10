<template>
  <div>
    <nav class="bg-white shadow px-48 border-b border-gray-400">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex px-2 lg:px-0">
            <div class="flex-shrink-0 flex items-center">
              <img
                class="block lg:hidden h-8 w-auto"
                src="https://nuxtjs.org/design-kit/colored-logo.png"
                alt="Workflow logo"
              />
              <img
                class="hidden lg:block h-8 w-auto"
                src="https://nuxtjs.org/design-kit/colored-logo.png"
                alt="Workflow logo"
              />
            </div>
          </div>
          <div class="flex-1 flex items-center justify-center px-2 lg:ml-12">
            <div class="max-w-lg w-full lg:max-w-xs">
              <label for="search" class="sr-only">Search</label>
              <div class="relative">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                >
                  <svg
                    class="h-5 w-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  class="block w-full pl-10 pr-3 py-2 border border-gray-400 rounded-md leading-5 bg-gray-100 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue sm:text-sm transition duration-150 ease-in-out"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div class="flex items-center lg:hidden">
            <!-- Mobile menu button -->
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <!-- Icon when menu is closed. -->
              <!-- Menu open: "hidden", Menu closed: "block" -->
              <svg
                class="block h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <!-- Icon when menu is open. -->
              <!-- Menu open: "block", Menu closed: "hidden" -->
              <svg
                class="hidden h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <!-- icons-->
          <div class="lg:ml-4 lg:flex lg:items-center">
            <button
              class="flex-shrink-0 p-3 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg
                aria-label="Home"
                class="_8-yf5"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
            </button>

            <button
              class="flex-shrink-0 p-3 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg
                aria-label="Messenger"
                class="_8-yf5"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M12.003 2.001a9.705 9.705 0 110 19.4 10.876 10.876 0 01-2.895-.384.798.798 0 00-.533.04l-1.984.876a.801.801 0 01-1.123-.708l-.054-1.78a.806.806 0 00-.27-.569 9.49 9.49 0 01-3.14-7.175 9.65 9.65 0 0110-9.7z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="1.739"
                ></path>
                <path
                  d="M17.79 10.132a.659.659 0 00-.962-.873l-2.556 2.05a.63.63 0 01-.758.002L11.06 9.47a1.576 1.576 0 00-2.277.42l-2.567 3.98a.659.659 0 00.961.875l2.556-2.049a.63.63 0 01.759-.002l2.452 1.84a1.576 1.576 0 002.278-.42z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>

            <button
              class="flex-shrink-0 p-3 border-transparent text-gray-700 rounded-full hover:text-gray-600 focus:outline-none focus:text-gray-600 transition duration-150 ease-in-out"
              aria-label="Notifications"
            >
              <svg
                aria-label="Activity Feed"
                class="_8-yf5"
                color="#262626"
                fill="#262626"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
                ></path>
              </svg>
            </button>

            <!-- Profile dropdown -->
            <div class="ml-4 relative flex-shrink-0">
              <div>
                <button
                  class="flex rounded-full border-gray-700 transition duration-150 ease-in-out"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <img
                    class="h-8 w-8 rounded-full"
                    src="~/static/profile.jpg"
                    alt
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div
      class="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full overflow-x-scroll antialiased mx-auto"
    >
      <div class="bg-white w-full shadow rounded-lg p-5">
        <textarea
          class="bg-gray-200 w-full rounded-lg shadow border p-2"
          rows="5"
          placeholder="Speak your mind"
        ></textarea>

        <div class="w-full flex flex-row flex-wrap mt-3">
          <div class="w-1/3"></div>
          <div class="w-2/3">
            <button
              type="button"
              class="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div class="mt-3 flex flex-col">
        <div class="bg-white mt-3">
          <div class="shadow p-5 text-xl text-gray-700 font-semibold flex">
            <img
              class="h-12 w-12 rounded-full"
              src="~/static/profile.jpg"
              alt
            />
            <div class="ml-2 overflow-hidden">
              <div class="flex items-center">
                <a class="font-medium ml-5">Max Dara</a>
              </div>
              <div class="text-xs text-gray-500 ml-5 whitespace-nowrap">
                9:38 am
              </div>
            </div>
          </div>
          <img
            class="border rounded-t-lg shadow-lg"
            src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />

          <div class="bg-white p-1 border shadow flex flex-row flex-wrap">
            <div
              class="w-1/2 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold"
            >
              Like
            </div>
            <div
              class="w-1/2 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold"
            >
              Comment
            </div>
          </div>
        </div>

        <div class="bg-white mt-3">
          <div class="shadow p-5 text-xl text-gray-700 font-semibold flex">
            <img
              class="h-12 w-12 rounded-full"
              src="~/static/profile.jpg"
              alt
            />
            <div class="ml-2 overflow-hidden">
              <div class="flex items-center">
                <a class="font-medium ml-5">Max Dara</a>
              </div>
              <div class="text-xs text-gray-500 ml-5 whitespace-nowrap">
                9:38 am
              </div>
            </div>
          </div>
          <img
            class="border rounded-t-lg shadow-lg"
            src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />

          <div class="bg-white p-1 border shadow flex flex-row flex-wrap">
            <div
              class="w-1/2 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold"
            >
              Like
            </div>
            <div
              class="w-1/2 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold"
            >
              Comment
            </div>
          </div>
        </div>

        <div class="bg-white mt-3">
          <div class="shadow p-5 text-xl text-gray-700 font-semibold flex">
            <img
              class="h-12 w-12 rounded-full"
              src="~/static/profile.jpg"
              alt
            />
            <div class="ml-2 overflow-hidden">
              <div class="flex items-center">
                <a class="font-medium ml-5">Max Dara</a>
              </div>
              <div class="text-xs text-gray-500 ml-5 whitespace-nowrap">
                9:38 am
              </div>
            </div>
          </div>
          <img
            class="border rounded-t-lg shadow-lg"
            src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />

          <div class="bg-white p-1 border shadow flex flex-row flex-wrap">
            <div
              class="w-1/2 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold"
            >
              Like
            </div>
            <div
              class="w-1/2 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold"
            >
              Comment
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
