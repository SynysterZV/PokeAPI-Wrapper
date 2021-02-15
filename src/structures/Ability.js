const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Generation = require('./Generation')
const Name = require('./Name')
const VerboseEffect = require('./VerboseEffect')
const AbilityEffectChange = require('./AbilityEffectChange')
const FlavorText = require('./FlavorText')
const PokemonAbility = require('./PokemonAbility')

class Ability extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.id = obj.id
                this.name = obj.name
                this.isMainSeries = Boolean(obj.is_main_series)
                this.generation = new NamedAPIResource(client, obj.generation, Generation)
                this.names = new Name(client).fromArray(obj.names)
                this.effectEntries = new VerboseEffect(client, obj.effect_entries)
                this.effectChanges = new AbilityEffectChange(client).fromArray(obj.effect_changes)
                this.flavorTextEntries = new FlavorText(client).fromArray(obj.flavor_text_entries)
                this.pokemon = new PokemonAbility(client).fromArray(obj.pokemon)
            }
    }
}

module.exports = Ability