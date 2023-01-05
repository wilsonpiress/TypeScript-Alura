export class MensagemView {

    private element: HTMLElement;
    constructor(seletor: string) {
        this.element = document.querySelector(seletor);
    }

    template(models: string): string {
        return `
            <p class="alert alert-info">${models}</p>
        `
    }

    update(models: string): void {
        const template = this.template(models);
        this.element.innerHTML = template;
    }

}