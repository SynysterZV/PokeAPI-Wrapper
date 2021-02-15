const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Language = require('./Language')

class VerboseEffect extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.effect = obj.effect
                this.shortEffect = obj.short_effect
                this.language = new NamedAPIResource(client, obj.language, Language)
            }
    }
}

module.exports = VerboseEffect