<template>
  <div class="rounded-full">
    <input
      type="text"
      :value="password"
      class="block w-full p-6 text-2xl mb-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
  </div>
</template>

<script>
export default {
  name: "passwordInput",
  props: {
    password: {
      type: String,
      required: true,
    },
  },
};
</script>
