<script setup>
import passwordInput from "./components/ui/passwordInput.vue";
import fragmentsButton from "./components/fragments/button.vue";
import uiLengthSlider from "./components/ui/lengthSlider.vue";
import uiSelectCharacters from "./components/ui/selectCharacters.vue";
</script>

<template>
  <div>
    <passwordInput :password="password" />
    <uiLengthSlider @value-change="changeLength" :min="10" :max="60" />
    <span>length: {{ length }}</span>
    <uiSelectCharacters @characters-change="changeCharset" />
    <fragmentsButton @click="passwordGenerate">
      <span>generate password</span>
    </fragmentsButton>
    <fragmentsButton @click="passwordCopy">
      <span>Copy</span>
    </fragmentsButton>
  </div>
</template>

<script>
export default {
  name: "App",
  watch: {
    length(value) {
      this.passwordGenerate();
    },
  },
  data() {
    return {
      password: "",
      passwordCharset: "",
      length: 26,
    };
  },
  mounted() {},
  methods: {
    changeCharset(value) {
      this.passwordCharset = value;
    },
    changeLength(value) {
      this.length = value;
    },
    passwordGenerate(length) {
      const charset = this.passwordCharset;
      let retVal = "";
      for (let i = 0, n = charset.length; i < this.length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      this.password = retVal;
    },
    passwordCopy() {
      navigator.clipboard.writeText(this.password);
    },
  },
};
</script>

<style lang="scss" scoped></style>
