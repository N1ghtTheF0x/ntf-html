import { HTMLElement } from "./element"

export class ListHTMLElement extends HTMLElement
{
    public readonly type: ListHTMLElement.Type
    public constructor(type: ListHTMLElement.Type)
    {
        super(type)
        this.type = type
    }
    public addItem(...children: Array<any>)
    {
        const item = new HTMLElement("li",...children)
        this.append(item)
        return this
    }
}

export namespace ListHTMLElement
{
    export type Type = "ol" | "ul"
}