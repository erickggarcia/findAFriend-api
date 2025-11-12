export class CityDoesNotExistsError extends Error {
    constructor() {
        super("A Cidade informada não existe")
    }
}