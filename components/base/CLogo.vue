// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div
    class="c-logo"
    :class="{
      ['c-logo-' + size]: true,
      alt
    }"
  />
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "base"
    },
    alt: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.c-logo {
  background-image: url("~assets/logo/base.png");
  background-repeat: no-repeat;
  background-size: 95%;
  background-position: center;
  &.alt {
    background-image: url("~assets/logo/alt.png");
  }
  &.c-logo-xs {
    width: $rem-16;
    height: $rem-16;
  }
  &.c-logo-sm {
    width: $rem-32;
    height: $rem-32;
  }
  &.c-logo-base {
    width: $rem-48;
    height: $rem-48;
  }
  &.c-logo-md {
    width: $rem-64;
    height: $rem-64;
  }
  &.c-logo-lg {
    width: $rem-80;
    height: $rem-80;
  }
  &.c-logo-xl {
    width: $rem-96;
    height: $rem-96;
  }
  &.c-logo-xxl {
    width: $rem-128;
    height: $rem-128;
  }
}
</style>
