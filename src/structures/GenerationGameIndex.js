const Base = require('./Base')
const NamedAPIResource = require('./NamedAPIResource')
const Generation = require('./Generation')

class GenerationGameIndex extends Base {
    constructor(client, obj) {
        super(client)
            if(this.check(obj)) {
                this.gameIndex = obj.game_index
                this.generation = new NamedAPIResource(client, obj.generation, Generation)
            }
    }
}

module.exports = GenerationGameIndex