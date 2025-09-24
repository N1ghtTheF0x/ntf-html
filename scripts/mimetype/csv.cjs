class CSV
{
    /** @type {CSVRow} */ headers
    /** @type {Array<CSVRow>} */ rows
    static ROW_SEPERATOR = "\n"
    static parse(/** @type {string} */ content)
    {
        const lines = content.split(this.ROW_SEPERATOR)
        return new this(CSVRow.parse(lines[0]),lines.slice(1).map(l => CSVRow.parse(l)))
    }
    constructor(/** @type {CSV["headers"]} */ headers,/** @type {CSV["rows"]} */ rows)
    {
        this.headers = headers
        this.rows = rows
    }
}

class CSVRow
{
    /** @type {Array<string>} */ cells
    static CELL_SEPERATOR = ","
    static parse(/** @type {string} */ line)
    {
        return new this(line.split(this.CELL_SEPERATOR))
    }
    constructor(/** @type {CSVRow["cells"]} */ cells)
    {
        this.cells = cells
    }
}

module.exports = {CSV,CSVRow}