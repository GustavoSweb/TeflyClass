<template>
  <section class="flex flex-col items-center px-[30px] md:px-0">
    <div class="flex flex-col items-center pb-[100px]">
      <div class="flex max-w-[100vw] md:max-w-[1000px] p-4 md:p-[15px] gap-[50px] max-w-[1000px] overflow-x-scroll md:overflow-auto">
        <div
          class="p-[25px] flex flex-col gap-2 min-w-[300px] md:min-w-[0px] md:w-full h-[225px] bg-[#FEFEFE] shadow-sm rounded-2xl ease-in-out transform duration-500"
          v-for="item in items"
          :key="item.title"
          :ref="item.url"
          @mouseenter="alterSlider(item.url)"
        >
          <div>
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.8326 6.74996C28.4433 6.74996 28.0698 6.9036 27.7945 7.1771C27.5191 7.45059 27.3644 7.82152 27.3644 8.20829V22.7916C27.3644 23.9519 26.9004 25.0647 26.0743 25.8852C25.2483 26.7057 24.128 27.1666 22.9598 27.1666H8.27756C7.88817 27.1666 7.51472 27.3203 7.23938 27.5938C6.96403 27.8673 6.80934 28.2382 6.80934 28.625C6.80934 29.0117 6.96403 29.3827 7.23938 29.6562C7.51472 29.9296 7.88817 30.0833 8.27756 30.0833H22.9598C24.9067 30.0833 26.774 29.3151 28.1507 27.9476C29.5274 26.5802 30.3009 24.7255 30.3009 22.7916V8.20829C30.3009 7.82152 30.1462 7.45059 29.8708 7.1771C29.5955 6.9036 29.222 6.74996 28.8326 6.74996ZM24.428 19.875V5.29163C24.428 4.1313 23.9639 3.01851 23.1379 2.19803C22.3119 1.37756 21.1915 0.916626 20.0233 0.916626H5.34112C4.17293 0.916626 3.05259 1.37756 2.22656 2.19803C1.40052 3.01851 0.936462 4.1313 0.936462 5.29163V19.875C0.936462 21.0353 1.40052 22.1481 2.22656 22.9686C3.05259 23.789 4.17293 24.25 5.34112 24.25H20.0233C21.1915 24.25 22.3119 23.789 23.1379 22.9686C23.9639 22.1481 24.428 21.0353 24.428 19.875ZM12.6822 3.83329H15.6187V10.9208L15.0901 10.4833C14.8263 10.265 14.4938 10.1455 14.1504 10.1455C13.8071 10.1455 13.4746 10.265 13.2108 10.4833L12.6822 10.9208V3.83329ZM3.8729 19.875V5.29163C3.8729 4.90485 4.02759 4.53392 4.30294 4.26043C4.57828 3.98694 4.95173 3.83329 5.34112 3.83329H9.74578V14.0416C9.74577 14.3204 9.8262 14.5934 9.97755 14.8281C10.1289 15.0629 10.3448 15.2497 10.5998 15.3663C10.8547 15.4829 11.1379 15.5245 11.4159 15.4862C11.6939 15.4479 11.9551 15.3312 12.1683 15.15L14.1504 13.502L16.1325 15.15C16.3985 15.3759 16.7369 15.5 17.0869 15.5C17.2993 15.4985 17.5092 15.4538 17.7035 15.3687C17.9584 15.2516 18.1741 15.0643 18.325 14.8291C18.4759 14.5938 18.5558 14.3206 18.5551 14.0416V3.83329H20.0233C20.4127 3.83329 20.7862 3.98694 21.0615 4.26043C21.3369 4.53392 21.4915 4.90485 21.4915 5.29163V19.875C21.4915 20.2617 21.3369 20.6327 21.0615 20.9062C20.7862 21.1796 20.4127 21.3333 20.0233 21.3333H5.34112C4.95173 21.3333 4.57828 21.1796 4.30294 20.9062C4.02759 20.6327 3.8729 20.2617 3.8729 19.875Z"
                fill="#717BDC"
              />
            </svg>
          </div>
          <div>
            <h4 class="text-[34px] poppins text-c13 font-semibold">
              {{ item.title }}
            </h4>
            <p class="text-[16px] opensans text-c7 mt-1">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="flex justify-center">
    <div
      :class="[
        'w-full',
        'max-w-[1104px]',
        'border-2',
        'border-c6',
        'rounded-2xl',
        'transform',
        'translate-y-[-50px]',
        'md:h-[642px]',
        'h-[400px]',
        'mx-[30px]',
        `${itemSelect.url}`,
      ]"
    ></div>
  </div>
</template>
<script>
export default {
mounted(){
  this.$refs['imgCarousel1'][0].classList.add('cardSelect')
},
  data() {
    return {
      items: [
        {
          url: "imgCarousel1",
          title: "Avaliação",
          description:
            "Tenha conhecimento da sua situação escolar, e valores da sua primeira nota!",
        },
        {
          url: "imgCarousel2",
          title: "Conteudos",
          description:
            "Tenha uma visão geral de tudo passado nas aulas da matéria! e sugestões de videos",
        },
        {
          url: "imgCarousel3",
          title: "Arquivos",
          description:
            "Tenha rapidamente acesso aos arquivos da aula! fotos e PDFs",
        },
      ],
      itemSelect: { url: "imgCarousel1" },
    };
  },
  methods: {
    async alterSlider(url) {
        this.$refs[this.itemSelect.url][0].classList.remove('cardSelect')
        this.$refs[url][0].classList.add('cardSelect')
        this.itemSelect.url = url;
    },
  },
};
</script>
<style scoped>
.imgCarousel1 {
  background-image: url("https://picsum.photos/1920/1080?random=1");
}
.imgCarousel2 {
  background-image: url("https://picsum.photos/1920/1080?random=2");
}
.imgCarousel3 {
  background-image: url("https://picsum.photos/1920/1080?random=3");
}
.cardSelect{
    transform: translateY(-15px);
    box-shadow: 0px 6px 20px -2px #00000015;
}
@media(max-width:600px){
  .cardSelect{
    transform: translateY(0px);
  }
}
</style>
