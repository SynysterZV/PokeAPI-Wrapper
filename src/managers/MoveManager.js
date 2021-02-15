const BaseManager = require('./BaseManager')

class MoveManager extends BaseManager {
    constructor(client) {
        super(client, 'move')
    }

    async fetchMove(name) {
        return await this._fetch('move', name)
    }

    async fetchAilment(name) {
        return await this._fetch('move-ailment', name)
    }

    async fetchBattleStyle(name) {
        return await this._fetch('move-battle-style', name)
    }

    async fetchCategory(name) {
        return await this._fetch('move-category', name)
    }

    async fetchLearnMethod(name) {
        return await this._fetch('move-learn-method', name)
    }

    async fetchTarget(name) {
        return await this._fetch('move-target', name)
    }
}

module.exports = MoveManager