// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div
    class="c-card"
    :class="{
      [$dt()]: true,
      ['rad-' + (pure ? 'no' : radius)]: true,
      ['level-' + (pure ? 'pure' : level)]: true,
      'ios-spec': isIOS,
      'mac-moz-fix': needMacMozFix,
      pure,
      'no-overflow-hidden': noOverflowHidden
    }"
    :style="{
      'max-height': maxHeight || height,
      'max-width': maxWidth || width,
      width: width,
      height: height,
      'box-shadow': boxShadow
    }"
  >
    <div class="c-card_title fluid" v-if="title">
      <h2
        :class="{
          [$dt()]: true
        }"
      >
        {{ title }}
      </h2>
    </div>
    <div
      class="c-card_divider"
      v-if="title"
      :class="{
        [$dt()]: true
      }"
    />
    <div
      class="scroller"
      :class="{
        [$dt()]: true,
        'ios-spec': isIOS,
        'mac-moz-fix': needMacMozFix
      }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false
    },
    height: {
      type: String,
      required: false
    },
    maxWidth: {
      type: String,
      required: false
    },
    maxHeight: {
      type: String,
      required: false
    },
    radius: {
      type: String,
      default: "sm"
    },
    level: {
      type: String,
      default: "1"
    },
    pure: {
      type: Boolean,
      default: false
    },
    boxShadow: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    }
  },
  computed: {
    needMacMozFix() {
      return process.client
        ? navigator.userAgent.search("10.15") != -1 //reference from https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent/Firefox
        : false;
    },
    isIOS() {
      return process.client
        ? [
            "iPad Simulator",
            "iPhone Simulator",
            "iPod Simulator",
            "iPad",
            "iPhone",
            "iPod"
          ].includes(navigator.platform) ||
            // iPad on iOS 13 detection
            (navigator.userAgent.includes("Mac") && "ontouchend" in document)
        : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.c-card {
  @include flex-col_start_start;
  @include width-fit-content;
  overflow: hidden;
  &.no-overflow-hidden {
    overflow: visible;
  }
  padding: $rem-8;
  padding-right: $rem-2;
  @include xxl {
    padding-right: calc(#{$rem-2} + 1px);
  }
  &.ios-spec {
    padding-right: 0;
  }
  border: $rem-1 solid lighten($color-card-base, 2%);
  background-color: $color-card-base;
  @media all and (min--moz-device-pixel-ratio: 0) {
    //only firefox
    padding: $rem-16;
    padding-right: calc(#{$rem-1} + 1px);
    @include md {
      padding: $rem-12;
      padding-right: $rem-1;
    }
  }
  .c-card_title {
    h2 {
      padding-bottom: $rem-4;
      font-size: $rem-18;
      color: $color-primary;
      transform-origin: left;
      &.dt {
        color: $color-dt-primary;
      }
    }
    padding-right: $rem-8;
    margin-bottom: $rem-4;
  }
  .c-card_divider {
    width: calc(100% - #{$rem-8});
    height: $rem-1;
    background-color: $color-primary;
    &.dt {
      background-color: $color-dt-primary;
    }
    margin-bottom: $rem-16;
  }
  .scroller {
    position: relative;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: $rem-2;
    &::-webkit-scrollbar {
      width: 4px;
      border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.25);
      border-radius: 1rem;
    }
    &.dt {
      &::-webkit-scrollbar-thumb {
        background: rgba(225, 225, 225, 0.25);
        border-radius: 1rem;
      }
    }
    @include xl {
      padding-right: calc(#{$rem-2} + 1px);
    }
    &.ios-spec {
      padding-right: $rem-8;
    }
    @media all and (min--moz-device-pixel-ratio: 0) {
      //only for firefox
      scrollbar-color: rgba(0, 0, 0, 0.25) transparent;
      &.dt {
        scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
      }
      scrollbar-width: thin;
      @include md {
        padding-right: $rem-1;
      }
      @include lg {
        padding-right: calc(#{$rem-1} + 1px);
      }
      @include xl {
        padding-right: calc(#{$rem-1} + 2px);
      }
      @include xxl {
        padding-right: calc(#{$rem-1} + 3px);
      }
      &.mac-moz-fix {
        padding-right: calc(#{$rem-10} + 3px);
        @include md {
          padding-right: calc(#{$rem-10} + 1px);
        }
        @include lg {
          padding-right: calc(#{$rem-10} + 2px);
        }
      }
    }
  }
  &.dt {
    background-color: $color-dt-card-base;
  }
  &.level-deep {
    background-color: darken($color-bg-base, 3%);
    &.dt {
      background-color: darken($color-dt-bg-base, 3%);
    }
  }
  &.level-ground {
    background-color: $color-bg-base;
    &.dt {
      background-color: $color-dt-bg-base;
    }
  }
  &.level-0 {
    background-color: $color-card-base;
    &.dt {
      background-color: $color-dt-card-base;
    }
  }
  &.level-1 {
    background-color: lighten($color-card-base, 0.5%);
    border: $rem-1 solid lighten($color-card-base, 2.5%);
    box-shadow: 0 $rem-1 $rem-3 rgba(0, 0, 0, 0.12),
      0 $rem-1 $rem-2 rgba(0, 0, 0, 0.24);
    &.dt {
      background-color: lighten($color-dt-card-base, 0.5%);
      border: $rem-1 solid lighten($color-dt-card-base, 2.5%);
    }
  }
  &.level-2 {
    background-color: lighten($color-card-base, 1%);
    border: $rem-1 solid lighten($color-card-base, 3%);
    box-shadow: 0 $rem-3 $rem-6 rgba(0, 0, 0, 0.16),
      0 $rem-3 $rem-6 rgba(0, 0, 0, 0.23);
    &.dt {
      background-color: lighten($color-dt-card-base, 1%);
      border: $rem-1 solid lighten($color-dt-card-base, 3%);
    }
  }
  &.level-3 {
    background-color: lighten($color-card-base, 1.5%);
    border: $rem-1 solid lighten($color-card-base, 3.5%);
    box-shadow: 0 $rem-10 $rem-20 rgba(0, 0, 0, 0.19),
      0 $rem-6 $rem-6 rgba(0, 0, 0, 0.23);
    &.dt {
      background-color: lighten($color-dt-card-base, 1.5%);
      border: $rem-1 solid lighten($color-dt-card-base, 3.5%);
    }
  }
  &.level-4 {
    background-color: lighten($color-card-base, 2%);
    border: $rem-1 solid lighten($color-card-base, 4%);
    box-shadow: 0 $rem-14 $rem-28 rgba(0, 0, 0, 0.25),
      0 $rem-10 $rem-10 rgba(0, 0, 0, 0.22);
    &.dt {
      background-color: lighten($color-dt-card-base, 2%);
      border: $rem-1 solid lighten($color-dt-card-base, 4%);
    }
  }
  &.level-5 {
    background-color: lighten($color-card-base, 3%);
    border: $rem-1 solid lighten($color-card-base, 5%);
    box-shadow: 0 $rem-18 $rem-40 rgba(0, 0, 0, 0.3),
      0 $rem-16 $rem-12 rgba(0, 0, 0, 0.22);
    &.dt {
      background-color: lighten($color-dt-card-base, 3%);
      border: $rem-1 solid lighten($color-dt-card-base, 5%);
    }
  }
  &.pure {
    border: none;
    background-color: transparent;
  }
}
</style>
