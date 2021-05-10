/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://pokemon-store-water.vercel.app/');
});

describe('List', () => {
    it('Should contain a placeholder on filter input', () => {
        cy.get('form > input[placeholder]').should('have.attr', 'placeholder', 'Qual pokémon está procurando?'.trim());
    });

    it('Should filter the list when type (BLAS)', () => {
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

    it('Should contain a label at the card button', () => {
        cy.get('[data-cy=cardButton]').should('contain', 'Adicionar no carrinho');
    });

    it('Should contain (R$) at the card price', () => {
        cy.get('[data-cy=cardPrice]').should('contain', 'R$'.trim());
    });

    it('Should increase the number of items at the navbar cart counter', () => {
        cy.get('[data-cy=cartItemsCounter]').should('contain', '0');
        
        cy.get('[data-cy=cardButton]').first().click();
        cy.get('[data-cy=cardButton]').last().click();

        cy.get('[data-cy=cartItemsCounter]').should('contain', '2');
    });

    it('Should show message when cart is empty', () => {
        cy.get('[data-cy=cartButton]').click();
        cy.get('[data-cy=cartEmptyMessage]').should('contain', 'Seu carrinho está vazio'.trim());
    });

    it('Should show a list of items added into cart', () => {
        cy.get('[data-cy=cardButton]').first().click();
        cy.get('[data-cy=cardButton]').last().click();
        
        cy.get('[data-cy=cartButton]').click();

        cy.get('[data-cy=cartList] > li').should('have.length', 2);
    });

    it('Should continue with the selected items in the cart after a page reload', () => {
        cy.get('[data-cy=cardButton]').first().click();
        cy.get('[data-cy=cardButton]').last().click();
        
        cy.reload();

        cy.get('[data-cy=cartButton]').click();
        cy.get('[data-cy=cartList] > li').should('have.length', 2);
    });

    it('Should remove an item from the cart when the quantity is zero', () => {
        cy.get('[data-cy=cardButton]').first().click();
        cy.get('[data-cy=cardButton]').last().click();

        cy.get('[data-cy=cartButton]').click();
        cy.get('[data-cy=cartRemoveButton]').first().click();
        cy.get('[data-cy=cartList] > li').should('have.length', 1);
    });

     it('Should increase an item from in the cart list when the increase button is clicked', () => {
        cy.get('[data-cy=cardButton]').first().click();
        cy.get('[data-cy=cardButton]').last().click();

        cy.get('[data-cy=cartButton]').click();
        cy.get('[data-cy=cartAddButton]').first().click();
        cy.get('[data-cy=cartItemQuantity]').first().should('contain', '2'.trim());
    });
});
