import { HTMLElement } from "../element"
import { HTMLLinkElement } from "./head/link"
import { HTMLCharSetElement, HTMLMetaElement, HTMLPropertyElement } from "./head/meta"
import { HTMLScriptElement } from "./head/script"

export class HTMLHeadElement extends HTMLElement
{
    public readonly titleElement = new HTMLElement("title")
    public get title(){return this.titleElement.content}
    public set title(v){this.titleElement.content = v}
    public constructor()
    {
        super("head")
        this.addCharset("UTF-8")
        this.append(this.titleElement)
        this.addMetaViewport({
            width: "device-width",
            initialScale: 1.0
        })
        this.addMetaGenerator(`${PKG_NAME} v${PKG_VERSION}`)
    }
    public addCharset(...args: ConstructorParameters<typeof HTMLCharSetElement>): this
    {
        return this.append(new HTMLCharSetElement(...args))
    }
    public addMeta(...args: ConstructorParameters<typeof HTMLMetaElement>): this
    {
        return this.append(new HTMLMetaElement(...args))
    }
    public addMetaApplicationName(...args: ConstructorParameters<typeof HTMLMetaElement.ApplicationNameElement>): this
    {
        return this.append(new HTMLMetaElement.ApplicationNameElement(...args))
    }
    public addMetaColorScheme(...args: ConstructorParameters<typeof HTMLMetaElement.ColorSchemeElement>): this
    {
        return this.append(new HTMLMetaElement.ColorSchemeElement(...args))
    }
    public addMetaDescription(...args: ConstructorParameters<typeof HTMLMetaElement.DescriptionElement>): this
    {
        return this.append(new HTMLMetaElement.DescriptionElement(...args))
    }
    public addMetaGenerator(...args: ConstructorParameters<typeof HTMLMetaElement.GeneratorElement>): this
    {
        return this.append(new HTMLMetaElement.GeneratorElement(...args))
    }
    public addMetaKeywords(...args: ConstructorParameters<typeof HTMLMetaElement.KeywordsElement>): this
    {
        return this.append(new HTMLMetaElement.KeywordsElement(...args))
    }
    public addMetaReferrer(...args: ConstructorParameters<typeof HTMLMetaElement.ReferrerElement>): this
    {
        return this.append(new HTMLMetaElement.ReferrerElement(...args))
    }
    public addMetaThemeColor(...args: ConstructorParameters<typeof HTMLMetaElement.ThemeColorElement>): this
    {
        return this.append(new HTMLMetaElement.ThemeColorElement(...args))
    }
    public addMetaViewport(...args: ConstructorParameters<typeof HTMLMetaElement.ViewportElement>): this
    {
        return this.append(new HTMLMetaElement.ViewportElement(...args))
    }
    public addMetaCreator(...args: ConstructorParameters<typeof HTMLMetaElement.CreatorElement>): this
    {
        return this.append(new HTMLMetaElement.CreatorElement(...args))
    }
    public addMetaGoogleBot(...args: ConstructorParameters<typeof HTMLMetaElement.GoogleBotElement>): this
    {
        return this.append(new HTMLMetaElement.GoogleBotElement(...args))
    }
    public addMetaPublisher(...args: ConstructorParameters<typeof HTMLMetaElement.PublisherElement>): this
    {
        return this.append(new HTMLMetaElement.PublisherElement(...args))
    }
    public addMetaRobots(...args: ConstructorParameters<typeof HTMLMetaElement.RobotsElement>): this
    {
        return this.append(new HTMLMetaElement.RobotsElement(...args))
    }
    public addProperty(...args: ConstructorParameters<typeof HTMLPropertyElement>): this
    {
        return this.append(new HTMLPropertyElement(...args))
    }
    public addLink(...args: ConstructorParameters<typeof HTMLLinkElement>): this
    {
        return this.append(new HTMLLinkElement(...args))
    }
    public addScript(src: string,module?: boolean): this
    {
        return this.append(new HTMLScriptElement(src,module))
    }
    public addScriptInline(content: string,module?: boolean): this
    {
        const script = new HTMLScriptElement(undefined,module)
        script.content = content
        return this.append(script)
    }
    public setTitle(title: string): this
    {
        this.title = title
        return this
    }
}