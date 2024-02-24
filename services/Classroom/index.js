class Classroom{
    constructor(routerDefault, token){
        this.routerDefault = routerDefault
        this.token = routerDefault
    }
    async GetAll(){
        const res = await fetch(`${this.routerDefault}/classroom`,{method:'GET'})
        return await res.json()
    }
}
export default Classroom