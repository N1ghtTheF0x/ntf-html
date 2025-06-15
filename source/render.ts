import { HTMLElement } from "./element"
import { HTMLRootElement } from "./root"

const __start_tag__ = <S extends string>(content: S) => `<${content}>` as const
const __single_tag__ = <S extends string>(content: S) => `<${content} />` as const
const __end_tag__ = <S extends string>(content: S) => `</${content}>` as const

const SINGLE_TAGS = [
    "img",
    "meta",
    "link",
    "input"
]

export function renderChildren(elms: Array<any>)
{
    return ""
}

export function renderElement(elm: HTMLElement)
{
    const START_TAG = __start_tag__(elm.renderStartTagContent())
    const END_TAG = __end_tag__(elm.type)

    return START_TAG + renderChildren(elm.children) + END_TAG
}

export function render(root: HTMLRootElement)
{
    return HTMLRootElement.HEADER + renderElement(root)
}