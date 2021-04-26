// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
//TODO : Add password retrieve link on password type if enable
<template>
  <div
    class="c-input fluid"
    :class="{
      [$dt()]: true,
      'error-is-displayed': hasError && !isFocus,
      'password-type': type == 'password',
      'password-is-visible': type == 'password' && dynaType == 'text'
    }"
  >
    <CText
      label
      class="c-input_label"
      @click.native="$refs.input.focus()"
      :class="{ 'is-focus': isFocus || value }"
      :size="isFocus || value ? 'xs' : 'base'"
      :color="isFocus ? 'primary' : hasError && !isFocus ? 'danger' : 'base'"
    >
      {{ label }}
    </CText>
    <input
      ref="input"
      v-bind="$attrs"
      v-on="{
        ...$listeners,
        input: event => $emit('input', event.target.value)
      }"
      @focus="isFocus = true"
      @blur="isFocus = false"
      class="fluid"
      :class="{
        [$dt()]: true,
        error: hasError && !isFocus,
        success: !!value && !hasError,
        'password-type': type == 'password'
      }"
      :aria-describedby="`${name}-error`"
      :value="value"
      :name="name"
      :id="`${formId}-${name}`"
      :type="dynaType"
    />
    <CIcon
      @click.native="
        overrideType = dynaType == 'password' ? 'text' : 'password'
      "
      class="c-input_visibility-icon"
      size="md"
      v-if="type === 'password'"
      :icon="'eye'"
      :color="dynaType == 'password' ? 'base' : 'primary'"
    />
    <CText
      p
      v-if="hasError && error && !isFocus"
      class="c-input_error"
      color="danger"
      size="xs"
      :id="`${name}-error`"
    >
      {{ error }}
    </CText>
    <CText
      p
      v-if="((hint || !hasError) && isFocus && hasError) || (hint && !hasError)"
      class="c-input_hint"
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
    type: {
      type: String,
      default: "text"
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
    formId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isFocus: false,
      overrideType: null
    };
  },
  computed: {
    isTyped() {
      return !!this.value && !this.hasError && !this.isFocus;
    },
    dynaType() {
      return this.overrideType || this.type;
    }
  },
  mounted() {
    console.log(this.$attrs);
  }
};
</script>

<style lang="scss" scoped>
.c-input {
  position: relative;
  input {
    @extend .fs-base;
    background-color: transparentize($color: $color-primary, $amount: 0.95);
    border-radius: 0;
    padding: $rem-4;
    padding-top: $rem-20;
    padding-bottom: $rem-6;
    border: none;
    border-bottom: $rem-1 solid $color-grey;
    outline: none;
    color: $color-text-black;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px $color-bg-base inset !important;
      -webkit-text-fill-color: $color-text-black !important;
    }
    &.dt {
      color: $color-text-white;
      background-color: transparentize(
        $color: $color-dt-primary,
        $amount: 0.97
      );
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px $color-dt-bg-base inset !important;
        -webkit-text-fill-color: $color-text-white !important;
      }
    }
    &:focus {
      border-bottom: $rem-1 solid $color-primary;
    }
    &.password-type {
      padding-right: $rem-32;
    }
    &.error {
      border-color: $color-danger;
      &.dt {
        color: $color-dt-danger;
      }
    }
  }
  .c-input_label {
    position: absolute;
    cursor: text;
    top: $rem-13;
    left: $rem-4;
    &.is-focus {
      position: absolute;
      top: $rem-2;
    }
  }
  .c-input_visibility-icon {
    display: none;
  }
  &.password-type > .c-input_visibility-icon {
    display: block;
    cursor: pointer;
    position: absolute;
    top: $rem-14;
    right: $rem-4;
    opacity: 0.5;
  }
  &.password-is-visible > .c-input_visibility-icon {
    opacity: 1;
  }
  .c-input_error {
    margin-top: $rem-2;
    padding: 0 $rem-4;
  }
  .c-input_hint {
    margin-top: $rem-2;
    padding: 0 $rem-4;
  }
}
</style>
