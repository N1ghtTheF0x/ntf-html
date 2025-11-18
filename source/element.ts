import { AutoCapitalize } from "./attributes"

/**
 * Represents a HTML element
 */
export class HTMLElement
{
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
    public get className(): string {return [...this.classList].join(" ")}
    /**
     * Set a single or multiple classes with one string
     */
    public set className(v){this.classList = new Set(v.split(" "))}
    /**
     * Set the content of this element to a string
     */
    public set content(v: string){this.children = [v]}
    public get accesskey(): string {return String(this.properties["accesskey"])}
    public set accesskey(v: string){this.properties["accesskey"] = v}
    public get anchor(): string {return String(this.properties["anchor"])}
    public set anchor(v: string){this.properties["anchor"] = v}
    public get autoCapitalize(): AutoCapitalize {return String(this.properties["autocapitalize"]) as AutoCapitalize}
    public set autoCapitalize(v: AutoCapitalize){this.properties["autocapitalize"] = v}
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
    public forEach(cb: HTMLElement.Callback): this
    {
        cb(this)
        for(const child of this.children)
        {
            cb(child)
            if(child instanceof HTMLElement)
                child.forEach(cb)
        }
        return this
    }
    /**
     * Add new items to this element
     * @param items A list of anything
     * @returns this
     */
    public append(...items: Array<any>): this
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
    public setClassName(className: string): this
    {
        this.className = className
        return this
    }
    public addClassName(...classNames: Array<string>): this
    {
        this.classList = new Set([...this.classList,...classNames])
        return this
    }
    public setId(id: string): this
    {
        this.id = id
        return this
    }
    public setProperty(key: string,value: any): this
    {
        this.properties[key] = value
        return this
    }
    public getProperty<T>(key: string): T | undefined
    {
        if(key in this.properties)
            return this.properties[key]
        return undefined
    }
    public setData(key: string,value: any): this
    {
        return this.setProperty(`data-${key}`,value)
    }
    public getData<T>(key: string): T | undefined
    {
        return this.getProperty<T>(`data-${key}`)
    }
}

export namespace HTMLElement
{
    export type Properties = {[key: string]: any}
    export type Callback = (elm: any) => void
}