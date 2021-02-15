const BaseManager = require('./BaseManager')
const EncounterCondition = require('../structures/EncounterCondition')

class EncounterManager extends BaseManager {
    constructor(client) {
        super(client, 'encounter')
    }

    async fetchMethod(name) {
        return await this._fetch('encounter-method', name)
    }

    async fetchCondition(name) {
        const res = await this._fetch('encounter-condition', name)
        const condition = new EncounterCondition(this.client, res)
        return condition
    }

    async fetchCoditionValue(name) {
        return await this._fetch('encounter-condition-value', name)
    }
}

module.exports = EncounterManager