const Collection = require('../util/Collection')

class BaseManager {
    constructor(client, structType) {
        this.client = client
        this.cache = new Collection()
        this.cacheType = structType
    }

    async _fetch(prop, name, ext) {
        let options
        if(typeof name == 'object' || !name) {
            if(!name) options = this.client.options
            else {
                const { limit, offset } = name
                if(!limit) return new Error('You must have a limit!')
                options = { limit, offset }
            }
        }
        const res = await this.client.api
                                (prop, typeof name == 'object' ? null : name, ext || null)
                                .get(options)
        return res
    }
}

module.exports = BaseManager