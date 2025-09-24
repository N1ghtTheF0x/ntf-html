import { Blocking, CORS, FetchPriority, ReferrerPolicy, Relationship, Sizes } from "../../attributes"
import { HTMLElement } from "../../element"
import { MimeType } from "../../mime"

export class HTMLLinkElement extends HTMLElement
{
    public get as(): HTMLLinkElement.As {return String(this.properties["as"]) as HTMLLinkElement.As}
    public set as(v) {this.properties["as"] = v}
    public get blocking(): Array<Blocking> {return String(this.properties["blocking"]).split(" ") as Array<Blocking>}
    public set blocking(v) {this.properties["blocking"] = v.join(" ")}
    public get crossorigin(): Omit<CORS,""> {return String(this.properties["crossorigin"])}
    public set crossorigin(v) {this.properties["crossorigin"] = v}
    public get disabled(): boolean {return Boolean(this.properties["disabled"])}
    public set disabled(v) {this.properties["disabled"] = v}
    public get fetchpriority(): FetchPriority {return String(this.properties["fetchpriority"]) as FetchPriority}
    public set fetchpriority(v) {this.properties["fetchpriority"] = v}
    public get href(): string {return String(this.properties["href"])}
    public set href(v){this.properties["href"] = v}
    public get hreflang(): string {return String(this.properties["hreflang"])}
    public set hreflang(v) {this.properties["hreflang"] = v}
    public get integrity(): string {return String(this.properties["integrity"])}
    public set integrity(v) {this.properties["integrity"] = v}
    public get media(): string {return String(this.properties["media"])}
    public set media(v) {this.properties["media"]}
    public get referrerpolicy(): ReferrerPolicy {return String(this.properties["referrerpolicy"]) as ReferrerPolicy}
    public set referrerpolicy(v) {this.properties["referrerpolicy"] = v}
    public get rel(): Relationship {return String(this.properties["rel"]) as Relationship}
    public set rel(v){this.properties["rel"] = v}
    public get sizes(): Sizes {return String(this.properties["sizes"]) as Sizes}
    public set sizes(v) {this.properties["sizes"] = v}
    public get title(): string {return String(this.properties["title"])}
    public set title(v) {this.properties["title"] = v}
    public get mimeType(): MimeType {return String(this.properties["type"]) as MimeType}
    public set mimeType(v) {this.properties["type"] = v}
    public constructor(rel: Relationship,href: string,properties: HTMLElement.Properties = {})
    {
        super("link")
        this.properties = properties
        this.rel = rel
        this.href = href
    }
}

export namespace HTMLLinkElement
{
    export type As = "audio" | "document" | "embed" | "fetch" | "font" | "image" | "object" | "script" | "style" | "track" | "video" | "worker"
}