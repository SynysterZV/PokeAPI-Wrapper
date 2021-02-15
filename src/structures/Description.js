const NamedAPIResource = require('./NamedAPIResource')
const Base = require('./Base')
const Language = require('./Language')

class Description extends Base {
    constructor(client, obj) {
        super(client)
        if(this.check(obj)) {
        this.description = obj.description
        this.language = new NamedAPIResource(this.client, obj.language, Language)
        }
    }
}

module.exports = Description