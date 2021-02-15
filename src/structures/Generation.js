const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Language = require('./Language')
const Name = require('./Name')
const VersionGroup = require('./VersionGroup')

class Generation extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.id = obj.id
                this.name = obj.name
                this.abilities = new NamedAPIResource(client).fromArray(obj.abilities, 'abilities')
                this.names = new NamedAPIResource(client).fromArray(obj.names, Name)
                this.mainRegion = new NamedAPIResource(client, obj.main_region, 'region')
                this.moves = new NamedAPIResource(client).fromArray(obj.moves, 'move')
                this.pokemonSpecies = new NamedAPIResource(client).fromArray(obj.pokemon_species, 'pokemonspecies')
                this.types = new NamedAPIResource(client).fromArray(obj.types, 'type')
                this.versionGroups = new NamedAPIResource(client).fromArray(obj.version_groups, VersionGroup)
            }
    }
}

module.exports = Generation