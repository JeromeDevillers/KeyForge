<template>
  <button class="ui-fragments-button">
    <slot></slot>
  </button>
</template>

<script></script>

<style lang="scss" scoped>
.ui-fragments-button {
  background: $white;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  font-size: 1.2rem;
  padding: 10px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: rgba($white, 0.8);
  }
}
</style>
