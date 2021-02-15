const BaseManager = require('./BaseManager')

class LocationManager extends BaseManager {
    constructor(client) {
        super(client, 'location')
    }

    async fetchLocation(name) {
        return await this._fetch('location', name)
    }

    async fetchLocationArea(name) {
        return await this._fetch('location-area', name)
    }

    async fetchPalParkArea(name) {
        return await this._fetch('pal-park-area', name)
    }

    async fetchRegion(name) {
        return await this._fetch('region', name)
    }
}

module.exports = LocationManager