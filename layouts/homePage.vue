<template>
  <div class="bg-c1">
    <header class="flex poppins font-semibold  justify-between mb-[10vh] items-center md:px-[88px] pt-4">
      <h6 class="text-c5"><span class="text-b9">Tefly</span>Class</h6>
      <ul class="flex gap-[50%] ">
        <li>Modelo</li>
        <li>Sobre</li>
        <li>Contato</li>
      </ul>
      <ButtonDefault>
        LOGIN
      </ButtonDefault>
    </header>
    <slot> </slot>
    <footer class="min-h-[373px] flex justify-between bg-c11 px-[90px] pt-[98px]">
      <h6 class="text-c8 poppins font-semibold"><span class="text-b4">Tefly</span>Class</h6>
      <div></div>
    </footer>
  </div>
</template>