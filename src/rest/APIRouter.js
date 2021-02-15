const qs = require('../util/qs')

const noop = () => {}
const methods = ['get']
const reflectors = [
    'toString',
    'stringify'
]

function buildRoute(manager) {
    const route = ['']
    const handler = {
        get(target, name) {
            if(reflectors.includes(name)) return () => route.join('/')
            if(methods.includes(name)) return options => 
                manager.request(
                    name,
                    route.join('/'),
                    qs(options) || ''
                )
                route.push(name)
                return new Proxy(noop, handler)
        },
        apply(target, _, args) {
            route.push(...args.filter(x => x != null))
            return new Proxy(noop, handler)
        }
    }
    return new Proxy(noop, handler)
}

module.exports = buildRoute