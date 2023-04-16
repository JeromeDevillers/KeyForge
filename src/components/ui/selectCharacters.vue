<template>
  <div class="ui-select-characters">
    <div class="grid grid-rows-4">
      <div class="items-center grid grid-cols-layout gap-x-8 mb-4">
        <div>
          <span class="text-base font-semibold text-gray-700">Lowercase</span>
          <span class="text-xs leading-tight text-gray-400 block font-oxgen">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </span>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            v-model="lowercase" />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div class="items-center grid grid-cols-layout gap-x-8 mb-4">
        <div>
          <span class="text-base font-semibold text-gray-700">Uppercase</span>
          <span class="text-xs leading-tight text-gray-400 block font-oxgen">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </span>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            v-model="uppercase" />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div class="items-center grid grid-cols-layout gap-x-8 mb-4">
        <div>
          <span class="text-base font-semibold text-gray-700">Numbers</span>
          <span class="text-xs leading-tight text-gray-400 block font-oxgen">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </span>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            v-model="numbers" />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div class="items-center grid grid-cols-layout gap-x-8 mb-4">
        <div>
          <span class="text-base font-semibold text-gray-700">Specials</span>
          <span class="text-xs leading-tight text-gray-400 block font-oxgen">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          </span>
        </div>
        <label class="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            class="sr-only peer"
            v-model="specials" />
          <div
            class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectCharacters",
  data() {
    return {
      lowercase: true,
      uppercase: true,
      numbers: true,
      specials: true,
    };
  },
  watch: {
    lowercase: "charactersChanged",
    uppercase: "charactersChanged",
    numbers: "charactersChanged",
    specials: "charactersChanged",
  },
  mounted() {
    this.$emit("characters-change", this.getCharacters());
  },
  methods: {
    charactersChanged() {
      this.$emit("characters-change", this.getCharacters());
    },
    getCharacters() {
      let characters = "";
      if (this.lowercase) {
        characters += "abcdefghijklmnopqrstuvwxyz";
      }
      if (this.uppercase) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      }
      if (this.numbers) {
        characters += "0123456789";
      }
      if (this.specials) {
        characters += `!@#$%^&*()_+~\`|}{[]\\\:;?><,./-=`;
      }
      return characters;
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-select-characters {
  .selectBox {
    .selector {
      grid-template-columns: 1fr auto;
    }
  }
}
</style>
