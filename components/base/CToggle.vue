// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div
    class="c-toggle"
    :class="{
      [$dt()]: true,
      toggled: value
    }"
    @click="() => $emit('input', !value)"
  >
    <div class="c-toggle_circle"></div>
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
.c-toggle {
  cursor: pointer;
  position: relative;
  background-color: transparentize($color: $color-text-black, $amount: 0.4);
  &.dt {
    background-color: transparentize($color: $color-text-white, $amount: 0.6);
  }
  border-radius: 1rem;
  height: 1.25rem;
  min-width: 2.34375rem;
  line-height: 1rem;
  transition: background-color 200ms ease-in-out;
  .c-toggle_circle {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    background-color: $color-white;
    border: 0.078125rem solid
      transparentize($color: $color-text-black, $amount: 0.4);
    border-radius: 1rem;
    transition: transform 150ms ease-in-out, border-color 150ms ease-in-out;
    //Bounce exemple transition: transform 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 150ms ease-in-out;
  }
  &.toggled {
    background-color: $color-primary;
    &.dt {
      background-color: $color-dt-primary;
      .c-toggle_circle {
        border-color: $color-dt-primary;
      }
    }
    .c-toggle_circle {
      transform: translate3d(1.171875rem, 0, 0);
      border-color: $color-primary;
    }
  }
}
</style>
