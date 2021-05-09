/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://pokemon-store-water.vercel.app/');
});

describe('List', () => {
    it('Should filter the list when type ()', () => {
        cy.get('[data-cy=searchBar]').type('BLAS');
        cy.get('[data-cy=searchButton]').click();

        cy.get('[data-cy=pokemonList] > li').should('have.length', 3);
    });

    it('Should show message when search param returns and an empty list', () => {
        cy.get('[data-cy=searchBar]').type('asdastdfsiydfgsaydfsaud');
        cy.get('[data-cy=searchButton]').click();

         cy.get('[data-cy=messageEmpty1]').should('equal', 'O filtro de pesquisa informado não encontrou nenhum resultado');
         cy.get('[data-cy=messageEmpty2]').should('equal', 'Tente novamente com outros valores');
    });
});
