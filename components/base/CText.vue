// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <component
    :class="{
      [$dt()]: true,
      ['fs-' + size]: true,
      ['color-' + color]: true
    }"
    :is="tag"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  props: {
    span: {
      type: Boolean,
      default: false
    },
    p: {
      type: Boolean,
      default: false
    },
    h1: {
      type: Boolean,
      default: false
    },
    h2: {
      type: Boolean,
      default: false
    },
    h3: {
      type: Boolean,
      default: false
    },
    h4: {
      type: Boolean,
      default: false
    },
    h5: {
      type: Boolean,
      default: false
    },
    h6: {
      type: Boolean,
      default: false
    },
    label: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "base"
    },
    color: {
      type: String,
      default: "base"
    }
  },
  computed: {
    tag() {
      return this.span
        ? "span"
        : this.p
        ? "p"
        : this.h1
        ? "h1"
        : this.h2
        ? "h2"
        : this.h3
        ? "h3"
        : this.h4
        ? "h4"
        : this.h5
        ? "h5"
        : this.h6
        ? "h6"
        : this.label
        ? "label"
        : "span";
    }
  }
};
</script>
