/**
 * Represents a HTML element
 */
export class HTMLElement
{
    /**
     * Internal render options of this element
     */
    protected _render_options: HTMLElement.IRenderOptions = {
        noEndTag: false
    }
    /**
     * The children of this element, can be anything. Will be stringified at render. Function can be passed to with single arguments as the parent and return type can be anything
     */
    public children: Array<any> = []
    /**
     * The properties of this element, like src, width, height, etc.
     */
    public properties: HTMLElement.Properties = {}
    /**
     * A collection of classes this element uses for styling
     */
    public classList: Set<string> = new Set
    /**
     * The unique id this element uses for styling
     */
    public id?: string
    /**
     * Get a string representation of the `classList` property
     */
    public get className(){return [...this.classList].join(" ")}
    /**
     * Set a single or multiple classes with one string
     */
    public set className(v){this.classList = new Set(v.split(" "))}
    /**
     * The string content of this element
     */
    public get content(){return this.renderChildren()}
    /**
     * Set the content of this element to a string
     */
    public set content(v){this.children = [v]}
    /**
     * Check if `item` is a `HTMLElement`
     * @param item Anything that might be `HTMLElement`
     * @returns true if `item` == `HTMLElement`, otherwise false
     */
    public static is(item: any): item is HTMLElement
    {
        return item instanceof this
    }
    /**
     * Create a new basic element as a `type`
     * @param type The type of element (p, img, input, etc.)
     * @param children The children of this element, optional
     */
    public constructor(public readonly type: string,...children: Array<any>)
    {
        this.append(...children)
    }
    /**
     * Iterate through each child element of this element
     * @param cb The callback to call upon each element, can be anything
     */
    public forEach(cb: HTMLElement.Callback)
    {
        cb(this)
        for(const child of this.children)
        {
            cb(child)
            if(child instanceof HTMLElement)
                child.forEach(cb)
        }
    }
    /**
     * Add new items to this element
     * @param items A list of anything
     * @returns this
     */
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
        const properties: HTMLElement.Properties = {}
        for(const [key,value] of Object.entries(this.properties))
        {
            if(typeof value == "undefined" || value === null) continue
            if(typeof value == "string" && value.length === 0)
                continue
            properties[key] = value
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
                content += String(child(this))
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
    export type Callback = (elm: any) => void
    export interface IRenderOptions
    {
        noEndTag: boolean
    }
}