import {faker} from '@faker-js/faker'

export function generator(n) {
    const data = []
    for (let i = 0; i < n; i++) {
        data.push([faker.internet.email(), faker.name.firstName(), faker.name.lastName(), faker.address.city(), faker.address.country(), faker.phone.number('#########')])
    }
    return data
}
