<script setup>
import passwordInput from "./components/ui/passwordInput.vue";
import fragmentsButton from "./components/fragments/button.vue";
import uiLengthSlider from "./components/ui/lengthSlider.vue";
import uiSelectCharacters from "./components/ui/selectCharacters.vue";
import uiNotification from "./components/ui/notification.vue";
</script>

<template>
  <div>
    <transition name="fade">
      <uiNotification v-if="showNotification" />
    </transition>

    <div id="appContainer" class="bg-teal-50 font-oxgen">
      <passwordInput :password="password" />
      <uiLengthSlider
        class="mb-4"
        @value-change="changeLength"
        :min="4"
        :max="60" />
      <uiSelectCharacters @characters-change="changeCharset" />
      <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-200" />
      <div class="gap-y-4 grid">
        <fragmentsButton @click="passwordGenerate">
          <span>Generate new password</span>
        </fragmentsButton>
        <fragmentsButton @click="passwordCopy">
          <span>Copy to clipboard</span>
          <svg
            class="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
          </svg>
        </fragmentsButton>
      </div>
    </div>
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
      showNotification: false,
      length: 26,
    };
  },
  mounted() {
    this.passwordGenerate();
  },
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
      // show notification for 2 seconds
      this.showNotification = true;
      setTimeout(() => {
        this.showNotification = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
// @import "./scss/main.scss";
#appContainer {
  margin: 0 auto;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
