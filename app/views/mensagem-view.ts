import { View } from "./view.js";

export class MensagemView extends View {

    template(models: string): string {
        return `
            <p class="alert alert-info">${models}</p>
        `
    }

    update(models: string): void {
        const template = this.template(models);
        this.elemento.innerHTML = template;
    }

}