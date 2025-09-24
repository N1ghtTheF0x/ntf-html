import { Blocking, CORS, FetchPriority, Referrer } from "../../attributes"
import { HTMLElement } from "../../element"
import { MimeType } from "../../mime"

export class HTMLScriptElement extends HTMLElement
{
    public get async(): boolean {return Boolean(this.properties["async"])}
    public set async(v) {this.properties["async"] = v}
    public get attributionSource(): Array<string> | boolean
    {
        const v = String(this.properties["attributionsrc"])
        if(v.length > 0)
            return v.split(" ")
        return Boolean(v)
    }
    public set attributionSource(v)
    {
        if(Array.isArray(v))
        {
            this.properties["attributionsrc"] = v.join(" ")
            return
        }
        this.properties["attributionsrc"] = Boolean(v)
    }
    public get blocking(): Array<Blocking> {return String(this.properties["blocking"]).split(" ") as Array<Blocking>}
    public set blocking(v) {this.properties["blocking"] = v.join(" ")}
    public get crossorigin(): CORS {return String(this.properties["crossorigin"]) as CORS}
    public set crossorigin(v) {this.properties["crossorigin"] = v}
    public get defer(): boolean {return Boolean(this.properties["defer"])}
    public set defer(v) {this.properties["defer"] = v}
    public get fetchpriority(): FetchPriority {return String(this.properties["fetchpriority"]) as FetchPriority}
    public set fetchpriority(v) {this.properties["fetchpriority"] = v}
    public get integrity(): string {return String(this.properties["integrity"])}
    public set integrity(v) {this.properties["integrity"] = v}
    public get nomodule(): boolean {return Boolean(this.properties["nomodule"])}
    public set nomodule(v) {this.properties["nomodule"] = v}
    public get nonce(): string {return String(this.properties["nonce"])}
    public set nonce(v) {this.properties["nonce"] = v}
    public get referrerpolicy(): Referrer {return String(this.properties["referrerpolicy"]) as Referrer}
    public set referrerpolicy(v) {this.properties["referrerpolicy"] = v}
    public get src(): string {return String(this.properties["src"])}
    public set src(v) {this.properties["src"] = v}
    public get scriptType(): HTMLScriptElement.Type {return String(this.properties["type"]) as HTMLScriptElement.Type}
    public set scriptType(v) {this.properties["type"] = v}
    public constructor(src?: string,module: boolean = false)
    {
        super("script")
        if(typeof src == "string")
            this.src = src
        if(module)
            this.scriptType = "module"
    }
}

export namespace HTMLScriptElement
{
    export type Type = "importmap" | "module" | "speculationrules" | MimeType
}