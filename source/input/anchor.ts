import { HTMLElement } from "../element"

export class HTMLAnchorElement extends HTMLElement
{
    public get href(): string {return String(this.properties["href"])}
    public set href(v){this.properties["href"] = v}
    public constructor(href: string,...children: Array<any>)
    {
        super("a",...children)
        this.href = href
    }
}