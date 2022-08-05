import { Contato } from "./contato.model";
import { PageLink } from "./page-link.model";

export class ContatosPagination {

  items: Array<Contato> | undefined;
  page: bigint | undefined;
  per_page: bigint | undefined;
  total: bigint | undefined;
  pages: bigint | undefined;
  _links: Array<PageLink> | undefined;

}
