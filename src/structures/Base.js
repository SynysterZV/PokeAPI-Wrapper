class Base {
    constructor(client) {
        this.client = client
    }

    check(obj) {
        if(!Array.isArray(obj) && obj != undefined) return true
        else return false
    }

    valueOf() {
        return this.id || this.name
    }

    fromArray(array, ext = '') {
        let newArr = []
        if(Array.isArray(array)) {
            for(const res of array) {
                newArr.push(new this.constructor(this.client, res, ext))
            }
        }
        return newArr
    }
}

module.exports = Base