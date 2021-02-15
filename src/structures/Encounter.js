const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const EncounterConditionValue = require('./EncounterConditionValue')

class Encounter extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.minLevel = obj.min_level
                this.maxLevel = obj.max_level
                this.conditionValues = new NamedAPIResource(client).fromArray(obj.condition_values, EncounterConditionValue)
                this.chance = obj.chance
                this.method = new NamedAPIResource(client, obj.method, 'method')
            }
    }
}

module.exports = Encounter