import { Negotiation } from "../models/negociation";
import { Negotiations } from "../models/negociations";

export class ControllerNegotiation { /*negociation class*/
  private inputData: HTMLInputElement; //HTMLInputElement is type of field in html form
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negotiations();

  constructor() {
    this.inputData = document.querySelector("#data"); //#data is a id of field in html form and inputdata respects a htmlinputelement type (obvious) this extends a inputquantidade and inputvalor
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
  }

  addNegoc(): void {
    const negociacao = this.createNegoc();
    negociacao.data.setDate(12);
    this.negociacoes.add(negociacao);
    console.log(this.negociacoes.listNegoc());
    this.cleanForm();
  }
  createNegoc(): Negotiation {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ",")); //transform 9999-99-99 string in date replacing - by ,
    const quantidade = parseInt(this.inputQuantidade.value); //parseInt is the function that transforms string into integer
    const valor = parseFloat(this.inputValor.value); //parseFloat is the function that transforms values into float
    return new Negotiation(date, quantidade, valor); //return new negociacao class instanceated
  }

  cleanForm(): void { //this method clean the form in html and send cursor in input date
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";
    this.inputData.focus(); //this method send cursor to date field
  }
}
