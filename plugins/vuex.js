import {createStore} from 'vuex'

const store = createStore({
    state:{
            count:10
        },
    
    mutations:{
        increment: function (state){
            state.count++
            console.log(state.count)
        }
    }
})

export default defineNuxtPlugin((nuxtApp)=>{nuxtApp.vueApp.use(store)})