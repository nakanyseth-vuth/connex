<template>
  <div class="bg-white mt-3">
    <div class="shadow p-5 text-xl text-gray-700 font-semibold flex">
      <img class="h-12 w-12 rounded-full" src="~/static/profile.jpg" alt />
      <div class="ml-2 overflow-hidden">
        <div class="flex items-center">
          <a class="font-medium ml-5">Max Dara</a>
        </div>
        <div class="text-xs text-gray-500 ml-5 whitespace-nowrap">9:38 am</div>
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
</template>

<script>
export default {}
</script>
