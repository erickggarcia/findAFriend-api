export class PetsDoesNotExistsError extends Error {
    constructor() {
        super("Não existem pets cadastrados na cidade")
    }
}