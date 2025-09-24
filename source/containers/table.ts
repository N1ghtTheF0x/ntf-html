import { HTMLElement } from "../element"

export class HTMLTableElement extends HTMLElement
{
    public override children: Array<HTMLTableContentElement> = []
    public constructor()
    {
        super("table")
    }
    public override append(...items: Array<HTMLTableContentElement>): this
    {
        return super.append(...items)
    }
    public addHead(...rows: Array<HTMLTableRowElement>): HTMLTableContentElement
    {
        const head = new HTMLTableContentElement("thead",...rows)
        this.append(head)
        return head
    }
    public addBody(...rows: Array<HTMLTableRowElement>): HTMLTableContentElement
    {
        const body = new HTMLTableContentElement("tbody",...rows)
        this.append(body)
        return body
    }
}

export class HTMLTableContentElement extends HTMLElement
{
    public override children: Array<HTMLTableRowElement> = []
    public constructor(type: "thead" | "tbody",...rows: Array<HTMLTableRowElement>)
    {
        super(type,...rows)
    }
    public override append(...items: Array<HTMLTableRowElement>): this
    {
        return super.append(...items)
    }
    public addRow(...children: Array<HTMLTableRowChildren>): HTMLTableRowElement
    {
        const row = new HTMLTableRowElement(...children)
        this.append(row)
        return row
    }
}

export class HTMLTableRowElement extends HTMLElement
{
    public override children: Array<HTMLTableRowChildren> = []
    public constructor(...children: Array<HTMLTableRowChildren>)
    {
        super("tr",...children)
    }
    public override append(...items: Array<HTMLTableRowChildren>): this
    {
        return super.append(...items)
    }
    public addHeading(children: Array<any>,scope?: HTMLTableHeadingElement["scope"]): HTMLTableHeadingElement
    {
        const heading = new HTMLTableHeadingElement(...children)
        if(typeof scope == "string")
            heading.scope = scope
        this.append(heading)
        return heading
    }
    public addCell(...children: Array<any>): HTMLTableCellElement
    {
        const cell = new HTMLTableCellElement(...children)
        this.append(cell)
        return cell
    }
}

export class HTMLTableHeadingElement extends HTMLElement
{
    public get scope(){return this.properties["scope"] as "col" | "row"}
    public set scope(v){this.properties["scope"] = v}
    public constructor(...children: Array<any>)
    {
        super("th",...children)
    }
}

export class HTMLTableCellElement extends HTMLElement
{
    public constructor(...children: Array<any>)
    {
        super("td",...children)
    }
}

export type HTMLTableRowChildren = HTMLTableHeadingElement | HTMLTableCellElement
