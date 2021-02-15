const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Effect = require('./Effect')
const VersionGroup = require('./VersionGroup')

class AbilityEffectChange extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.effectEntries = new Effect(client).fromArray(obj.effect_entries)
                this.versionGroup = new NamedAPIResource(client, obj.version_group, VersionGroup)
            }
    }
}

module.exports = AbilityEffectChange