const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Name = require('./Name')

class EncounterMethod extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.id = obj.id
                this.name = obj.name
                this.order = obj.order
                this.names = new Name(client).fromArray(obj.names)
            }
    }
}

module.exports = EncounterMethod