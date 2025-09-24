const { CSV } = require("./csv.cjs")

const BASE_URL = "https://www.iana.org/assignments/media-types/"

async function fetchCSV(/** @type {string} */ name)
{
    const response = await fetch(`${BASE_URL}${name}.csv`)
    return CSV.parse(await response.text())
}

function fetchCSVs(/** @type {Array<string>} */ names)
{
    return Promise.all(names.map(n => fetchCSV(n)))
}

module.exports = {fetchCSV,fetchCSVs}