<template>
    <div class="bg-c1 overflow-hidden">
      <div :class="[{ menuOn: onMenu }]">
      <header
        :class="[
          'flex',
          'poppins',
          'font-semibold',
          {
            'mb-[10vh] justify-between items-center': !onMenu,
            'flex-col gap-[50px]': onMenu,
          },
          'px-[10px]',
          'md:px-[88px]',
          'pt-4',
        ]"
      >
        <div class="flex justify-between w-full">
          <h6 class="text-c5"><span class="text-b9">Tefly</span>Class</h6>
          <div @click="alterStatusMenu"
            :class="['md:hidden', { '': onMenu }, 'z-40', 'gap-[5px]', 'flex', 'flex-col']">
            <hr :class="['w-7','border-2','border-c10','rounded-xl','transform','transition-all','duration-500', {'rotate-[-45deg] translate-y-[9px]':onMenu}]"/>
            <hr :class="['w-7','border-2','border-c10','rounded-xl','transition-all','duration-500', {'opacity-0':onMenu}]"/>
            <hr :class="['w-7','border-2','border-c10','rounded-xl','transform','transition-all','duration-500', {'rotate-[45deg] translate-y-[-8px]':onMenu}]"/>
          </div>
        </div>
        <div :class="[{ 'flex justify-center w-full': onMenu }]">
          <div
            :class="[
              'md:w-[800px]',
              {
                'hidden items-center': !onMenu,
                'flex flex-col gap-[30px] w-[90%]': onMenu,
              },
              'md:flex',
              'justify-between',
            ]"
          >
            <ul
              :class="['flex', 'gap-[50%]', 'text-c12', { 'flex-col': onMenu }]"
            >
              <li>Calendário</li>
              <li>Conteudos</li>
              <li class="whitespace-nowrap">Provas IA</li>
            </ul>
            <NuxtLink to="/login"><ButtonDefault> SUAS NOTAS </ButtonDefault></NuxtLink>

          </div>
        </div>
      </header>
    </div>
    <div :class="[{ hidden: onMenu }]"><slot> </slot></div>
        <footer>

        </footer>
    </div>
</template>
<script>
export default {
  data() {
    return {
      onMenu: false,
    };
  },
  methods: {
    alterStatusMenu() {
      this.onMenu = !this.onMenu;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins");

.opensans {
  font-family: "Open Sans", sans-serif;
}
.poppins {
  font-family: "Poppins";
}
.menuOn {
  background-color: white !important;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 40;
}
</style>