const buildRoute = require('./APIRouter')
const fetch = require('node-fetch')

const { baseuri } = require('../util/Constants')

class RESTManager {
    constructor(client) {
        this.client = client
        this.baseuri = baseuri
    }

    get api() {
        return buildRoute(this)
    }

    async request(method, route, params) {
        const uri = `${baseuri}${route}${params}`
        return await fetch(uri, { method }).then(res=>res.json()).catch(e=>undefined)
    }
}

module.exports = RESTManager