import readline from 'readline'
import {write} from "./writer.js"
import {generator} from "./generator.js"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Enter a number of records: ', function (rec) {
    if(/^-?\d+$/.test(rec)) write(generator(parseInt(rec)))
    else console.error('Entered value is not a number, records are not generated!')
    rl.close()
})