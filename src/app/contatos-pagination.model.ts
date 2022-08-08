import { Contato } from "./contato.model";
import { PageLink } from "./page-link.model";

export class ContatosPagination {

  items: any;
  page!: number;
  per_page!: number;
  total!: number;
  pages!: number;
  _links!: Array<PageLink>;

}
