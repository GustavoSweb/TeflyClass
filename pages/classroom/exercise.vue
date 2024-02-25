<template>
  <article
    class="bg-c1 pt-[100px] "
  >
    <section class="flex justify-between flex-col md:flex-row md:items-center px-[20px] md:px-[88px]">
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
    <section class="flex justify-center items-center bg-c2 px-[20px] md:px-[88px] mt-[112px]">
      <div class="flex gap-5 transform translate-y-[-31px] w-full md:max-w-[600px] flex-col md:flex-row">
        <div
          class="w-full shadow-sm rounded-2xl md:w-[439px] bg-white h-[62px]"
        >
    <input type="text" class="w-full px-[25px] h-full bg-transparent rounded-2xl text-c10" placeholder="Digite oque você procura">
    </div>
        <div
          class="w-[20%] shadow-sm rounded-2xl md:w-[141px] bg-white h-[62px]"
        ></div>
      </div>
    </section>
    <section class="bg-c2 px-[20px] md:px-[88px] flex justify-center text-c9 pt-[50px]">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 min-w-[348.56px] gap-[50px]">
        <div class="w-full md:w-[348.56px] bg-white shadow-sm rounded-2xl p-[26.54px] box-border" v-for="activity in activities" :key="activity.id">
          <p>Atividade de {{ UpperOneLatter(activity.name_matter) }}</p>
          <h5 class=" h-[80px] poppins mt-[12px] text-[24px] font-bold text-c12 leading-[31.2px]">{{ activity.title }} </h5>
          <p class="h-[130px]">{{ MaxDescription(activity.description) }}</p>
          <ButtonEmphasis>DETALHES</ButtonEmphasis>
        </div>
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
    };
  },
  computed:{
    UpperOneLatter(){
      return string => {
      string = string.split('')
      string.splice(0,1,string[0].toUpperCase())
      return string.join('')
      }
    },
    MaxDescription(){
      return string => {
      
      return string.slice(0,130)
      }
    }
  },
  watch: {
    activities() {
      this.UpdateDates();
    },
  },
};
</script>
