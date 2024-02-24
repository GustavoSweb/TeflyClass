class Activity{
    constructor(routerDefault, token){
        this.routerDefault = routerDefault
        this.token = routerDefault
    }
    async Create({bimester_id, shipping, title,description,delivery,matter_id, classrooms}){
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              description,
              delivery: new Date(delivery),
              shipping: new Date(shipping),
              bimester_id: Number(bimester_id),
              matter_id: Number(matter_id),
              classrooms,
            }),
          };
          const res = await fetch(`${this.routerDefault}/activity`, options);
          return await res.json()
    }
    async GetAll({finished, matters, bimester_id}){
      
      const res = await fetch(`${this.routerDefault}/activity?matters=${matters}&bimester_id=${bimester_id}&finished=${finished}$`, {method:'GET'})
      
      return await res.json()
    }
}

export default Activity