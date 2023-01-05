export class MensagemView {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template(models) {
        return `
            <p class="alert alert-info">${models}</p>
        `;
    }
    update(models) {
        const template = this.template(models);
        this.element.innerHTML = template;
    }
}
