function deafGrandma() {
  alert('HEY KID');
  let goodbyes = 0;
  while(goodbyes < 2) {
    let response = window.prompt();
    if(response !== 'GOODBYE' && response.toUpperCase() === response) {
      alert('NOT SINCE 1949');
    } else if(response !== 'GOODBYE' && response.toUpperCase() !== response) {
      alert('SPEAK UP SONNY');
    }
    if(response === 'GOODBYE') {
      if(goodbyes === 0) {
        alert('LEAVING SO SOON?');
      }
      if(goodbyes === 1) {
        alert('SEE YA LATER ALLIGATOR');
      }
      goodbyes += 1;
    }
    if(goodbyes === 2) {
      return;
    }
  }
}

deafGrandma();
