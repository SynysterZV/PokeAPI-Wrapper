const BaseManager = require('./BaseManager')

class PokemonManager extends BaseManager {
    constructor(client) {
        super(client, 'Pokemon')
    }

    async fetchPokemon(name) {
        const pokemon = await this._fetch('pokemon', name)
        return pokemon
    }

    async fetchAbility(name) {
        const ability = await this._fetch('ability', name)
        return ability
    }

    async fetchCharacteristic(name) {
        const characteristic = await this._fetch('characteristic', name)
        return characteristic
    }

    async fetchEggGroup(name) {
        const eggGroup = await this._fetch('egg-group', name)
        return eggGroup
    }

    async fetchGender(name) {
        const gender = await this._fetch('gender', name)
        return gender
    }

    async fetchGrowthRate(name) {
        const growthRate = await this._fetch('growth-rate', name)
        return growthRate
    }

    async fetchNature(name) {
        const nature = await this._fetch('nature', name)
        return nature
    }

    async fetchPokeathlonStat(name) {
        const stat = await this._fetch('pokeathlon-stat', name)
        return stat
    }

    async fetchLocationArea(name) {
        const area = await this._fetch('pokemon', name, 'encounters')
        return area
    }

    async fetchColor(name) {
        const color = await this._fetch('pokemon-color', name)
        return color
    }

    async fetchForm(name) {
        const form = await this._fetch('pokemon-form', name)
        return form
    }

    async fetchHabitat(name) {
        const habitat = await this._fetch('pokemon-habitat', name)
        return habitat
    }

    async fetchShape(name) {
        const shape = await this._fetch('pokemon-shape', name)
        return shape
    }

    async fetchSpecies(name) {
        const species = await this._fetch('pokemon-species', name)
        return species
    }

    async fetchStat(name) {
        const stat = await this._fetch('stat', name)
        return stat
    }

    async fetchType(name) {
        const type = await this._fetch('type', name)
        return type
    }
 }

module.exports = PokemonManager