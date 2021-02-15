const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Language = require('./Language')

class Effect extends Base {
    constructor(client, obj) {
        super(client)
        if(this.check(obj)) {
            this.effect = obj.effect
            this.language = new NamedAPIResource(this.client, obj.language, Language)
        }
    }
}

module.exports = Effect