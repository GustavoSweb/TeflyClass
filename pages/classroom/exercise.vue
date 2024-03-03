<template>
  <article class="bg-c1 pt-[100px]">
    <section
      class="flex justify-between flex-col md:flex-row md:items-center px-[20px] md:px-[88px]"
    >
      <section class="max-w-[500px] mb-[50px] md:mb-0">
        <TitlesH2Emphasis class="poppins">Calendário</TitlesH2Emphasis>
        <p class="text-c10 text-[20px] opensans mt-[10px] md:mt-0">
          Quer se atualizar? Utilize filtros! com eles você pode achar as suas
          necessidades
        </p>
      </section>
      <section class="w-[100%] md:w-[300px]">
        <VDatePicker :attributes="activitiesDates" expanded />
      </section>
    </section>
    <section
      class="flex justify-center items-center bg-c2 px-[20px] md:px-[88px] mt-[112px]"
    >
      <div
        class="flex gap-5 transform translate-y-[-31px] w-full md:max-w-[600px] flex-col md:flex-row"
      >
        <div
          class="w-full shadow-sm rounded-2xl px-[25px] md:w-[439px] bg-white h-[62px] flex items-center gap-5"
        >
          <input
            type="text"
            class="w-full h-full bg-transparent rounded-2xl text-c10 h-[60%] px-[25px]"
            placeholder="Digite oque você procura"
            v-model="text_search"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.9473 18.6997 5.81278 16.9855 4.27664C15.2714 2.7405 13.0338 1.91951 10.7329 1.98247C8.43207 2.04543 6.24275 2.98756 4.61517 4.61514C2.98759 6.24272 2.04546 8.43203 1.9825 10.7329C1.91954 13.0338 2.74053 15.2714 4.27667 16.9855C5.81281 18.6997 7.94733 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7737 20.4936 21.8481 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5065 21.8481 21.6171 21.7737 21.71 21.68C21.8903 21.4935 21.991 21.2443 21.991 20.985C21.991 20.7257 21.8903 20.4765 21.71 20.29ZM11 18C9.61556 18 8.26218 17.5895 7.11103 16.8203C5.95989 16.0511 5.06268 14.9579 4.53287 13.6788C4.00306 12.3997 3.86443 10.9922 4.13453 9.63436C4.40463 8.2765 5.07131 7.02922 6.05028 6.05025C7.02925 5.07128 8.27653 4.4046 9.63439 4.1345C10.9923 3.8644 12.3997 4.00303 13.6788 4.53284C14.9579 5.06265 16.0511 5.95986 16.8203 7.111C17.5895 8.26215 18 9.61553 18 11C18 12.8565 17.2625 14.637 15.9498 15.9497C14.637 17.2625 12.8565 18 11 18Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          class="w-[20%] shadow-sm rounded-2xl md:w-[141px] bg-white h-[62px] flex items-center gap-5 justify-center md:justify-between px-[25px]"
        >
          <p class="text-c9 hidden md:block">Filtros</p>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 4H4V1C4 0.734784 3.89464 0.48043 3.70711 0.292893C3.51957 0.105357 3.26522 0 3 0C2.73478 0 2.48043 0.105357 2.29289 0.292893C2.10536 0.48043 2 0.734784 2 1V4H1C0.734784 4 0.48043 4.10536 0.292893 4.29289C0.105357 4.48043 0 4.73478 0 5C0 5.26522 0.105357 5.51957 0.292893 5.70711C0.48043 5.89464 0.734784 6 1 6H5C5.26522 6 5.51957 5.89464 5.70711 5.70711C5.89464 5.51957 6 5.26522 6 5C6 4.73478 5.89464 4.48043 5.70711 4.29289C5.51957 4.10536 5.26522 4 5 4ZM3 8C2.73478 8 2.48043 8.10536 2.29289 8.29289C2.10536 8.48043 2 8.73478 2 9V19C2 19.2652 2.10536 19.5196 2.29289 19.7071C2.48043 19.8946 2.73478 20 3 20C3.26522 20 3.51957 19.8946 3.70711 19.7071C3.89464 19.5196 4 19.2652 4 19V9C4 8.73478 3.89464 8.48043 3.70711 8.29289C3.51957 8.10536 3.26522 8 3 8ZM10 16C9.73478 16 9.48043 16.1054 9.29289 16.2929C9.10536 16.4804 9 16.7348 9 17V19C9 19.2652 9.10536 19.5196 9.29289 19.7071C9.48043 19.8946 9.73478 20 10 20C10.2652 20 10.5196 19.8946 10.7071 19.7071C10.8946 19.5196 11 19.2652 11 19V17C11 16.7348 10.8946 16.4804 10.7071 16.2929C10.5196 16.1054 10.2652 16 10 16ZM19 8H18V1C18 0.734784 17.8946 0.48043 17.7071 0.292893C17.5196 0.105357 17.2652 0 17 0C16.7348 0 16.4804 0.105357 16.2929 0.292893C16.1054 0.48043 16 0.734784 16 1V8H15C14.7348 8 14.4804 8.10536 14.2929 8.29289C14.1054 8.48043 14 8.73478 14 9C14 9.26522 14.1054 9.51957 14.2929 9.70711C14.4804 9.89464 14.7348 10 15 10H19C19.2652 10 19.5196 9.89464 19.7071 9.70711C19.8946 9.51957 20 9.26522 20 9C20 8.73478 19.8946 8.48043 19.7071 8.29289C19.5196 8.10536 19.2652 8 19 8ZM17 12C16.7348 12 16.4804 12.1054 16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13V19C16 19.2652 16.1054 19.5196 16.2929 19.7071C16.4804 19.8946 16.7348 20 17 20C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V13C18 12.7348 17.8946 12.4804 17.7071 12.2929C17.5196 12.1054 17.2652 12 17 12ZM12 12H11V1C11 0.734784 10.8946 0.48043 10.7071 0.292893C10.5196 0.105357 10.2652 0 10 0C9.73478 0 9.48043 0.105357 9.29289 0.292893C9.10536 0.48043 9 0.734784 9 1V12H8C7.73478 12 7.48043 12.1054 7.29289 12.2929C7.10536 12.4804 7 12.7348 7 13C7 13.2652 7.10536 13.5196 7.29289 13.7071C7.48043 13.8946 7.73478 14 8 14H12C12.2652 14 12.5196 13.8946 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13C13 12.7348 12.8946 12.4804 12.7071 12.2929C12.5196 12.1054 12.2652 12 12 12Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </section>
    <section
      class="bg-c2 px-[20px] md:px-[88px] flex justify-center text-c9 pt-[50px]"
    >
      <div
        class="grid md:grid-cols-2 lg:grid-cols-3 min-w-[348.56px] gap-[50px]"
        v-if="activities.length > 0"
      >
        <div
          class="w-full md:w-[348.56px] bg-white shadow-sm rounded-2xl p-[26.54px] box-border"
          v-for="activity in activities"
          :key="activity.id"
        >
          <p>Atividade de {{ UpperOneLatter(activity.name_matter) }}</p>
          <h5
            class="h-[80px] poppins mt-[12px] text-[24px] font-bold text-c12 leading-[31.2px]"
          >
            {{ activity.title }}
          </h5>
          <p class="h-[130px]">{{ MaxDescription(activity.description) }}</p>
          <ButtonEmphasis>DETALHES</ButtonEmphasis>
        </div>
      </div>
      <div v-else>
        <h3>Não foi encontrado nenhuma atividade</h3>
      </div>
    </section>
  </article>
</template>

<script>
import Services from "~/services/index.js";
import DatesExercise from "~/factory/DatesExercise.js";
import Activity from "~/services/Activity";
export default {
  async created() {
    try {
      this.activities = await Services.Activity.GetAll({
        finished: "",
        matters: [],
        bimester_id: "",
      });
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    UpdateDates() {
      this.activitiesDates[0].dates = DatesExercise.Format(this.activities);
    },
  },
  data() {
    return {
      activitiesDates: [{ dot: true, dates: [new Date()] }],
      activities: [],
      text_search: "",
    };
  },
  computed: {
    UpperOneLatter() {
      return (string) => {
        string = string.split("");
        string.splice(0, 1, string[0].toUpperCase());
        return string.join("");
      };
    },
    MaxDescription() {
      return (string) => {
        return string.slice(0, 130);
      };
    },
  },
  watch: {
    activities() {
      this.UpdateDates();
    },
    async text_search() {
      const activity_search = await Services.Activity.Search(this.text_search);
      if (activity_search.length <= 0) return (this.activities = []);
      this.activities = activity_search;
    },
  },
};
</script>
