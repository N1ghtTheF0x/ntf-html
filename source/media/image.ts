import { HTMLElement } from "../element"

export class HTMLImageElement extends HTMLElement
{
    public get src(){return this.properties["src"] as string}
    public set src(v){this.properties["src"] = v}
    public get alt(){return this.properties["alt"] as string}
    public set alt(v){this.properties["alt"] = v}
    public get width(){return this.properties["width"] as number}
    public set width(v){this.properties["width"] = v}
    public get height(){return this.properties["height"] as number}
    public set height(v){this.properties["height"] = v}
    public constructor(src?: string,alt?: string)
    {
        super("img")
        this._render_options.noEndTag = true
        if(typeof src == "string")
            this.src = src
        if(typeof alt == "string")
            this.alt = alt
    }
    public setUniformSize(x: number)
    {
        this.width = this.height = x
        return this
    }
}