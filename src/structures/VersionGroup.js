const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Version = require('./Version')

class VersionGroup extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.id = obj.id
                this.name = obj.name
                this.order = obj.order
                this.generation = new NamedAPIResource(client, obj.generation, 'generation')
                this.moveLearnMethods = new NamedAPIResource(client).fromArray(obj.move_learn_methods, 'moveLearnMehod')
                this.pokedexes = new NamedAPIResource(client).fromArray(obj.pokedexes, Pokedex)
                this.regions = new NamedAPIResource(client).fromArray(obj.regions, 'region')
                this.versions = new NamedAPIResource(client).fromArray(obj.versions, Version)
            }
    }
}

module.exports = VersionGroup