<template>
  <button
    :class="[
      'px-[24px]',
      'py-[12px]',

      'text-white',
      'rounded-full',
      'latter-2',
      'font-bold',
      'opensans',
      'tracking-wider',
      'transition-all',
      'duration-300',
      {
        'bg-b9': !hover,
        'bg-c13': hover,
        'translate-y-[-5px]': hover,
        'shadow-xl': hover,
        'shadow-transparent': !hover,
        'translate-y-[0px]': !hover,
      },
    ]"
    @mouseenter="hoverButton"
    @mouseleave="hoverButtonOver"
  >
    <slot> </slot>
  </button>
</template>
<script>
export default {
  methods: {
    hoverButton() {
      this.hover = true;
    },
    hoverButtonOver() {
      this.hover = false;
    },
  },
  data() {
    return {
      hover: false,
    };
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
.opensans {
  font-family: "Open Sans", sans-serif;
}
</style>