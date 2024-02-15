<template>
  <h1>PAGINA Principal{{ math }}{{ count }}</h1>
</template>
<script>
export default {
  created() {
    const { exe, math } = useFormation();
    this.math = math;
    exe(10);
  },
  data() {
    return {
      math: 0
    };
  },
  computed:{
    count(){
        return this.$store.state.count
    }
  }
};
</script>
