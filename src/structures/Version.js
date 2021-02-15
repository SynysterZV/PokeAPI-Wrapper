const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Name = require('./Name')

class Version extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.id = obj.id
                this.name = obj.name
                this.names = new Name(client).fromArray(obj.names)
                this.versionGroup = new NamedAPIResource(client, obj.version_group, 'versionGroup')
            }
    }
}

module.exports = Version