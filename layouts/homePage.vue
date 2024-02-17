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
    <footer></footer>
  </div>
</template>