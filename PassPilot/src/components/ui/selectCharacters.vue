<template>
  <div class="ui-select-characters">
    <div class="selectBox">
      <div class="selector">
        <span>Lowercase</span>
        <label class="switch">
          <input class="switch-input" type="checkbox" v-model="lowercase" />
          <span class="switch-slider"></span>
        </label>
      </div>
      <div class="selector">
        <span>Uppercase</span>
        <label class="switch">
          <input class="switch-input" type="checkbox" v-model="uppercase" />
          <span class="switch-slider"></span>
        </label>
      </div>
      <div class="selector">
        <span>Numbers</span>
        <label class="switch">
          <input class="switch-input" type="checkbox" v-model="numbers" />
          <span class="switch-slider"></span>
        </label>
      </div>
      <div class="selector">
        <span>Specials</span>
        <label class="switch">
          <input class="switch-input" type="checkbox" v-model="specials" />
          <span class="switch-slider"></span>
        </label>
      </div>
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
    lowercase: "charactersChanged",
    uppercase: "charactersChanged",
    numbers: "charactersChanged",
    specials: "charactersChanged",
  },
  mounted() {
    this.$emit("characters-change", this.getCharacters());
  },
  methods: {
    charactersChanged() {
      this.$emit("characters-change", this.getCharacters());
    },
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
        characters += `!@#$%^&*()_+~\`|}{[]\\\:;?><,./-=`;
      }
      return characters;
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-select-characters {
  .selectBox {
    align-items: center;
    color: $textColor;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    justify-content: space-between;
    padding: 1rem 0;
    width: 100%;

    span {
      font-family: $primary-font;
      font-size: 0.8rem;
      letter-spacing: -0.04rem;
      font-weight: 500;
    }

    .selector {
      align-items: center;
      display: flex;
      justify-content: space-between;
    }
  }

  .switch {
    display: inline-block;
    height: 2rem;
    position: relative;
    width: 3.8rem;

    .switch-input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .switch-slider {
      background: $togglerBg;
      border-radius: 100px;
      bottom: 0;
      cursor: pointer;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition: background 0.2s;

      &::before {
        background: $togglerColor;
        border-radius: 1.6rem;
        content: "";
        height: 1.6rem;
        left: 0.2rem;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        transition: transform 0.2s, width 0.2s, background 0.2s;
        width: 1.6rem;
      }
    }

    .switch-input:checked + .switch-slider {
      background: $togglerBg;
    }

    .switch-input:not(:checked):active + .switch-slider::before {
      width: 2.4rem;
    }

    .switch-input:checked:active + .switch-slider::before {
      transform: translate(1rem, -50%);
      width: 2.4rem;
    }

    .switch-input:checked + .switch-slider::before {
      transform: translate(1.8rem, -50%);
    }
  }
}
</style>
