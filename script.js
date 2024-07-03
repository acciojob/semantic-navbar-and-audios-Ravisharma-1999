it('Verifies 3 random audios are present', () => {
  cy.visit('your_page_url');  // Replace with your actual application URL

  // Wait for the heading to appear and verify its content
  cy.contains('3 random audios', { timeout: 3000 }).should('exist');

  // Verify the audio elements
  cy.get('audio').should($audios => {
    expect($audios).to.have.length(3);  // Ensure there are 3 audio elements
    expect($audios).to.have.attr('controls');  // Check if each audio has controls attribute

    // Verify the sources of the audio elements
    const srcs = $audios.map((i, el) => Cypress.$(el).attr('src'));
    expect(srcs.get()).to.deep.eq([
      'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
      'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
      'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
    ]);
  });
});
