// Originally created for cool.starter by Hugo Taschet
// https://github.com/Hugtas
# Exemple of menu with CPAD and TRACKTIP
<template>
  <div class="menu fluid">
    <CPadButton
      class="menu-item"
      v-for="(item, index) in menus"
      @mouseenter.native="() => $tracktip.on(item.title, $tracktip.positions.RIGHT)"
      @mouseleave.native="() => $tracktip.off()"
      :key="'desk-item-menu-' + index"
      :icon="item.icon"
      :active="isActive(item)"
      :special="item.special"
    />
  </div>
</template>

<script>
import menus from "~/configs/menus";
export default {
  data() {
    return {
      menus
    };
  },
  methods: {
    isActive(item) {
      //return this.$store.state.layout.stackedLayers[0].route == item.path;
      return this.$route.path == item.path;
    }
  }
};
</script>

<style lang="scss" scoped>
.menu {
  padding-top: $rem-16;
  //background-color: rgba(0, 255, 221, 0.144);
}
</style>