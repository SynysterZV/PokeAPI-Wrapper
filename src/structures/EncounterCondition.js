const NamedAPIResource = require('./NamedAPIResource')
const Base = require('./Base')
const Name = require('./Name')

class EncounterCondition extends Base {
    constructor(client, obj) {
        super(client)
        if(this.check(obj)) {
            this.id = obj.id
            this.name = obj.name
            this.names = new Name(client).fromArray(obj.names)
            this.values = new NamedAPIResource(client).fromArray(obj.values, 'EncounterCondition')
        }
    }
}

module.exports = EncounterCondition