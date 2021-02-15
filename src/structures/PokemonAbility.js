const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Ability = require('./Ability')

class PokemonAbility extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.isHidden = obj.is_hidden
                this.slot = obj.slot
                this.ability = new NamedAPIResource(client, obj.ability, Ability)
            }
    }
}

module.exports = PokemonAbility