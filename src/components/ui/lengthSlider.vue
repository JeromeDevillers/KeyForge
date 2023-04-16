<template>
  <div>
    <input
      id="default-range"
      type="range"
      @input="updateValue(value)"
      v-model="value"
      :min="min"
      :max="max"
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
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
