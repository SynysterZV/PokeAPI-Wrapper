const BaseManager = require('./BaseManager')

class BerryManager extends BaseManager {
    constructor(client) {
        super(client, 'Berry')
    }

    async fetch(name) {
        const berry = await this._fetch('berry', name)
        return berry
    }

    async fetchFlavor(name) {
        const berryFlavor = await this._fetch('berry-flavor', name)
        return berryFlavor
    }

    async fetchFirmness(name) {
        const berryFirmness = await this._fetch('berry-firmness', name)
        return berryFirmness
    }

}

module.exports = BerryManager