// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div class="c-toggle-input">
    <CToggle :value="value" @input="$emit('input', $event)" />
    <CText class="c-toggle-input_label" size="sm" label>{{ label }}</CText>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.c-toggle-input {
  @include flex-row_start_center;
  .c-toggle-input_label {
    padding-left: 1rem;
    line-height: 1rem;
  }
}
</style>
