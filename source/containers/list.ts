import { HTMLElement } from "../element"

export class HTMLListElement extends HTMLElement
{
    public readonly type: HTMLListElement.Type
    public constructor(type: HTMLListElement.Type)
    {
        super(type)
        this.type = type
    }
    public addItem(...children: Array<any>): this
    {
        const item = new HTMLElement("li",...children)
        this.append(item)
        return this
    }
}

export namespace HTMLListElement
{
    export type Type = "ol" | "ul"
}