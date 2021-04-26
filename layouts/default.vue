// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div
    class="default"
    @mousemove="e => handleMouseMove(e)"
  >
    <!-- TOOLTIP USED AS TRACKTIP ALWAYS HERE -->
    <transition name="tooltip-transition">
      <CTooltip v-if="$store.state.layout.tooltipIsActive" />
    </transition>
    <div class="content">
      <Nuxt />
    </div>
  </div>
</template>

<script>
// import pagesConfig from "~/configs/pages";
export default {
  head() {
    return {
      bodyAttrs: {
        class: this.$dt()
      }
    };
  },
  // middleware: "isauth",
  data() {
    return {};
  },
  methods: {
    handleMouseMove(e) {
      if (this.$store.state.layout.tooltipIsActive) { //Tracktip handler
        this.$store.dispatch("layout/mooveTooltip", {
          mouseX: e.clientX,
          mouseY: e.clientY
        });
      }
    }
  },
};
</script>

<style lang="scss">
html {
  @include fullscreen;
  font-family: OpenSans, "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 16px;
  @include xl {
    font-size: 18px;
  }
  @include xxl {
    font-size: 20px;
  }
  @include xxxl {
    font-size: 22px;
  }
}
body {
  @extend .bg-color-base;
  @include fullscreen;
  width: 100vw;
  position: relative;
  overflow: hidden;
  #__nuxt {
    @include fullscreen;
    min-height: 100%;
    #__layout {
      @include fullscreen;
      min-height: 100%;
      .default {
        @include flex-row_start_start;
        @include fullscreen;
        min-height: 100%;
        // padding-left: $rem-16;
        padding-right: $rem-16;
        //padding-top: $rem-64; //add 32px
        padding-bottom: $rem-16;
        .content {
          @include flex-col_start_start;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
*,
*::before,
*::after {
  @extend .trans-color;
  box-sizing: border-box;
  margin: 0;
  font-family: OpenSans, "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Helvetica Neue", Arial, sans-serif;
}
//TODO headline sizes
h1,
h2,
h3,
h4,
h5,
h6,
p,
span,
a {
  @extend .color-base;
}
a {
  color: white;
  text-decoration: none;
}
h2 {
  font-weight: normal;
}
.panels-container {
  width: 100%;
  height: calc(100% - #{$rem-64});
  // margin-left: 60px;
}
</style>
