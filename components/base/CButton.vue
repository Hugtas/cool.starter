// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <button
    :disabled="disabled || loading"
    class="c-button"
    :class="{
      [$dt()]: true,
      [hollow ? 'bg-color-transparent' : 'bg-color-' + color]: true,
      [hollow ? 'color-' + color : 'color-' + contentColor]: true,
      [hollow ? 'border-' + color : 'border-transparent']: true,
      ['rad-' + radius]: true,
      muted: disabled,
      loading
    }"
    :type="type"
  >
    <div class="c-button_content">
      <CIcon
        class="c-button_icon"
        size="sm"
        v-if="icon"
        :color="hollow ? color : contentColor"
        :icon="icon"
      />
      <slot />
    </div>
    <div class="c-button_spinner-container fluid" v-if="loading">
      <CSpinner
        class="c-button_spinner"
        :color="hollow ? color : contentColor"
      />
    </div>
  </button>
</template>

<script>

export default {
  props: {
    type: {
      type: String,
      default: "button"
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hollow: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false
    },
    color: {
      type: String,
      default: "primary"
    },
    contentColor: {
      type: String,
      default: "white"
    },
    radius: {
      type: String,
      default: "base"
    }
  },
};
</script>

<style lang="scss" scoped>
.c-button {
  @extend .fs-sm;
  @extend .fs-bold;
  @extend .trans-fast;
  position: relative;
  cursor: pointer;
  padding: $rem-6 $rem-16;
  white-space: nowrap;
  outline: transparent;
  text-align: center;
  &:hover:not(:disabled):not(.loading) {
    filter: brightness(1.1);
  }
  &:active:not(:disabled):not(.loading) {
    filter: brightness(0.95);
  }
  &.loading {
    filter: opacity(25%);
    .c-button_content {
      opacity: 0;
    }
  }
  .c-button_content {
    @include flex-row_center_center;
    .c-button_icon {
      margin-right: 0.5rem;
    }
  }
  .c-button_spinner-container {
    @include flex-row_center_center;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>
