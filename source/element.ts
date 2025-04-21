export class HTMLElement
{
    protected _render_options: HTMLElement.IRenderOptions = {
        noEndTag: false
    }
    public children: Array<any> = []
    public properties: HTMLElement.Properties = {}
    public classList: Set<string> = new Set
    public id?: string
    public get className(){return [...this.classList].join(" ")}
    public set className(v){this.classList = new Set([v])}
    public get content(){return this.renderChildren()}
    public set content(v){this.children = [v]}
    public constructor(public readonly type: string,...children: Array<any>)
    {
        this.append(...children)
    }
    public append(...items: Array<any>)
    {
        for(const item of items)
        {
            if(item instanceof HTMLElement)
            {
                this.children.push(item)
                continue
            }
            this.children.push(item)
        }
        return this
    }
    public setClassName(className: string)
    {
        this.className = className
        return this
    }
    public setId(id: string)
    {
        this.id = id
        return this
    }
    public setData(key: string,value: any)
    {
        this.properties[`data-${key}`] = value
        return this
    }
    public renderProperties()
    {
        const properties: HTMLElement.Properties = {
            ...this.properties
        }
        if(typeof this.id == "string")
            properties["id"] = this.id
        if(this.classList.size > 0)
            properties["class"] = this.className
        return Object.entries(properties)
        .map(([key,value]) => `${key}="${String(value).replaceAll('"',"&quot;")}"`)
        .join(" ")
    }
    public renderChildren()
    {
        let content = ""
        for(const child of this.children)
        {
            if(child instanceof HTMLElement)
            {
                content += child.render()
                continue
            }
            if(typeof child == "function")
            {
                content += child(this)
                continue
            }
            content += String(child)
        }
        return content
    }
    public render()
    {
        const tag = `${this.type} ${this.renderProperties()}`.trim()
        if(this._render_options.noEndTag && this.children.length === 0)
            return `<${tag} />`
        return `<${tag}>${this.renderChildren()}</${this.type}>`
    }
}

export namespace HTMLElement
{
    export type Properties = {[key: string]: any}
    export interface IRenderOptions
    {
        noEndTag: boolean
    }
}