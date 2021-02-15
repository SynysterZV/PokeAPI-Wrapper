const BaseManager = require('./BaseManager')

class MachineManager extends BaseManager {
    constructor(client) {
        super(client, 'machine')
    }

    async fetch(id) {
        return await this._fetch('machine', id)
    }
}

module.exports = MachineManager