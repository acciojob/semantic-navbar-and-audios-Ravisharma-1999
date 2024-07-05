() => {
  // Wait for the page to load or for elements to become available
  cy.contains('3 random audios').should('be.visible');

  // Check for audio elements and their attributes
  cy.get('audio').should('have.length', 3).each(($audio, index) => {
    expect($audio).to.have.attr('controls');
    const expectedSrcs = [
      'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3',
      'http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg',
      'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3'
    ];
    expect($audio.attr('src')).to.equal(expectedSrcs[index]);
  });
}


