import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from './../models/negociacao';

export class NegociacoesView {

    private elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);

    }

    template(models: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                ${models.lista().map(negociacao => {
                    return `
                    <tr>
                        <td>?</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                    </tr>
                    `;
                }).join('')}
            </tbody>
        </table>

        `;
    }

    update(models: Negociacoes): void {
        const template = this.template(models);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}