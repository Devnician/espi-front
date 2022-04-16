import { DateRange } from '@angular/material/datepicker';
import postgresql from 'cypress-postgresql';

let votingId = '';

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
});

it('login', () => {
    cy.get('.mat-primary > .mat-button-wrapper').click();
    loginWithNationalIdentifier('8003033333', '#mat-input-6', '#mat-input-7');
});

it('political-group-create', () => {
    cy.get(':nth-child(2) > .mat-list-item > .mat-list-item-content').click();
    cy.get('.signin > .mat-focus-indicator').click();
    cy.get('#political-groups-nav > .mat-line').click();
    cy.location('pathname').should('eq', '/political-groups')
    cy.get('.mat-progress-bar-primary').should('not.be.visible');
    // cy.get('.mat-select-arrow-wrapper').click();
    // cy.get('#mat-option-3 > .mat-option-text').click();
    cy.wait(4000);
    cy.get('.mat-paginator-range-label').invoke('text').then(elementsCount => {
        let intCount = getTableElementsFromString(elementsCount);
        cy.get('[style="display: flex; justify-content: flex-end; padding: 10px;"] > .mat-focus-indicator').click();
        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-6 > .mat-option-text').click();
        cy.get('#mat-input-10').type(makeid());
        cy.get('#mat-input-11').type('Test party description');
        cy.get('#mat-dialog-0 > app-edit-political-group > form > mat-card > mat-card-actions > button.mat-focus-indicator.mat-raised-button.mat-button-base.mat-primary').click();
        cy.get('.mat-primary > .mat-button-wrapper').click();
        cy.wait(4000);
        assertTableElementsAreIncremented(intCount);
    })
});


function loginWithNationalIdentifier(egn, inputOne, inputTwo) {
    cy.get(inputOne).clear();
    cy.get(inputOne).type(egn);
    cy.get(inputTwo).clear();
    cy.get(inputTwo).type('asd123A-');
    cy.get('.mat-primary > .mat-button-wrapper').click();
    cy.get('.ng-submitted').submit();
    cy.location('pathname').should('eq', '/');
}

function assertTableElementsAreIncremented(intCount: number) {
    cy.get('.mat-paginator-range-label').invoke('text').then(elementsCount => {
        expect(getTableElementsFromString(elementsCount)).to.equal(intCount + 1);
    });
}
it('create-new-voting', () => {
    votingId = makeid();
    var date = new Date()
    date.setDate(date.getDate() + 1)
    cy.get('#votings-list-nav > .mat-line').click();
    cy.wait(4000);
    cy.get('.mat-paginator-range-label').invoke('text').then(elementsCount => {
        let intCount = getTableElementsFromString(elementsCount);
        cy.get('[style="display: flex; justify-content: flex-end;"] > .mat-focus-indicator > .mat-button-wrapper').click();
        cy.get('.mat-select-placeholder').click();
        cy.get('#mat-option-11 > .mat-option-text').click();
        cy.get('#mat-input-12').type(formatDate(date));
        cy.get('#mat-input-13').type(votingId);
        cy.get('#mat-input-14').type('test description');
        cy.get('.mat-primary > .mat-button-wrapper').click();
        cy.wait(4000);
        assertTableElementsAreIncremented(intCount);
    });
});

it('add-party-member', () => {
    cy.get('#political-groups-nav > .mat-line').click();
    cy.wait(4000);
    cy.get(':nth-child(1) > .cdk-column-actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-menu-content > :nth-child(2) > span').click();
    cy.wait(4000);
    cy.get('.mat-paginator-range-label').invoke('text').then(elementsCount => {
        let intCount = getTableElementsFromString(elementsCount);
        cy.get('[style="display: flex; justify-content: flex-end; padding: 10px;"] > .mat-focus-indicator > .mat-button-wrapper').click();
        cy.get('#mat-input-15').type('96');
        cy.wait(10000);
        cy.get('#mat-option-23 > .mat-option-text').click();
        cy.get('[type="submit"] > .mat-button-wrapper').click();
        cy.wait(4000);
        assertTableElementsAreIncremented(intCount);
    });
});

it('create-party-candidate', () => {
    cy.get('#votings-list-nav > .mat-line').click();
    cy.get('.cdk-column-createdAt > .mat-sort-header-container > .mat-sort-header-content').click();
    cy.wait(3000);
    cy.get('.cdk-column-createdAt > .mat-sort-header-container > .mat-sort-header-content').click();
    cy.wait(3000);
    cy.get(':nth-child(1) > .cdk-column-actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-menu-content > .mat-focus-indicator > span').click();
    cy.get('.mat-checkbox-inner-container').click();
    cy.get('.mat-primary > .mat-button-wrapper').click();
    cy.get('#political-groups-nav > .mat-line').click();
    cy.get(':nth-child(1) > .cdk-column-actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-menu-content > :nth-child(2) > span').click();
    cy.wait(3000);
    cy.get('.cdk-column-id > .mat-sort-header-container > .mat-sort-header-content').click();
    cy.wait(3000);
    cy.get('.cdk-column-id > .mat-sort-header-container > .mat-sort-header-content').click();
    cy.wait(3000);
    cy.get(':nth-child(1) > .cdk-column-actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-menu-content > .ng-star-inserted').click();
    cy.get('.mat-select-placeholder').click();
    cy.wait(3000);
    cy.get('#cdk-overlay-19').find('.mat-option').first().click();
    cy.get('.mat-primary > .mat-button-wrapper').click();
    cy.wait(4000);
    cy.get('tbody > :nth-child(1) > .cdk-column-votingId').invoke('text').then(textAdded => {
        expect(textAdded).to.not.be.empty;
    });
});

it('open-section', () => {
    cy.postgresql('UPDATE "public"."voting_section" SET "openedAt"=NULL WHERE  "id"=1');
    cy.postgresql('UPDATE "public"."voting_section" SET "closedAt"=NULL WHERE  "id"=1');
    cy.get('.mat-menu-trigger > .mat-icon').click();
    cy.get('.mat-menu-content > :nth-child(2)').click();
    loginWithNationalIdentifier('7507022300', '#mat-input-19', '#mat-input-20');
    cy.get('#mat-radio-12 > .mat-radio-label > .mat-radio-label-content').click();
    cy.get('.mat-simple-snackbar-action > .mat-focus-indicator').click();
    cy.get('#voting-sections-nav > .mat-line').click();
    cy.wait(3000);
    cy.get('.mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-menu-content > .ng-star-inserted').click();
    cy.wait(4000);
    cy.get('.mat-row > .cdk-column-openedAt').invoke('text').then( text => {
        expect(text).to.not.be.empty;
    });
});

it('vote', () => {
    cy.postgresql('UPDATE "public"."votings" SET "startDate"=\'' + todayDateDB() + '\' WHERE "name"=\''+ votingId +'\'');
    cy.get('.mat-menu-trigger > .mat-icon').click();
    cy.get('.mat-menu-content > :nth-child(2)').click();
    loginWithNationalIdentifier('8003033333', '#mat-input-21', '#mat-input-22');
    cy.get('#mat-radio-17 > .mat-radio-label > .mat-radio-label-content').click();
    cy.wait(4000);
    cy.get('#votings-list-nav > .mat-line').click();
    cy.wait(4000);
    cy.get('.cdk-column-id > .mat-sort-header-container > .mat-sort-header-content').click();
    cy.get('.cdk-column-id > .mat-sort-header-container > .mat-sort-header-content').click();
    cy.wait(4000);
    cy.get(':nth-child(1) > .cdk-column-actions > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-menu-content > .ng-star-inserted > span').click();
    cy.get('#mat-radio-21 > .mat-radio-label > .mat-radio-label-content').click();
    cy.wait(3000);
    cy.get('.mat-line').click();
    cy.wait(4000);
    cy.get('[style="left: 0px; width: calc((50% - 0.5px) * 1 + 0px); top: 0px; height: calc(350px);"] > .mat-grid-tile-content > .mat-card > .mat-card-header > .mat-card-header-text > .mat-card-title > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
        .click();
        cy.get('.mat-menu-content > .mat-focus-indicator').click();
    cy.wait(3000);
    cy.get('#mat-tab-label-0-0').click();
    cy.get('[mat-card-actions=""] > .mat-focus-indicator').click();
    cy.get('[mat-card-actions=""] > .mat-accent').click();
    cy.get('.mat-simple-snack-bar-content').invoke('text').then(text => {
        expect(text).to.be.not.empty;
        cy.get('.mat-simple-snackbar-action > .mat-focus-indicator > .mat-button-wrapper').click()
    });
});

it('close-section', () => {
    cy.visit('http://localhost:4200/auth/login');
    loginWithNationalIdentifier('7507022300', '#mat-input-0', '#mat-input-1');
    cy.get('#mat-radio-3 > .mat-radio-label > .mat-radio-label-content').click();
    cy.wait(4000);
    cy.get('#voting-sections-nav > .mat-line').click();
    cy.wait(4000);
    cy.get('.mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-menu-content > .ng-star-inserted > span').click();
    cy.wait(4000);
    cy.get('.mat-row > .cdk-column-closedAt').invoke('text').then( text => {
        expect(text).to.not.be.empty;
    });
});

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

function todayDateDB() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-') + ' 21:00:00';
}

function getTableElementsFromString(elementsCount) {
    let trCount = String(elementsCount).trim().slice(-2);
    let intCount = parseInt(trCount);
    return intCount;
}