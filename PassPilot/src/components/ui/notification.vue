<template>
  <div class="ui-notification">
    <div class="ui-notification--message">
      <h1>Copied!</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "UiNotification",
  data() {
    return {};
  },
  props: {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss">
.ui-notification {
  background: rgba($black, 0.6);
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;

  &--message {
    align-items: center;
    background: $white;
    border-radius: 8px;
    display: flex;
    left: 50%;
    padding: 2rem;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);

    h1 {
      color: $black;
      font-family: $primary-font;
      font-size: 1.5rem;
    }
  }
}
</style>
