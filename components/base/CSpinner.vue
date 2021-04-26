// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
<template>
  <div
    class="c-spinner"
    :class="{
      [color]: true
    }"
  />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary"
    }
  }
};
</script>

<style lang="scss" scoped>
.c-spinner,
.c-spinner:after {
  border-radius: 50%;
  width: 1rem; //tomodify
  height: 1rem; //tomodify
}
.c-spinner {
  margin: auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999rem;
  border-top: 0.2rem solid rgba(128, 128, 128, 0.25);
  border-right: 0.2rem solid rgba(128, 128, 128, 0.25);
  border-bottom: 0.2rem solid rgba(128, 128, 128, 0.25);
  border-left: 0.2rem solid #ffffff;
  &.primary{
    border-left: 0.2rem solid $color-primary;
  }
  &.secondary{
    border-left: 0.2rem solid $color-secondary;
  }
  &.accent{
    border-left: 0.2rem solid $color-accent;
  }
  &.success{
    border-left: 0.2rem solid $color-success;
  }
  &.danger{
    border-left: 0.2rem solid $color-danger;
  }
  &.warning{
    border-left: 0.2rem solid $color-warning;
  }
  &.info{
    border-left: 0.2rem solid $color-info;
  }
  &.black{
    border-left: 0.2rem solid $color-black;
  }
  &.white{
    border-left: 0.2rem solid $color-white;
  }
  &.grey{
    border-left: 0.2rem solid $color-grey;
  }
  &.slot1{
    border-left: 0.2rem solid $color-slot1;
  }
  &.slot2{
    border-left: 0.2rem solid $color-slot2;
  }
  &.slot3{
    border-left: 0.2rem solid $color-slot3;
  }
  &.slot4{
    border-left: 0.2rem solid $color-slot4;
  }
  &.slot5{
    border-left: 0.2rem solid $color-slot5;
  }
  &.slot6{
    border-left: 0.2rem solid $color-slot6;
  }
  &.slot7{
    border-left: 0.2rem solid $color-slot7;
  }
  &.slot8{
    border-left: 0.2rem solid $color-slot8;
  }
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}
@-webkit-keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load8 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
