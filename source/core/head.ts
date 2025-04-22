import { HTMLElement } from "../element"
import { HTMLMetaElement, HTMLPropertyElement } from "../meta"

function __charset__()
{
    const meta = new HTMLElement("meta")
    meta.properties["charset"] = "UTF-8"
    return meta
}

export class HTMLHeadElement extends HTMLElement
{
    public readonly titleElement = new HTMLElement("title")
    public get title(){return this.titleElement.content}
    public set title(v){this.titleElement.content = v}
    public constructor()
    {
        super("head")
        this.append(__charset__(),this.titleElement)
        this.addMeta("viewport","width=device-width, initial-scale=1.0")
    }
    public addMeta(name: string,content: string,properties: HTMLElement.Properties = {})
    {
        return this.append(new HTMLMetaElement(name,content,properties))
    }
    public addProperty(property: string,content: string,properties: HTMLElement.Properties = {})
    {
        return this.append(new HTMLPropertyElement(property,content,properties))
    }
    public addLink(rel: string,href: string,properties: HTMLElement.Properties = {})
    {
        const link = new HTMLElement("link")
        link.properties = {
            rel,href,
            ...properties
        }
        return this.append(link)
    }
    public addScript(src: string,properties: HTMLElement.Properties = {})
    {
        const script = new HTMLElement("script")
        script.properties = {
            src,
            ...properties
        }
        return this.append(script)
    }
    public setTitle(title: string)
    {
        this.title = title
        return this
    }
}