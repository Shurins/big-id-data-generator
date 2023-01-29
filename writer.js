import * as csv from 'csv-stringify'
import fs from 'fs'

export function write(data) {
    csv.stringify(data, (err, output) => {
        try {
            fs.writeFileSync("data.csv", output);
        } catch (e) {
            new Error(`error while writing data, details: ${e}`)
        }
    });
}