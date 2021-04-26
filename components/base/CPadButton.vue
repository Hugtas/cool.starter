// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div
    class="c-pad-button"
    :class="{
      'not-active': !active
    }"
  >
    <div
      class="c-pad-button_bottom"
      :class="{ [$dt()]: true, 'not-active': !active }"
    ></div>
    <div
      class="c-pad-button_surface"
      :class="{ [$dt()]: true, 'not-active': !active, special: special }"
    >
      <CIcon :icon="icon" size="xl" class="c-pad-button_surface_icon" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: true
    },
    special: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.c-pad-button {
  cursor: pointer;
  width: $rem-64;
  height: calc(#{$rem-64} + #{$rem-6});
  margin-bottom: $rem-16;
  position: relative;
  //background-color: red;
  border-radius: $rem-8;
  transition: all 300ms ease;
  .c-pad-button_surface {
    @include flex-row_center_center;
    position: absolute;
    width: 100%;
    height: $rem-64;
    background-color: $color-card-base;
    border: $rem-1 solid darken($color-card-base, 2%);
    transition: all 300ms ease;
    &.special {
      border-color: transparentize($color: $color-primary, $amount: 0.6);
      &.dt {
        border-color: transparentize($color: $color-dt-primary, $amount: 0.6);
      }
    }
    &.dt {
      background-color: $color-dt-card-base;
      border: $rem-1 solid lighten($color-dt-card-base, 2%);
    }
    &.not-active {
      -webkit-transform: translateY($rem-3);
      transform: translateY($rem-3);
      background-color: darken($color-bg-base, 3%);
      &.dt {
        background-color: darken($color-dt-bg-base, 3%);
      }
      .c-pad-button_surface_icon {
        transition: all 300ms ease;
        //Those properties prevent hover to have jumpy animation on safari
        -webkit-transform: translateZ(0);
        -webkit-perspective: 1000;
        -webkit-backface-visibility: hidden;
        filter: saturate(0) opacity(0.5);
      }
    }
    border-radius: $rem-8;
  }
  .c-pad-button_bottom {
    position: absolute;
    width: 100%;
    height: $rem-64;
    -webkit-transform: translateY($rem-6);
    transform: translateY($rem-6);
    background: linear-gradient(
      90deg,
      $color-dt-bg-base 0%,
      $color-dt-card-base 50%,
      $color-dt-bg-base 100%
    );
    border-radius: $rem-8;
    transition: all 300ms ease;
    box-shadow: 0 $rem-1 $rem-3 rgba(0, 0, 0, 0.06),
      0 $rem-1 $rem-2 rgba(0, 0, 0, 0.12);
    &.not-active {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      box-shadow: 0 $rem-1 $rem-3 rgba(0, 0, 0, 0),
        0 $rem-1 $rem-2 rgba(0, 0, 0, 0);
      opacity: 0;
    }
  }
  &.not-active:hover {
    .c-pad-button_surface {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      background-color: darken($color-card-base, 0%);
      &.dt {
        background-color: darken($color-dt-card-base, 0%);
      }
      .c-pad-button_surface_icon {
        //Those properties prevent hover to have jumpy animation on safari
        -webkit-transform: translateZ(0);
        -webkit-perspective: 1000;
        -webkit-backface-visibility: hidden;
        -webkit-filter: saturate(0) opacity(1);
        filter: saturate(0) opacity(1);
      }
      &.special {
        border-color: transparentize($color: $color-primary, $amount: 0);
        &.dt {
          border-color: transparentize($color: $color-dt-primary, $amount: 0);
        }
      }
    }
    .c-pad-button_bottom {
      -webkit-transform: translateY($rem-6);
      transform: translateY($rem-6);
      box-shadow: 0 $rem-1 $rem-3 rgba(0, 0, 0, 0.06),
        0 $rem-1 $rem-2 rgba(0, 0, 0, 0.12);
      opacity: 1;
    }
  }
}
</style>
