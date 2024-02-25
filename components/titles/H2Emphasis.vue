<template>
    <div class="relative">
        <div class="focusDecoration"></div>
        <h2
          class="text-[10vw] md:text-[64px] font-bold poppins leading-[12vw] md:leading-[72px] z-20 relative block text-c13"
        >
         <slot></slot>
        </h2>
      </div>
</template>

<style scoped>

.focusDecoration {
  position: absolute;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  top: -5px;
  left: -15px;
  background-color: #c1d4ff;
}
.focusDecorationBig::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 20px;
  border-radius: 5px;
  left: 30px;
  bottom:10px;
  background-color: #c1d4ff;
  z-index: -1;
}
@media(max-width:600px){
  .focusDecorationBig::before {
  content: "";
  width: 50vw;
  max-width: 300px;
  height: 20px;
  left: -50vw;
  bottom:10px;
  background-color: #c1d4ff;
  z-index: -1;
}
}
</style>