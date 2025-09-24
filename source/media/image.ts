import { HTMLElement } from "../element"

export class HTMLImageElement extends HTMLElement
{
    public get src(): string {return String(this.properties["src"])}
    public set src(v){this.properties["src"] = v}
    public get alt(): string {return String(this.properties["alt"])}
    public set alt(v){this.properties["alt"] = v}
    public get width(): number {return Number(this.properties["width"])}
    public set width(v){this.properties["width"] = v}
    public get height(): number {return Number(this.properties["height"])}
    public set height(v){this.properties["height"] = v}
    public constructor(src?: string,alt?: string)
    {
        super("img")
        if(typeof src == "string")
            this.src = src
        if(typeof alt == "string")
            this.alt = alt
    }
    public setUniformSize(x: number): this
    {
        this.width = this.height = x
        return this
    }
}