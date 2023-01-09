export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(models: T): void {
        const template = this.template(models);
        this.elemento.innerHTML = template;
    }

    protected abstract template(models: T): string;
}