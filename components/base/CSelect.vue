// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div
    class="c-select fluid"
    :class="{
      [$dt()]: true,
      'error-is-displayed': hasError && !isFocus
    }"
  >
    <CText
      label
      class="c-select_label"
      @click.native="$refs.input.focus()"
      :class="{ 'is-focus': isFocus || value }"
      :size="isFocus || value ? 'xs' : 'base'"
      :color="isFocus ? 'primary' : hasError && !isFocus ? 'danger' : 'base'"
    >
      {{ label }}
    </CText>
    <select
      ref="input"
      v-bind="$attrs"
      @change="$emit('input', $event.target.value)"
      @focus="isFocus = true"
      @blur="isFocus = false"
      class="fluid"
      :class="{
        [$dt()]: true,
        'no-value': !value && !isFocus,
        error: hasError && !isFocus,
        success: !!value && !hasError
      }"
      :aria-describedby="`${name}-error`"
      :name="name"
      :id="`${formKey}-${name}`"
    >
      <option selected value="" v-if="placeholder">
        -- {{ placeholder }}
      </option>
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        :selected="opt.value === value"
      >
        {{ opt.label }}
      </option>
    </select>
    <CIcon
      class="c-select_arrow"
      size="md"
      icon="chevron-down"
      :color="isFocus ? 'primary' : 'base'"
    />
    <CText
      p
      v-if="hasError && error && !isFocus"
      class="c-select_error"
      color="danger"
      size="xs"
      :id="`${name}-error`"
    >
      {{ error }}
    </CText>
    <CText
      p
      v-if="((hint || !hasError) && isFocus && hasError) || (hint && !hasError)"
      class="c-select_hint"
      color="info"
      size="xs"
      :id="`${name}-hint`"
    >
      {{ hint }}
    </CText>
  </div>
</template>

<script>

export default {

  inheritAttrs: false,
  props: {
    value: {
      type: [String, Number]
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: false
    },
    hasError: {
      type: Boolean,
      default: false
    },
    hint: {
      type: String,
      required: false
    },
    formKey: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    options: {
      type: Array,
      required: true,
      validator(opts) {
        return (
          opts.find(opt => {
            return !opt.hasOwnProperty("label") || !opt.hasOwnProperty("value");
          }) === undefined
        );
      }
    }
  },
  data() {
    return {
      val: null,
      isFocus: false
    };
  },
  computed: {
    isTyped() {
      return !!this.value && !this.hasError && !this.isFocus;
    }
  }
};
</script>

<style lang="scss" scoped>
.c-select {
  position: relative;
  select {
    @extend .fs-base;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    text-overflow: "";
    background-color: transparentize($color: $color-primary, $amount: 0.95);
    border-radius: 0;
    padding: 0;
    padding-top: $rem-20;
    padding-bottom: $rem-4;
    border: none;
    border-bottom: $rem-1 solid $color-grey;
    outline: none;
    color: $color-text-black;
    &.dt {
      color: $color-text-white;
      background-color: transparentize($color: $color-dt-primary, $amount: 0.97);
    }
    &:focus {
      border-bottom: $rem-1 solid $color-primary;
    }
    &.error {
      border-color: $color-danger;
      &.dt {
        color: $color-dt-danger;
      }
    }
    &.no-value{
      color: transparent;
    }
  }
  .c-select_label {
    position: absolute;
    cursor: pointer;
    top: $rem-13;
    left: 0;
    &.is-focus {
      position: absolute;
      top: $rem-4;
    }
  }
  .c-select_arrow {
    display: block;
    cursor: pointer;
    position: absolute;
    top: $rem-16;
    right: 0;
  }
  .c-select_error {
    margin-top: $rem-2;
  }
  .c-select_hint {
    margin-top: $rem-2;
  }
}
</style>
