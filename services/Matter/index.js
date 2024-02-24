class Matter{
    constructor(routerDefault, token){
        this.routerDefault = routerDefault
        this.token = routerDefault
    }
    async GetAll(){
        const res = await fetch(`${this.routerDefault}/matter`,{method:'GET'})
        return await res.json()
    }
}
export default Matter