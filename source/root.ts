import { HTMLElement } from "./element"
import { HTMLBodyElement } from "./core/body"
import { HTMLHeadElement } from "./core/head"

export class HTMLRootElement extends HTMLElement
{
    public readonly head = new HTMLHeadElement()
    public readonly body = new HTMLBodyElement()
    public constructor(lang: string = "en")
    {
        super("html")
        this.properties["lang"] = lang
        this.append(this.head,this.body)
    }
    public override render(): string
    {
        return "<!DOCTYPE html>" + super.render()
    }
}