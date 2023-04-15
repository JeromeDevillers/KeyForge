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
  font-size: 0.8rem;
  padding: 10px 30px;
  text-align: center;
  transition: background 0.2s ease-in-out;
  width: 100%;

  &:hover {
    background: $btnBgHover;
  }
}
</style>
