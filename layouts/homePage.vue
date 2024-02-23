<template>
  <div class="bg-c1">
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
              'md:w-[600px]',
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
              <li>Modelo</li>
              <li>Sobre</li>
              <li>Contato</li>
            </ul>
            <NuxtLink to="/login"><ButtonDefault> LOGIN </ButtonDefault></NuxtLink>
          </div>
        </div>
      </header>
    </div>
    <div :class="[{ hidden: onMenu }]"><slot> </slot></div>
    <footer
      :class="[
        { hidden: onMenu },
        'min-h-[373px]',
        'bg-c12',
        'px-[88px]',
        'relative',
        'pt-[98px]',
        'flex',
        'items-center',
        'flex-col',
      ]"
    >
      <div
        class="flex flex-col gap-[100px] sm:gap-0 w-full sm:flex-row justify-between"
      >
        <h6 class="text-c8 poppins font-semibold">
          <span class="text-b4">Tefly</span>Class
        </h6>
        <div class="flex flex-col md:flex-row gap-[100px] sm:gap-[200px]">
          <div class="flex">
            <hr
              class="transform rotate-90 w-10 border-2 border-c3 translate-y-4 rounded-xl"
            />
            <div class="flex flex-col">
              <h5 class="text-[24px] font-bold poppins text-b1">Sobre</h5>
              <ul
                class="text-c6 poppins font-semibold text-[16px] flex flex-col gap-[5px] mt-[10px]"
              >
                <li>Avaliações</li>
                <li>Atualizações</li>
                <li>Prova IA</li>
              </ul>
            </div>
          </div>
          <div class="flex mb-[100px] sm:mb-0">
            <hr
              class="transform rotate-90 w-10 border-2 border-c3 translate-y-4 rounded-xl"
            />
            <div class="flex flex-col">
              <h5 class="text-[24px] font-bold poppins text-b1">Contato</h5>
              <ul
                class="text-c6 poppins font-semibold text-[16px] flex flex-col gap-[5px] mt-[10px]"
              >
                <li>Linkedin</li>
                <li>teflyclass@gmail.com</li>
                <li>+55 87 99917-0852</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex absolute bottom-5 items-center">
        <p class="text-c6">Copyright &copy; 2024</p>
        <hr class="rotate-90 w-8 border-[1px] border-c8 rounded-xl" />
        <p class="text-c6">Desenvolvedor Gustavo Rodrigues</p>
      </div>
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