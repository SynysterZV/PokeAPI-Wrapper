const BaseManager = require('./BaseManager')

class ItemManager extends BaseManager {
    constructor(client) {
        super(client, 'item')
    }

    async fetchItem(name) {
        return await this._fetch('item', name)
    }

    async fetchAttribute(name) {
        return await this._fetch('item-attribute', name)
    }
    
    async fetchCategory(name) {
        return await this._fetch('item-category', name)
    }

    async fetchFlingEffect(name) {
        return await this._fetch('item-fling-effect', name)
    }

    async fetchPocket(name) {
        return await this._fetch('item-pocket', name)
    }
}

module.exports = ItemManager