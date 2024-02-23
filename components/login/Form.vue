<template>
    <section class="flex flex-col gap-4 max-w-[95%] md:max-w-[100%]">
        <label for="" class="text-c10 poppins font-bold">Matricula</label>
        <input type="text" name="plate" v-model="plate" class="h-[52px] bg-c1 w-full rounded-2xl px-[18px]" placeholder="Digite o numero da matricula">
        <label for="" class="text-c10 poppins font-bold">Senha</label>
        <input type="password" name="password" v-model="password" placeholder="Digite sua senha..."  class="px-[18px] h-[52px] bg-c1 w-full rounded-2xl">
        <small class="text-c8">Esqueceu a senha? <span class="text-b4">click aqui</span></small>
        <div class="mt-[40px]">
            <ButtonEmphasis>ENTRAR</ButtonEmphasis>
        </div>
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
