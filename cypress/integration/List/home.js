/// <reference types="cypress" />

beforeAll(() => {
    cy.visit('https://pokemon-store-water.vercel.app/');
});

describe('List', () => {
    it('Should filter the list when type ()', () => {
        cy.get('[data-cy=searchBar]').type('BLAS');
        cy.get('[data-cy=searchButton]').click();

        cy.get('[data-cy=pokemonList]').should('have.length', 3);
    });

    // it('Should show message when search param returns and an empty list', () => {

    // });
});
