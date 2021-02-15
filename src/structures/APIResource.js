const Base = require('./Base')

class APIResource extends Base {
    constructor(client, obj, type) {
        super(client)
        if(this.check(obj)) {
        this.url = obj?.url || null
        this.type = type
        }
    }

    async fetch() {
        const uri = this.url.replace(this.client.baseuri, '')
        const res = this.client.rest.request('get', uri, '')
        return new this.type(this.client, res)
    }
}

module.exports = APIResource