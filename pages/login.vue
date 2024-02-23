<template>
    <article class="flex items-center  bg-c1 w-[100vw] h-[100vh]  justify-center">
        <section class="p-[30px] md:p-[60px] bg-c2 shadow-sm rounded-2xl w-[95%] md:w-auto">
            <div class="relative"> <div class="focusDecorationBottom"></div><h2 class="text-[64px] poppins text-c13 font-bold z-20 relative block">Login</h2></div>
            <LoginForm class="w-[400px] mt-[75px]"/>
        </section>
    </article>
</template>
<script>
definePageMeta({
    layout:'login-page'
})
export default{
    methods:{
        nav(){
            navigateTo('/')
        }
    }
}
</script>
<style>
.focusDecorationBottom {
  position: absolute;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 20px;
  bottom: 5px;
  left: -15px;
  background-color: #c1d4ff;
}
.opensans {
  font-family: "Open Sans", sans-serif;
}
.poppins {
  font-family: "Poppins";
}
</style>