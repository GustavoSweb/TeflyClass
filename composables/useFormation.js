export default function(){
    const math = ref(0)
    const exe = (num)=>{
        math.value = num + num
    }
    return {exe,math}
}