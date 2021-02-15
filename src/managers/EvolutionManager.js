const BaseManager = require('./BaseManager')

class EvolutionManager extends BaseManager {
    constructor(client) {
        super(client, 'evolution')
    }

    async fetchTrigger(name) {
        return this._fetch('evolution-trigger', name)
    }
}

module.exports = EvolutionManager