const Base = require('./Base')


class Language extends Base {
    constructor(client, obj) {
        super(client)
        const Name = require('./Name')
        if(this.check(obj)) {
            this.id = obj.id
            this.name = obj.name
            this.official = obj.official
            this.iso639 = obj.iso639
            this.iso3116 = obj.iso3166
            this.names = new Name(client).fromArray(obj.names)
        }
    }
}

module.exports = Language