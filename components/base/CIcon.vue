// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div class="c-icon">
    <fa
      :icon="icon"
      :class="{
        [$dt()]: true,
        ['color-' + color]: true,
        [`fs-` + size]: size
      }"
    />
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "base"
    }
  }
};
</script>
<style lang="scss" scoped></style>
