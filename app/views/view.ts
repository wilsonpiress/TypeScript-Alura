export class View<T> {

    protected elemento: HTMLElement;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(models: T): void {
        const template = this.template(models);
        this.elemento.innerHTML = template;
    }

    template(models: T): string {
        throw Error('Classe filha precisa implementar o método template');
    }
}