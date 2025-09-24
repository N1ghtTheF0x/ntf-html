import { HTMLElement } from "./element"
import { HTMLRootElement } from "./containers/root"

const __start_tag__ = <S extends string>(content: S) => `<${content}>` as const
const __single_tag__ = <S extends string>(content: S) => `<${content} />` as const
const __end_tag__ = <S extends string>(content: S) => `</${content}>` as const

const SINGLE_TAGS: Array<string> = [
    "img",
    "meta",
    "link",
    "input"
]

export function renderChildren(elms: Array<any>): string
{
    return elms.map(elm =>
    {
        if(HTMLElement.is(elm))
            return renderElement(elm)
        return String(elm)
    }).join("")
}


export function renderProperties(elm: HTMLElement): string
{
    function __render__(key: string,value: any): string
    {
        if(typeof value == "boolean" && value)
            return key
        return `${key}="${String(value).replaceAll('"',"&quot;")}"`
    }
    const properties: HTMLElement.Properties = {}
    for(const [key,value] of Object.entries(elm.properties))
    {
        if(typeof value == "undefined" || value === null) continue
        if(typeof value == "string" && value.length === 0)
            continue
        properties[key] = value
    }
    if(typeof elm.id == "string")
        properties["id"] = elm.id
    if(elm.classList.size > 0)
        properties["class"] = elm.className
    return Object.entries(properties)
    .map(([key,value]) => __render__(key,value))
    .join(" ")
}

export function renderStartTagContent(elm: HTMLElement): string
{
    return `${elm.type} ${renderProperties(elm)}`.trim()
}

export function renderElement(elm: HTMLElement): string
{
    if(SINGLE_TAGS.includes(elm.type))
        return __single_tag__(renderStartTagContent(elm))
    return __start_tag__(renderStartTagContent(elm)) + renderChildren(elm.children) + __end_tag__(elm.type)
}

export function render(root: HTMLRootElement): string
{
    return HTMLRootElement.HEADER + renderElement(root)
}