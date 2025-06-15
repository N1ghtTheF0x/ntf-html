import { HTMLElement } from "./element"

export class HTMLMetaElement extends HTMLElement
{
    public get name(){return this.properties["name"] as string}
    public set name(v){this.properties["name"] = v}
    public get metaContent(){return this.properties["content"] as string}
    public set metaContent(v){this.properties["content"] = v}
    public constructor(name: string,content: string,properties: HTMLElement.Properties = {})
    {
        super("meta")
        this.properties = properties
        this.name = name
        this.content = content
    }
}

export class HTMLPropertyElement extends HTMLElement
{
    public get property(){return this.properties["property"] as string}
    public set property(v){this.properties["property"] = v}
    public get metaContent(){return this.properties["content"] as string}
    public set metaContent(v){this.properties["content"] = v}
    public constructor(property: string,content: string,properties: HTMLElement.Properties = {})
    {
        super("meta")
        this.properties = properties
        this.property = property
        this.content = content
    }
}

export class HTMLLinkElement extends HTMLElement
{
    public get rel(){return this.properties["rel"] as string}
    public set rel(v){this.properties["rel"] = v}
    public get href(){return this.properties["href"] as string}
    public set href(v){this.properties["href"] = v}
    public constructor(rel: string,href: string,properties: HTMLElement.Properties = {})
    {
        super("link")
        this.properties = properties
        this.rel = rel
        this.href = href
    }
}