<template>
    <article class="flex items-center flex-col">
        <section>
            <h1 class="text-4xl">Login</h1>
            <LoginForm class="w-[400px]"/>
            <button @click="nav">vamo</button>
        </section>
    </article>
</template>
<script>
definePageMeta({
    layout:false
})
export default{
    methods:{
        nav(){
            navigateTo('/')
        }
    }
}
</script>