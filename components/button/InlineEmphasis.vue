<template>
  <button
    class="text-b8 flex gap-3 items-center latter-2 font-bold opensans tracking-wider"
    @mouseleave="hoverButtonOver"
    @mouseenter="hoverButton"
  >
    <slot> </slot>
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      :class="[
        'transform',
        'transition-all',
        'duration-300',
        { 'translate-x-[20px]': hover, 'translate-x-[0px]': !hover },
      ]"
    >
      <path
        d="M16.9267 10.1554C16.883 10.0429 16.8176 9.9401 16.7342 9.85292L12.1508 5.26958C12.0654 5.18412 11.9639 5.11632 11.8522 5.07006C11.7406 5.02381 11.6209 5 11.5 5C11.2559 5 11.0218 5.09697 10.8492 5.26958C10.7637 5.35505 10.6959 5.45652 10.6496 5.56819C10.6034 5.67986 10.5796 5.79955 10.5796 5.92042C10.5796 6.16453 10.6766 6.39864 10.8492 6.57125L13.8742 9.58708H1.41667C1.17355 9.58708 0.940394 9.68366 0.768486 9.85557C0.596577 10.0275 0.5 10.2606 0.5 10.5038C0.5 10.7469 0.596577 10.98 0.768486 11.1519C0.940394 11.3238 1.17355 11.4204 1.41667 11.4204H13.8742L10.8492 14.4363C10.7632 14.5215 10.6951 14.6229 10.6485 14.7346C10.602 14.8463 10.578 14.9661 10.578 15.0871C10.578 15.2081 10.602 15.3279 10.6485 15.4396C10.6951 15.5513 10.7632 15.6527 10.8492 15.7379C10.9344 15.8238 11.0358 15.892 11.1475 15.9386C11.2592 15.9851 11.379 16.0091 11.5 16.0091C11.621 16.0091 11.7408 15.9851 11.8525 15.9386C11.9642 15.892 12.0656 15.8238 12.1508 15.7379L16.7342 11.1546C16.8176 11.0674 16.883 10.9646 16.9267 10.8521C17.0184 10.6289 17.0184 10.3786 16.9267 10.1554Z"
        fill="#5252D0"
      />
    </svg>
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