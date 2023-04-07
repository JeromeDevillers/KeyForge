<template>
  <div class="ui-length-slider">
    <input
      type="range"
      :min="min"
      :max="max"
      :value="value"
      @input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "lengthSlider",
  props: {
    min: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      value: 10,
    };
  },
  methods: {
    updateValue(value) {
      this.$emit("value-change", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.ui-length-slider {
  margin: 0 auto;
  max-width: 80vw;
  input {
    background: rgba($white, 0.3);
    border-radius: 100px;
    width: 100%;
    cursor: pointer;
  }
}
</style>
