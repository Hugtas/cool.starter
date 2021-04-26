// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div
    class="c-tooltip"
    :class="{ [$dt()]: true }"
    :style="{
      transform: `translateY(calc(${positionYValue} + ${translationYValue}rem) ) translateX(calc(${positionXValue} + ${translationXValue}rem) )`
    }"
  >
    <CText span size="sm">{{ $store.state.layout.tooltipContent }}</CText>
  </div>
</template>

<script>
export default {
  methods: {
    trackMouse(event) {
      console.log(event);
    }
  },
  computed: {
    positionYValue() {
      switch (this.$store.state.layout.tooltipPosition) {
        case this.$tracktip.positions.TOP:
          return "0%";
        case this.$tracktip.positions.RIGHT:
          return "-25%";
        case this.$tracktip.positions.BOTTOM:
          return "200%";
        case this.$tracktip.positions.LEFT:
          return "-25%";
      }
    },
    positionXValue() {
      switch (this.$store.state.layout.tooltipPosition) {
        case this.$tracktip.positions.TOP:
          return "-50%";
        case this.$tracktip.positions.RIGHT:
          return "1rem";
        case this.$tracktip.positions.BOTTOM:
          return "-50%";
        case this.$tracktip.positions.LEFT:
          return "-100% - 1rem";
      }
    },
    translationYValue() {
      let divider =
        window.innerWidth <= 640
          ? 16
          : window.innerWidth <= 768
          ? 16
          : window.innerWidth <= 1024
          ? 16
          : window.innerWidth <= 1280
          ? 16
          : window.innerWidth <= 1920
          ? 18
          : window.innerWidth < 2560
          ? 20
          : window.innerWidth >= 2560
          ? 22
          : 22;

      //Get divider from breakpoints.scss and rem declared in style
      //return this.$store.state.layout.tooltipYTranslation / divider;
      return (
        this.$store.state.layout.tooltipYTranslation / divider +
        (this.$store.state.layout.tooltipPosition ==
          this.$tracktip.positions.TOP ||
        this.$store.state.layout.tooltipPosition ==
          this.$tracktip.positions.BOTTOM
          ? -2
          : 0)
      );
    },
    translationXValue() {
      let divider =
        window.innerWidth <= 640
          ? 16
          : window.innerWidth <= 768
          ? 16
          : window.innerWidth <= 1024
          ? 16
          : window.innerWidth <= 1280
          ? 16
          : window.innerWidth <= 1920
          ? 18
          : window.innerWidth < 2560
          ? 20
          : window.innerWidth >= 2560
          ? 22
          : 22;

      return this.$store.state.layout.tooltipXTranslation / divider;
    }
  },
};
</script>

<style lang="scss" scoped>
.c-tooltip {
  @include flex-col_center_center;
  z-index: 5000; //TODO TOOLTIP MUST ALWAYS BE ON TOP
  position: absolute;
  padding: $rem-4 $rem-8;
  background-color: darken($color-bg-base, 3%);
  border: $rem-1 solid lighten($color-bg-base, 3%);
  &.dt {
    background-color: darken($color-dt-bg-base, 3%);
    border: $rem-1 solid lighten($color-dt-bg-base, 3%);
  }
  border-radius: $rem-4;
  // &::before {
  //   top: calc(100% - #{$rem-4});
  //   left: calc(50% - #{$rem-4});
  //   height: $rem-8;
  //   width: $rem-8;
  //   position: absolute;
  //   content: "";
  //   background-color: darken($color-dt-bg-base, 3%); //Todo light theme
  //   transform: rotate3d(0, 0, 1, 45deg);
  //   border-bottom-right-radius: $rem-2;
  //   //background-color: red;
  // }
}
</style>
