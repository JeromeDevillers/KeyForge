<template>
  <button class="ui-fragments-button">
    <slot></slot>
  </button>
</template>

<script></script>

<style lang="scss" scoped>
.ui-fragments-button {
  background: $btnBg;
  border-radius: 8px;
  border: none;
  color: $btnColor;
  cursor: pointer;
  display: block;
  font-size: 1.2rem;
  padding: 20px 60px;
  text-align: center;
  transition: background 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background: $btnBgHover;
  }
}
</style>
