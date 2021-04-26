// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div
    class="c-hamburger-toggle hamburger hamburger--collapse"
    :class="{
      [$dt()]: true,
      'is-active': value
    }"
    @click="() => $emit('input', !value)"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
.HamburgerToggle {
  @include flex-row_start_start;
  width: 1rem;
}
</style>
