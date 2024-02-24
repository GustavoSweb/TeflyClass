import Activity from './Activity/index.js'
import Matter from './Matter/index.js'
import Classroom from './Classroom/index.js'
import Cookies from 'js-cookie'


class Services{
    constructor(router){
        this.token = Cookies.get('token')
        this.Activity = new Activity(router, this.token)
        this.Matter = new Matter(router, this.token)
        this.Classroom = new Classroom(router, this.token)
    }
}

export default new Services('http://localhost:8081')