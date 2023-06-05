import { Negotiation } from "./negociation";

export class Negotiations {
  private negociacoes: Negotiation[] = []; //instance a list of negociation

  add(negociacao: Negotiation) {
    this.negociacoes.push(negociacao);
  }

  listNegoc(): readonly Negotiation[] {
    return this.negociacoes;
  }
}
