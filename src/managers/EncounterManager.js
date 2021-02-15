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
        return await this._fetch('encounter-condition-value', name)
    }

    async fetchCoditionValue(name) {
        return await this._fetch('encounter-condition-value', name)
    }
}

module.exports = EncounterManager