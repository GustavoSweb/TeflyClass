<template>
    <section class="flex flex-col gap-4">
        <label for="">Matricula</label>
        <input type="text" name="plate" v-model="plate" class="border border-[#00000040]">
        <label for="">Senha</label>
        <input type="password" name="password" v-model="password">
        <div><button @click="SendForm" class="px-6 py-3 rounded-full bg-black text-white">ENTRAR</button></div>
    </section>
</template>
<script>
export default {
    data(){
        return{
            plate:'',
            password:''
        }
    },
    methods:{
        SendForm: function(){
            this.$store.commit('increment')
            console.log('tett')
        }
    }
}
</script>
