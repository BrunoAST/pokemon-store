/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://pokemon-store-water.vercel.app/');
});

describe('List', () => {
    it('Should contain a placeholder on filter input', () => {
        cy.get('form > input[placeholder]').should('have.attr', 'placeholder', 'Qual pokémon está procurando?'.trim());
    });

    it('Should filter the list when type ()', () => {
        cy.get('[data-cy=searchBar]').type('BLAS');
        cy.get('[data-cy=searchButton]').click();

        cy.get('[data-cy=pokemonList] > li').should('have.length', 3);
    });

    it('Should show message when search param returns and an empty list', () => {
        cy.get('[data-cy=searchBar]').type('asdastdfsiydfgsaydfsaud');
        cy.get('[data-cy=searchButton]').click();

        cy.get('[data-cy=messageEmpty1]').should('contain', 'O filtro de pesquisa informado não encontrou nenhum resultado');
        cy.get('[data-cy=messageEmpty2]').should('contain', 'Tente novamente com outros valores');
    });

    it('Should contain a label in card button', () => {
        cy.get('[data-cy=cardButton]').should('contain', 'Adicionar no carrinho');
    });

    it('Should contain R$ at the card price', () => {
        cy.get('[data-cy=cardPrice]').should('contain', 'R$');
    });

    it('Should increase the number of items in navbar cart counter', () => {
        cy.get('[data-cy=cardButton]').click();
        cy.get('[data-cy=cardButton]').click();
        cy.get('[data-cy=cardButton]').click();

        cy.get('[data-cy=cartItemsCounter]').should('contain', '3');
    });
});
