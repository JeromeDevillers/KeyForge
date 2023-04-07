<template>
  <div class="ui-password-input">
    <input type="text" :value="password" />
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
  input {
    border: 3px solid $black;
    display: inline-flex;
    padding: 10px;
    width: 100%;
    font-size: 20px;
  }
}
</style>
