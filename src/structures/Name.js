const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Language = require('./Language')

class Name extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.name = obj.name
                this.language = new NamedAPIResource(this.client, obj.language, Language)
            }
    }
}

module.exports = Name