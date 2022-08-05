export enum PageLinkLabel {
  prev = "prev",
  curr = "curr",
  next = "next",
}

export class PageLink {

  rel: PageLinkLabel | undefined;
  href: string | undefined;

}
