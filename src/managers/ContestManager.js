const BaseManager = require('./BaseManager')

class ContestManager extends BaseManager {
    constructor(client) {
        super(client, 'Contest')
    }

    async fetchType(name) {
        return await this._fetch('contest-type', name)
    }

    async fetchEffect(name) {
        return await this._fetch('contest-effect', name)
    }

    async fetchSuperContestEffect(name) {
        return await this._fetch('super-contest-effect', name)
    }
}

module.exports = ContestManager