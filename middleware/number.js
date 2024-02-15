export default function number(to, from){
    const id = to.params.id
    if(isNaN(id) || id < 0){
        return navigateTo('/')
    }
}