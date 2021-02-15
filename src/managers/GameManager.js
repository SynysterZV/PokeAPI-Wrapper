const BaseManager = require('./BaseManager')

class GameManager extends BaseManager {
    constructor(client) {
        super(client, 'game')
    }

    async fetchGeneration(name) {
        return await this._fetch('generation', name)
    }

    async fetchPokedex(name) {
        return await this._fetch('pokedex', name)
    }

    async fetchVersion(name) {
        return await this._fetch('version', name)
    }

    async fetchVersionGroup(name) {
        return await this._fetch('version-group', name)
    }
}

module.exports = GameManager