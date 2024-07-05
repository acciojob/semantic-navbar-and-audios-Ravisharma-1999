describe('Audio Section Test', () => {
    it('should display 3 audios with correct sources and controls', () => {
        cy.visit('/path/to/your/page'); // Replace with the actual path to your page

        // Assert the heading
        cy.contains('3 random audios');

        // Assert there are 3 audio elements
        cy.get('audio').should('have.length', 3);

        // Assert each audio element has the 'controls' attribute and correct source
        cy.get('audio').each(($audio, index) => {
            cy.wrap($audio).should('have.attr', 'controls');
            cy.wrap($audio).should('have.attr', 'src').and('equal', [
                'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
                'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
                'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
            ][index]);
        });
    });
});
