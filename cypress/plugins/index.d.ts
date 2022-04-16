declare namespace Cypress {
    interface Chainable<Subject> {
        postgresql(query): Chainable<(string)>;
    }
}