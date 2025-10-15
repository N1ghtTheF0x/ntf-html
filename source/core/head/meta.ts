import { Referrer } from "../../attributes"
import { HTMLElement } from "../../element"

export class HTMLMetaElement extends HTMLElement
{
    public get name(): string {return String(this.properties["name"])}
    public set name(v){this.properties["name"] = v}
    public get metaContent(): string {return String(this.properties["content"])}
    public set metaContent(v){this.properties["content"] = v}
    public constructor(name: string,content: string,properties: HTMLElement.Properties = {})
    {
        super("meta")
        this.properties = properties
        this.name = name
        this.metaContent = content
    }
}

export namespace HTMLMetaElement
{
    export type ColorScheme = "normal" | "light" | "dark" | "light dark" | "dark light" | "only light"
    export type StandardRobots = "index" | "noindex" | "follow" | "nofollow"
    export type GoogleRobots = StandardRobots | "all" | "none" | "noarchive" | "nosnippet" | "noimageindex"
    export type YahooRobots = StandardRobots | "noarchive"
    export type BingRobots = StandardRobots | "nocache"
    export type Robots = StandardRobots | GoogleRobots | YahooRobots | BingRobots

    export class ApplicationNameElement extends HTMLMetaElement
    {
        public constructor(name: string,language?: string)
        {
            super("application-name",name)
            if(typeof language == "string")
                this.properties["lang"] = language
        }
    }
    export class ColorSchemeElement extends HTMLMetaElement
    {
        public constructor(content: ColorScheme,media?: string)
        {
            super("color-scheme",content)
            if(typeof media == "string")
                this.properties["media"] = media
        }
    }
    export class DescriptionElement extends HTMLMetaElement
    {
        public constructor(description: string)
        {
            super("description",description)
        }
    }
    export class GeneratorElement extends HTMLMetaElement
    {
        public constructor(name: string)
        {
            super("generator",name)
        }
    }
    export class KeywordsElement extends HTMLMetaElement
    {
        public constructor(...keywords: Array<string>)
        {
            super("keywords",keywords.map(w => w.replaceAll(","," ")).join(","))
        }
    }
    export class ReferrerElement extends HTMLMetaElement
    {
        public constructor(referrer: Referrer)
        {
            super("referrer",referrer)
        }
    }
    export class ThemeColorElement extends HTMLMetaElement
    {
        public constructor(css: string,media?: string)
        {
            super("theme-color",css)
            if(typeof media == "string")
                this.properties["media"] = media
        }
    }
    export interface IViewport
    {
        width?: number | "device-width"
        height?: number | "device-height"
        initialScale?: number
        maximumScale?: number
        minimumScale?: number
        userScalable?: boolean
        interactiveWidget?: "resizes-visual" | "resizes-content" | "overlays-content"
        viewportFit?: "auto" | "contain" | "cover"
    }
    function __viewport__(options: IViewport): string
    {
        const items: Array<string> = []
        function __add__<K extends keyof IViewport>(name: string,key: K,f?: (v: IViewport[K]) => any): void
        {
            if(key in options && typeof options[key] != undefined)
                items.push(`${name}=${typeof f == "function" ? f(options[key]) : options[key]}`)
        }
        __add__("width","width")
        __add__("height","height")
        __add__("initial-scale","initialScale",v => v?.toFixed(1))
        __add__("maximum-scale","maximumScale",v => v?.toFixed(1))
        __add__("minimum-scale","minimumScale",v => v?.toFixed(1))
        __add__("user-scalable","userScalable",v => v ? "yes" : "no")
        __add__("interactive-widget","interactiveWidget")
        __add__("viewport-fit","viewportFit")
        return items.join(",")
    }
    export class ViewportElement extends HTMLMetaElement
    {
        public constructor(options: IViewport)
        {
            super("viewport",__viewport__(options))
        }
    }
    export class CreatorElement extends HTMLMetaElement
    {
        public constructor(name: string)
        {
            super("creator",name)
        }
    }
    export class GoogleBotElement extends HTMLMetaElement
    {
        public constructor(robots: GoogleRobots)
        {
            super("googlebot",robots)
        }
    }
    export class PublisherElement extends HTMLMetaElement
    {
        public constructor(name: string)
        {
            super("publisher",name)
        }
    }
    export class RobotsElement extends HTMLMetaElement
    {
        public constructor(robots: Robots)
        {
            super("robots",robots)
        }
    }
}

export class HTMLPropertyElement extends HTMLElement
{
    public get property(): string {return String(this.properties["property"])}
    public set property(v){this.properties["property"] = v}
    public get metaContent(): string {return String(this.properties["content"])}
    public set metaContent(v){this.properties["content"] = v}
    public constructor(property: string,content: string,properties: HTMLElement.Properties = {})
    {
        super("meta")
        this.properties = properties
        this.property = property
        this.metaContent = content
    }
}

export namespace HTMLPropertyElement
{
    export type OpenGraphType = ""
    export type Determiner = "a" | "an" | "the" | "" | "auto"
    export class TitleElement extends HTMLPropertyElement
    {
        public constructor(title: string)
        {
            super("og:title",title)
        }
    }
    export class TypeElement extends HTMLPropertyElement
    {
        public constructor(type: OpenGraphType)
        {
            super("og:type",type)
        }
    }
    export class ImageElement extends HTMLPropertyElement
    {
        public constructor(url: string)
        {
            super("og:image",url)
        }
    }
    export class UrlElement extends HTMLPropertyElement
    {
        public constructor(url: string)
        {
            super("og:url",url)
        }
    }
    export class AudioElement extends HTMLPropertyElement
    {
        public constructor(url: string)
        {
            super("og:audio",url)
        }
    }
    export class DescriptionElement extends HTMLPropertyElement
    {
        public constructor(description: string)
        {
            super("og:description",description)
        }
    }
    export class DeterminerElement extends HTMLPropertyElement
    {
        public constructor(determiner: Determiner)
        {
            super("og:determiner",determiner)
        }
    }
    export class LocaleElement extends HTMLPropertyElement
    {
        public constructor(locale: string)
        {
            super("og:locale",locale)
        }
    }
    export class LocaleAlternateElement extends HTMLPropertyElement
    {
        public constructor(locale: string)
        {
            super("og:locale:alternate",locale)
        }
    }
    export class SiteNameElement extends HTMLPropertyElement
    {
        public constructor(name: string)
        {
            super("og:site_name",name)
        }
    }
    export class VideoElement extends HTMLPropertyElement
    {
        public constructor(url: string)
        {
            super("og:video",url)
        }
    }
}

export class HTMLCharSetElement extends HTMLElement
{
    public get charset(): HTMLCharSetElement.CharSet {return String(this.properties["charset"]) as HTMLCharSetElement.CharSet}
    public set charset(v) {this.properties["charset"] = v}
    public constructor(charset: HTMLCharSetElement.CharSet)
    {
        super("meta")
        this.charset = charset
    }
}

export namespace HTMLCharSetElement
{
    export type CharSet = "UTF-8"
}