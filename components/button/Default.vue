<template>
  <button
    @mouseleave="hoverButtonOver"
    @mouseenter="hoverButton"
    :class="[
      'px-[24px]',
      'py-[12px]',
      'bg-b1',
      'border-2',
      'border-c2',
      'rounded-full',
      'latter-2',
      'opensans',
      'font-bold',
      'transition-all',
      'duration-300',
      {
        'text-c8': !hover,
        'text-c13': hover,
      },
    ]"
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