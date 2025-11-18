export type Referrer = "no-referrer" | "origin" | "no-referrer-when-downgrade" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-URL"
export type ReferrerPolicy = "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "unsafe-url"
export type CORS = "anonymouse" | "use-credentials" | ""
export type FetchPriority = "high" | "low" | "auto"
export type Blocking = "render"
export type Sizes = `${number}${"x" | "X"}${number}`
export type Relationship = "alternate" | "author" | "bookmark" | "canonical" | "compression-dictionary" | "dns-prefetch" | "external" | "expect" | "help" | "icon" | "license" | "manifest" | "me" | "modulepreload" | "next" | "nofollow" | "noopener" | "noreferrer" | "opener" | "pingback" | "preconnect" | "prefetch" | "preload" | "prev" | "privacy-policy" | "search" | "stylesheet" | "tag" | "terms-of-service"
export type AutoCapitalize = "none" | "off" | "sentences" | "on" | "words" | "characters" 