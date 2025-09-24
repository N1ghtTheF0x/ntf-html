function tsType(name,...values)
{
    return `export type ${name} = ${values.map(v => `"${v}"`).join(" | ")}`
}

function tsTemplateType(name,value)
{
    return `export type ${name} = ${value}`
}

module.exports = {tsType,tsTemplateType}