const NamedAPIResource = require('./NamedAPIResource')
const Name = require('./Name')
const Base = require('./Base')

class EncounterConditionValue extends Base {
    constructor(client, obj) {
        super(client)
        if(this.check(obj)) {
            this.id = obj.id
            this.name = obj.name
            this.condition = new NamedAPIResource(client, obj.condition, 'EncounterCondition')
            this.names = new Name(client).fromArray(obj.names)
        }
    }
}

module.exports = EncounterConditionValue