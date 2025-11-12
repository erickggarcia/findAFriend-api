export class StateDoesNotExistsError extends Error {
    constructor() {
        super("O Estado informado não existe")
    }
}