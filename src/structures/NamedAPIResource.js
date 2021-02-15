const Base = require('./Base')

class NamedAPIResource extends Base {
    constructor(client, obj, type) {
        super(client)
        if(this.check(obj)) {
        this.name = obj.name
        this.url = obj.url
        this.type = type
        }
    }

    async fetch() {
        const uri = this.url.slice(this.client.rest.baseuri.length)
        const res = await this.client.rest.request('get', uri, '')
        return new this.type(this.client, res)
    }
}

module.exports = NamedAPIResource