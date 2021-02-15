const RESTManager = require('../rest/RESTManager')
const PokemonManager = require('../managers/PokemonManger')
const BerryManager = require('../managers/BerryManager')
const ContestManager = require('../managers/ContestManager')
const EncounterManager = require('../managers/EncounterManager')
const EvolutionManager = require('../managers/EvolutionManager')
const GameManager = require('../managers/GameManager')
const ItemManager = require('../managers/ItemManager')
const LocationManager = require('../managers/LocationManager')
const MachineManager = require('../managers/MachineManager')
const MoveManager = require('../managers/MoveManager')

class Client {
    constructor(options) {
        this.options = options
        this.rest = new RESTManager(this)
        this.pokemon = new PokemonManager(this)
        this.berries = new BerryManager(this)
        this.contests = new ContestManager(this)
        this.encounters = new EncounterManager(this)
        this.evolutions = new EvolutionManager(this)
        this.games = new GameManager(this)
        this.items = new ItemManager(this)
        this.locations = new LocationManager(this)
        this.machines = new MachineManager(this)
        this.moves = new MoveManager(this)
    }

    get api() {
        return this.rest.api
    }
}

module.exports = Client