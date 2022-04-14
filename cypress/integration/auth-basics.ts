function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
        date.getFullYear(),
    ].join('/');
}

it('register', () => {
    cy.visit('http://localhost:4200/auth/login');
    cy.get('#register').click();
    cy.get('#mat-input-2').clear();
    cy.get('#mat-input-2').type('8003033333');
    cy.get('#mat-input-3').clear();
    cy.get('#mat-input-3').type('HPFUBC6Z');
    cy.get('#mat-input-4').clear();
    cy.get('#mat-input-4').type('mail@mail.bg');
    cy.get('#mat-input-5').clear();
    cy.get('#mat-input-5').type('asd123A-');
    cy.get('.mat-button-wrapper').click();
    cy.get('.ng-submitted').submit();
    cy.location('pathname').should('eq', '/auth/register/success')
})

it('login', () => {
    cy.get('.mat-primary > .mat-button-wrapper').click();
    cy.get('#mat-input-6').clear();
    cy.get('#mat-input-6').type('8003033333');
    cy.get('#mat-input-7').clear();
    cy.get('#mat-input-7').type('asd123A-');
    cy.get('.mat-primary > .mat-button-wrapper').click();
    cy.get('.ng-submitted').submit();
    cy.location('pathname').should('eq', '/')
})

it('political-group-create', () => {
    cy.get(':nth-child(2) > .mat-list-item > .mat-list-item-content').click();
    cy.get('.signin > .mat-focus-indicator').click();
    cy.get('#political-groups-nav > .mat-line').click();
    cy.location('pathname').should('eq', '/political-groups')
    let trCount = 0;
    cy.get('.mat-progress-bar-primary').should('not.be.visible');
    cy.get('.mat-select-arrow-wrapper').click();
    cy.get('#mat-option-3 > .mat-option-text').click();
    cy.wait(4000);
    cy.get('#political-parties-table').find('tr').then(tr => {
        trCount = Cypress.$(tr).length;
        cy.get('[style="display: flex; justify-content: flex-end; padding: 10px;"] > .mat-focus-indicator').click();
        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-6 > .mat-option-text').click();
        cy.get('#mat-input-10').type(makeid());
        cy.get('#mat-input-11').type('Test party description');
        cy.get('#mat-dialog-0 > app-edit-political-group > form > mat-card > mat-card-actions > button.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary').click();
        cy.get('.mat-primary > .mat-button-wrapper').click();
        cy.wait(4000);
        cy.get('#political-parties-table').find('tr').its('length').should('eq', trCount + 1);
    })
});

it('create-new-voting', () => {
    var date = new Date()
    date.setDate(date.getDate() + 1)
    let trCount = 0;
    cy.get('#votings-list-nav > .mat-line').click();
    cy.wait(4000);
    cy.get('#votings-table-id').find('tr').then(tr => {
        trCount = Cypress.$(tr).length;
        cy.get('[style="display: flex; justify-content: flex-end;"] > .mat-focus-indicator > .mat-button-wrapper').click();
        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-11 > .mat-option-text').click();
        cy.get('#mat-input-12').type(formatDate(date));
        cy.get('#mat-input-13').type(makeid());
        cy.get('#mat-input-14').type('test description');
        cy.get('.mat-primary > .mat-button-wrapper').click();
        cy.wait(4000);
        cy.get('#votings-table-id').find('tr').its('length').should('eq', trCount + 1);
    });
});