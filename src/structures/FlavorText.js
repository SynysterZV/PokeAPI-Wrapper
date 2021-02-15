const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Language = require('./Language')
const Version = require('./Version')

class FlavorText extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.flavorText = obj.flavor_text
                this.language = new NamedAPIResource(client, obj.language, Language)
                this.version = new NamedAPIResource(client, obj.version, Version)
            }
    }
}

module.exports = FlavorText