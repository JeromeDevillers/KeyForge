<template>
  <div class="ui-select-characters">
    <div class="selectBox">
      <div class="selector">
        <span>lowercase</span>
        <label class="switch">
          <input class="switch-input" type="checkbox" v-model="lowercase" />
          <span class="switch-slider"></span>
        </label>
      </div>
      <div class="preview">abcde</div>
    </div>
    <div class="selectBox">
      <label class="switch">
        <input class="switch-input" type="checkbox" v-model="uppercase" />
        <span class="switch-slider"></span>
      </label>
      <label for="uppercase">Uppercase</label>
    </div>
    <div class="selectBox">
      <label class="switch">
        <input class="switch-input" type="checkbox" v-model="numbers" />
        <span class="switch-slider"></span>
      </label>
      <label for="numbers">Numbers</label>
    </div>
    <div class="selectBox">
      <label class="switch">
        <input class="switch-input" type="checkbox" v-model="specials" />
        <span class="switch-slider"></span>
      </label>
      <label for="specials">Specials</label>
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
    lowercase() {
      this.$emit("characters-change", this.getCharacters());
    },
    uppercase() {
      this.$emit("characters-change", this.getCharacters());
    },
    numbers() {
      this.$emit("characters-change", this.getCharacters());
    },
    specials() {
      this.$emit("characters-change", this.getCharacters());
    },
  },
  mounted() {
    this.$emit("characters-change", this.getCharacters());
  },
  methods: {
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
        characters += "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
      }
      return characters;
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-select-characters {
  display: grid;
  grid-gap: 4vw;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  padding: 4vw;
  .selectBox {
    padding: 1rem;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 1.2rem;
    }

    .selector {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .preview {
      display: block;
    }

    input {
      z-index: 1;
      position: relative;
      width: 10px;
      height: 10px;
      background: red;

      &:checked {
        background: green;
      }
    }
    aspect-ratio: 1/1;

    &:nth-child(1) {
      background: $tileFirst;
    }

    &:nth-child(2) {
      background: $tileSecond;
    }

    &:nth-child(3) {
      background: $tileThird;
    }

    &:nth-child(4) {
      background: $tileFourth;
    }
  }
}

.switch {
  position: relative;
  display: inline-block;

  width: 3.8rem;
  height: 2rem;
}

.switch-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.switch-slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: #ff4754;
  border-radius: 1rem;

  transition: background 0.2s;
  cursor: pointer;
}

.switch-slider::before {
  content: "";

  position: absolute;
  left: 0.2rem;
  top: 50%;
  transform: translateY(-50%);

  height: 1.6rem;
  width: 1.6rem;
  border-radius: 1.6rem;

  background: blue;
  transition: transform 0.2s, width 0.2s, background 0.2s;
}

.switch-input:checked + .switch-slider {
  background: green;
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
</style>
