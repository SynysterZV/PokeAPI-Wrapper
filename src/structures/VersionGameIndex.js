const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')

class VersionGameIndex extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.gameIndex = obj.game_index
                this.version = new NamedAPIResource(client, obj.version, 'version')
            }
    }
}

module.exports = VersionGameIndex