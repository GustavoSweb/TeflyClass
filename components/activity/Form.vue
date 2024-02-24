<template>
  <section class="flex flex-col gap-4">
    <label for="">Titulo</label>
    <input
      type="text"
      name="plate"
      v-model="title"
      class="border border-[#00000040]"
    />
    <label for="">Descrição</label>
    <textarea
      name="description"
      id=""
      cols="30"
      rows="10"
      class="border border-[#00000040]"
      v-model="description"
    ></textarea>
    <div class="flex gap-1">
      <div class="flex w-1/2">
        <label for="" class="mr-2">Envio</label>
        <input
          type="datetime-local"
          name="shipping"
          v-model="shipping"
          class="flex-1 border border-[#00000040]"
        />
      </div>
      <div class="flex w-1/2">
        <label for="" class="mr-2">Entrega</label>
        <input
          type="datetime-local"
          name="delivery"
          v-model="delivery"
          class="flex-1 border border-[#00000040]"
        />
      </div>
    </div>
    <select name="" id="" v-model="matterSelect">
      <option :value="matter.id" v-for="matter in matters" :key="matter.id">{{ matter.name }}</option>
    </select>
    <div class="flex gap-5 flex-wrap">
      <div v-for="classroom in classrooms" :key="classroom.id" class="flex gap-2 items-center">
        <input type="checkbox" :value="classroom.id" @click="classroomSelectEvent">
        <label for="">Sala {{ classroom.num }}</label>
      </div>
    </div>
    <div
      @drop.prevent="dropFileOn"
      @dragover.prevent
      class="w-full h-[100px] bg-[#00000020] flex items-center justify-center"
    >
      Arraste e solte o arquivo nesta area
      <slot></slot>
    </div>
    <div>
      <button
        @click="SendForm"
        class="px-6 py-3 rounded-full bg-black text-white"
      >
        REGISTRAR
      </button>
    </div>
  </section>
</template>

<script>
import Services from '~/services/index';
export default {
  data() {
    return {
      title: "",
      description: "",
      delivery: "",
      shipping: "",
      file: "",
      matters: [],
      matterSelect: '',
      classrooms:[],
      classroomsSelect:[]
    };
  },
  async created(){
    try{
      this.matters = await Services.Matter.GetAll()
      this.classrooms = await Services.Classroom.GetAll()
    }catch(err){
      console.error(err)
    }
  },
  methods: {
    classroomSelectEvent(element){
      if(!element.target.value) return
      this.classroomsSelect.push(element.target.value)
    },
    dropFileOn(e) {
      this.file = e.dataTransfer.files[0];
    },
    async SendForm() {
      const res = await Services.Activity.Create({
          title: this.title,
          description: this.description,
          delivery: this.delivery,
          shipping: this.shipping,
          bimester_id: 1,
          matter_id: this.matterSelect,
          classrooms:this.classroomsSelect
        })
      console.log(this.file);
      const formData = new FormData();
      formData.append("file", this.file);
      formData.append("idRelation", res.activity.id);
      formData.append("type", "activity");
      const upload = {
        method: "POST",
        body: formData,
      };
      await $fetch("http://localhost:8081/archive", upload);
      
    },
  },
};
</script>
