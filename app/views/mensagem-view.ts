import { View } from "./view.js";

export class MensagemView extends View<string> {

    protected template(models: string): string {
        return `
            <p class="alert alert-info">${models}</p>
        `
    }
}