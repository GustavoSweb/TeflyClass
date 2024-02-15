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
  export default {
    data() {
      return {
        title: "",
        description: "",
        delivery: "",
        shipping: "",
        file: "",
      };
    },
    methods: {
      dropFileOn(e) {
        this.file = e.dataTransfer.files[0];
      },
      async SendForm() {
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: this.title,
            description: this.description,
            delivery: new Date(this.delivery),
            shipping: new Date(this.shipping),
            bimester_id: 1,
            matter_id: 1,
          }),
        };
        const res = await $fetch("http://localhost:8081/activity", options);
        console.log(this.file)
        const formData = new FormData();
formData.append('file', this.file);
formData.append('idRelation', res.activity.id);
formData.append('type', 'activity');
        const upload = {
          method: "POST",
          body: formData
          }
          await $fetch("http://localhost:8081/archive", upload);
      },
    },
  };
  </script>
  