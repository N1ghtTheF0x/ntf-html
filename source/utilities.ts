import { HTMLElement } from "./element"

export const br = () => new HTMLElement("br")
export const p = (...args: Array<any>) => new HTMLElement("p",...args)
export const heading = (level: 1 | 2 | 3 | 4 | 5 | 6,...args: Array<any>) => new HTMLElement(`h${level}`,...args)