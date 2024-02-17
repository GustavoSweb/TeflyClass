<template>
  <article>
    <section class="flex items-center flex-col mb-[200px] px-[88px]">
      <section class="flex items-center flex-col">
        <h1 class="text-[96px] font-semibold poppins leading-[106.6px]">
          TeflyClass onde sua<br />vida fica mais facil<span class="text-b4"
            >.</span
          >
        </h1>
        <p class="poppins text-[20px]">
          Tenha conhecimento das atividades, projetos e conteúdos escolares!
        </p>
      </section>
      <section class="flex gap-4 mt-[40px]">
        <ButtonEmphasis> INICIAR </ButtonEmphasis>
        <ButtonDefault> Sou desenvolvedor </ButtonDefault>
      </section>
    </section>
    <section class="flex justify-end bg-c2 w-full px-[88px]">
      <section
        class="flex justify-end w-full max-w-[1050px] transform translate-y-[-100px] relative"
      >
        <div
          class="bg-white p-[22px] absolute top-1/3 left-[0%] w-[300px] rounded-2xl shadow-sm"
        >
          <hr class="bg-b8 w-[20px] h-1 rounded-full mb-3" />
          <h5 class="font-semibold poppins text-[24px] mb-2">
            Visualização de<br />
            atividades
            <svg
              class="inline ml-2"
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7467 8.56665C19.5583 3.48581 15.4417 0.333313 11 0.333313C6.55834 0.333313 2.44168 3.48581 0.253345 8.56665C0.193693 8.70333 0.162903 8.85085 0.162903 8.99998C0.162903 9.14911 0.193693 9.29663 0.253345 9.43331C2.44168 14.5141 6.55834 17.6666 11 17.6666C15.4417 17.6666 19.5583 14.5141 21.7467 9.43331C21.8063 9.29663 21.8371 9.14911 21.8371 8.99998C21.8371 8.85085 21.8063 8.70333 21.7467 8.56665ZM11 15.5C7.56584 15.5 4.31584 13.0191 2.44168 8.99998C4.31584 4.98081 7.56584 2.49998 11 2.49998C14.4342 2.49998 17.6842 4.98081 19.5583 8.99998C17.6842 13.0191 14.4342 15.5 11 15.5ZM11 4.66665C10.143 4.66665 9.30515 4.92079 8.59254 5.39694C7.87993 5.8731 7.32451 6.54987 6.99653 7.34168C6.66855 8.1335 6.58274 9.00479 6.74994 9.84537C6.91714 10.686 7.32985 11.4581 7.93588 12.0641C8.54191 12.6701 9.31404 13.0828 10.1546 13.25C10.9952 13.4173 11.8665 13.3314 12.6583 13.0035C13.4501 12.6755 14.1269 12.1201 14.603 11.4075C15.0792 10.6948 15.3333 9.85703 15.3333 8.99998C15.3333 7.85071 14.8768 6.74851 14.0641 5.93585C13.2515 5.12319 12.1493 4.66665 11 4.66665ZM11 11.1666C10.5715 11.1666 10.1526 11.0396 9.79628 10.8015C9.43997 10.5634 9.16226 10.225 8.99827 9.82913C8.83428 9.43322 8.79137 8.99758 8.87498 8.57728C8.95858 8.15699 9.16493 7.77093 9.46795 7.46792C9.77096 7.1649 10.157 6.95855 10.5773 6.87495C10.9976 6.79134 11.4333 6.83425 11.8292 6.99824C12.2251 7.16223 12.5635 7.43994 12.8015 7.79624C13.0396 8.15255 13.1667 8.57145 13.1667 8.99998C13.1667 9.57462 12.9384 10.1257 12.5321 10.532C12.1257 10.9384 11.5746 11.1666 11 11.1666Z"
                fill="#C1D4FF"
              />
            </svg>
          </h5>
          <p class="opensans">
            Com um sistema limpo e agradavel a plataforma conta com todas as
            atividades registradas.
          </p>
        </div>
        <div
          class="w-[922px] h-[515px] rounded-2xl border-[8px] border-c10 bg-c3"
        ></div>
      </section>
    </section>
    <section class="pt-[150px] bg-c2 px-[88px]">
      <div class="relative">
        <div class="focusDecoration"></div>
        <h2 class="text-[64px] font-bold poppins leading-[72px] z-20 relative block ">Sistemas avaliativos<br>e exploração<span class="text-b4"
            >.</span
          ></h2>
      </div>
     <div class="flex justify-center mt-[100px] pb-[100px]">
        <div class="flex w-full gap-[50px] max-w-[1000px]">
          <div class="w-full h-[200px] bg-[#FEFEFE] shadow-sm rounded-2xl ease-in-out hover:shadow-xl transform hover:translate-y-[-10px] duration-500"></div>
          <div class="w-full h-[200px] bg-[#FEFEFE] shadow-sm rounded-2xl ease-in-out hover:shadow-xl transform hover:translate-y-[-10px] duration-500"></div>
          <div class="w-full h-[200px] bg-[#FEFEFE] shadow-sm rounded-2xl ease-in-out hover:shadow-xl transform hover:translate-y-[-10px] duration-500"></div>
        </div>
     </div>
    </section>
  </article>
</template>
<script>
definePageMeta({
  layout: "home-page",
});
export default {};
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
.focusDecoration{
  position: absolute;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  top:-5px;
  left:-15px;
  background-color: #C1D4FF;
}
</style>
