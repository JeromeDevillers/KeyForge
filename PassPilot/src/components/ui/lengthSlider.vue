<template>
  <div class="ui-length-slider">
    <span>Password Length</span>
    <input
      type="number"
      :min="min"
      :max="max"
      v-model="value"
      @input="updateValue(value)" />
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
  align-items: center;
  display: grid;
  grid-template-columns: 1fr auto;
  margin: 0 auto;

  input,
  span {
    color: $textColor;
    font-family: $primary-font;
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: -0.04rem;
  }
}
</style>
