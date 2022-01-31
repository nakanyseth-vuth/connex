<template>
  <div
    class="w-full md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full antialiased mx-auto"
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
  </div>
</template>

<script>
export default {}
</script>

<style></style>
