<template>
  <div class="ui-password-input">
    <div class="ui-password-input-container">
      <input type="text" :value="password" />
    </div>
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

<style lang="scss" scoped>
.ui-password-input {
  padding: 20px;
  &-container {
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.6);
  }

  input {
    background: none;
    border: none;
    color: $white;
    display: inline-flex;
    font-size: 60px;
    padding: 10px;
    width: 100%;
  }
}
</style>
