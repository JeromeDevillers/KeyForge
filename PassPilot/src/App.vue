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

    <div id="appContainer">
      <passwordInput :password="password" />
      <uiLengthSlider @value-change="changeLength" :min="4" :max="60" />
      <uiSelectCharacters @characters-change="changeCharset" />
      <div class="btn-container">
        <fragmentsButton @click="passwordGenerate">
          <span>Generate new password</span>
        </fragmentsButton>
        <fragmentsButton @click="passwordCopy">
          <span>Copy to clipboard</span>
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

<style lang="scss" scoped>
// @import "./scss/main.scss";
#appContainer {
  background: $bgColor;
  color: $white;
  height: 100vh;
  margin: 0 auto;
  max-width: 94vw;

  .btn-container {
    display: inline-flex;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
  }
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
