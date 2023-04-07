<template>
  <div>
    <div>
      <input
        type="checkbox"
        id="lowercase"
        name="lowercase"
        value="lowercase"
        v-model="lowercase"
      />
      <label for="lowercase">Lowercase</label>
    </div>
    <div>
      <input
        type="checkbox"
        id="uppercase"
        name="uppercase"
        value="uppercase"
        v-model="uppercase"
      />
      <label for="uppercase">Uppercase</label>
    </div>
    <div>
      <input
        type="checkbox"
        id="numbers"
        name="numbers"
        value="numbers"
        v-model="numbers"
      />
      <label for="numbers">Numbers</label>
    </div>
    <div>
      <input
        type="checkbox"
        id="specials"
        name="specials"
        value="specials"
        v-model="specials"
      />
      <label for="specials">Specials</label>
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
    lowercase() {
      this.$emit("characters-change", this.getCharacters());
    },
    uppercase() {
      this.$emit("characters-change", this.getCharacters());
    },
    numbers() {
      this.$emit("characters-change", this.getCharacters());
    },
    specials() {
      this.$emit("characters-change", this.getCharacters());
    },
  },
  mounted() {
    this.$emit("characters-change", this.getCharacters());
  },
  methods: {
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
        characters += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
      }
      return characters;
    },
  },
};
</script>

<style lang="scss" scoped></style>
